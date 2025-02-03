"use client"

import { useEffect } from "react"
import { motion, useAnimation, type Variants, useInView } from "framer-motion"
import { useRef } from "react"
import Hero from "@/components/hero"
import Feature from "@/components/features"
import Schedule from "@/components/schedule"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import type React from "react" 

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
}

function AnimatedSection({ children, variants }: { children: React.ReactNode; variants: Variants }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
      {children}
    </motion.div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <AnimatedSection variants={fadeInUp}>
        <Hero />
        <h2 className="text-3xl font-extrabold text-white text-center mt-12">
          Nossos Serviços
        </h2>
      </AnimatedSection>

      <AnimatedSection variants={fadeInLeft}>
        <Feature />
        <h2 className="text-3xl font-extrabold text-white text-center mb-8">
          Assistente Virtual ReparaTech
        </h2>
      </AnimatedSection>

      <AnimatedSection variants={scaleIn}>
        <Chatbot />
        <h2 className="text-3xl font-extrabold text-center mb-8 text-white">
          Agende seu Atendimento
        </h2>
      </AnimatedSection>

      <AnimatedSection variants={fadeInRight}>
        <Schedule />
      </AnimatedSection>

      <AnimatedSection variants={fadeInUp}>
        <Footer />
      </AnimatedSection>
    </div>
  )
}

