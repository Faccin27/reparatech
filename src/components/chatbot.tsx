"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

type Message = {
  content: string;
  role: "user" | "assistant";
};

export default function AIChatbot() {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Olá! Como posso ajudar hoje?",
      role: "assistant",
    },
  ]);
  
  const systemPrompt = `
  Você é o assistente virtual da ReparaTech, especializado em atendimento ao cliente para nossa assistência técnica de celulares, smartphones, computadores e notebooks.
  
  DIRETRIZES PRINCIPAIS:
  1. Responda APENAS questões relacionadas a reparos de celulares, smartphones, computadores, notebooks e nossos serviços.
  2. Para questões fora do escopo de assistência técnica, responda: "Desculpe, só posso ajudar com questões relacionadas a reparos de celulares, smartphones, computadores e notebooks. Para outros assuntos, por favor, entre em contato diretamente com nossa equipe."
  3. Seja sempre profissional e claro nas respostas.
  4. Use linguagem simples e acessível.
  5. Em casos complexos, sempre recomende uma avaliação presencial.

  SERVIÇOS OFERECIDOS:
  - Troca de tela
  - Troca de bateria
  - Reparo de placa
  - Problemas de software
  - Troca de conectores
  - Reparo de câmeras
  - Recuperação de dados
  - Manutenção de computadores e notebooks
  - Formatação de sistemas
  - Diagnóstico e reparo de hardware
  - Remoção de vírus e malware
  - Otimização de desempenho

  INFORMAÇÕES DE ATENDIMENTO:
  - Horário: Segunda a Sexta, 8h às 18h; Sábado, 9h às 13h
  - Prazo médio para reparos simples: 2 horas
  - Prazo médio para reparos complexos: 24-48 horas
  - Garantia padrão: 90 dias para peças e serviços
  - Orçamento: Gratuito
  - Agendamento: Você pode agendar um horário rolando um pouco mais abaixo no site.

  EXEMPLOS DE RESPOSTAS PARA PERGUNTAS COMUNS:

  Pergunta: "Quanto custa trocar a tela do iPhone?"
  Resposta: "O valor da troca de tela varia conforme o modelo do iPhone. Para fornecer um orçamento preciso, precisamos saber qual é o modelo do seu aparelho. Você poderia nos informar?"

  Pergunta: "Meu celular molhou, o que faço?"
  Resposta: "Em caso de celular molhado, siga estas orientações imediatas: 1) Desligue o aparelho imediatamente; 2) Não tente ligar; 3) Não carregue; 4) Traga urgentemente à nossa loja para uma avaliação profissional. Temos equipamentos específicos para tratamento de oxidação."

  Pergunta: "Meu computador está muito lento. Vocês conseguem resolver?"
  Resposta: "Sim, podemos ajudar a melhorar o desempenho do seu computador. Fazemos serviços de otimização de sistema, remoção de vírus e ajustes de hardware, se necessário. Recomendo trazer o equipamento para uma avaliação gratuita em nossa loja."

  Pergunta: "Vocês fazem desbloqueio de conta Google?"
  Resposta: "Por questões de segurança e políticas da empresa, só realizamos desbloqueio de conta Google mediante apresentação de nota fiscal do aparelho e documentação do proprietário."

  Pergunta: "Quanto tempo demora para trocar uma bateria?"
  Resposta: "A troca de bateria geralmente leva cerca de 2 horas, dependendo do modelo do aparelho. Fazemos testes completos de funcionamento após a troca para garantir a qualidade do serviço."

  COMO RESPONDER SOBRE PREÇOS:
  - Nunca forneça valores exatos sem saber o modelo do aparelho ou equipamento.
  - Sempre solicite o modelo específico do dispositivo.
  - Informe que os preços podem variar conforme a avaliação técnica presencial.

  PROCEDIMENTOS DE SEGURANÇA:
  - Sempre mencione que fazemos backup dos dados quando necessário.
  - Explique que todos os reparos incluem garantia de 90 dias.
  - Informe que utilizamos peças de qualidade compatível com o original.
  - Ressalte a importância da avaliação técnica presencial para casos complexos.

  RESPOSTAS PARA ASSUNTOS FORA DO ESCOPO:
  Se perguntarem sobre assuntos não relacionados a reparo de celulares, computadores, notebooks ou serviços da loja, responda:
  "Desculpe, sou especializado apenas em assuntos relacionados a reparos de celulares, smartphones, computadores e notebooks. Para outras informações, por favor, entre em contato com nossa equipe pelo telefone ou visite nossa loja."
`;

  const genAI = new GoogleGenerativeAI(
    "sua key aqui"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Adiciona uma verificação inicial se a mensagem está vazia
      if (!message.trim()) {
        return;
      }

      // Add user message to chat
      const userMessage: Message = {
        content: message,
        role: "user",
      };
      
      setMessages(prev => [...prev, userMessage]);
      
      // Create conversation history for context
      const conversationHistory = messages
        .map(msg => `${msg.role === "user" ? "Usuário" : "Assistente"}: ${msg.content}`)
        .join("\n");

      const fullPrompt = `${systemPrompt}\n\n${conversationHistory}\nUsuário: ${message}\nAssistente:`;
      
      const res = await model.generateContent(fullPrompt);
      
      // Add assistant response to chat
      const assistantMessage: Message = {
        content: res.response.text(),
        role: "assistant",
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setMessage("");
    } catch (error) {
      const errorMessage: Message = {
        content: "Desculpe, ocorreu um erro. Por favor, tente novamente ou entre em contato conosco diretamente.",
        role: "assistant",
      };
      setMessages(prev => [...prev, errorMessage]);
      console.error("Erro na geração:", error);
    }
    setMessage("");
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-white text-center mb-8">
          Assistente Virtual ReparaTech
        </h2>
        <div className="bg-gray-900 rounded-lg shadow-lg p-6">
          <div className="h-96 mb-4 overflow-y-auto bg-gray-800 rounded-lg p-4">
            {messages.map((msg, index) => (
              <div key={index} className="mb-4">
                {msg.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-white items-center flex justify-center mb-2">
                    <span className="text-black font-bold text-xl">R</span>
                  </div>
                )}
                <div className={`${msg.role === "user" ? "ml-auto text-right" : ""} max-w-[80%]`}>
                  <p className={`${
                    msg.role === "user" ? "bg-blue-500/30" : "bg-gray-700"
                  } inline-block rounded-lg px-4 py-2 text-white`}>
                    {msg.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Digite sua dúvida sobre nossos serviços aqui..."
              className="flex-grow px-4 py-2 bg-gray-700 text-white rounded-l-lg focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500/30 text-white px-4 py-2 rounded-r-lg hover:bg-violet-600 transition-colors"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}