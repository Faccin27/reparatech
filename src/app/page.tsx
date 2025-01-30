import Hero from '@/components/hero'
import Feature from '@/components/features'
import Schedule from '@/components/schedule'
import Footer from '@/components/footer'
import Chatbot from '@/components/chatbot'

export default function Home() {
  return (
    <div className='overflow-hidden'>
    <Hero/>
    <Feature />
    <Chatbot />
    <Schedule />
    <Footer />
    </div>
  );
}
