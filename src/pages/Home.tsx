import { motion } from "framer-motion"
import { ArrowRight, Code, Database, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-purple/20 via-background to-background" />
        
        <div className="container px-4 mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-cyan to-primary-purple rounded-xl rotate-45 blur-xl opacity-50 animate-pulse" />
              <div className="relative bg-background border border-white/10 p-4 rounded-xl rotate-45 flex items-center justify-center">
                <div className="-rotate-45">
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-cyan to-primary-purple">
                    NB
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
          >
            NEXA<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-cyan to-primary-purple">BYTE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-text-muted mb-8 tracking-widest font-light"
          >
            SOLUCIONES INFORMÁTICAS
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/contact">
              <Button size="lg" className="group">
                Iniciar Proyecto
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-background relative">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Ofrecemos soluciones tecnológicas integrales diseñadas para impulsar el crecimiento de tu empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:border-primary-cyan/50 group cursor-pointer">
              <Code className="w-12 h-12 text-primary-cyan mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-2">Desarrollo Web</h3>
              <p className="text-text-muted text-sm">Sitios web modernos, rápidos y responsivos con las últimas tecnologías.</p>
            </Card>

            <Card className="hover:border-primary-purple/50 group cursor-pointer">
              <Smartphone className="w-12 h-12 text-primary-purple mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-2">Apps Móviles</h3>
              <p className="text-text-muted text-sm">Aplicaciones nativas y multiplataforma para iOS y Android.</p>
            </Card>

            <Card className="hover:border-primary-cyan/50 group cursor-pointer">
              <Database className="w-12 h-12 text-primary-cyan mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-2">Consultoría IT</h3>
              <p className="text-text-muted text-sm">Asesoramiento experto para optimizar tus procesos tecnológicos.</p>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline">Ver Todos los Servicios</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-cyan/5" />
        <div className="container px-4 mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Innovación que Transforma</h2>
              <p className="text-text-muted mb-6 text-lg">
                En NEXABYTE, nos dedicamos a transformar desafíos complejos en soluciones digitales elegantes y eficientes. 
                Nuestro equipo de expertos combina creatividad técnica con visión estratégica para entregar resultados excepcionales.
              </p>
              <ul className="space-y-4 mb-8">
                {['Tecnología de punta', 'Soporte dedicado', 'Resultados garantizados'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-cyan rounded-full" />
                    <span className="text-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button variant="secondary">Contáctanos</Button>
              </Link>
            </div>
            <div className="flex-1 relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-primary-cyan/20 flex items-center justify-center bg-[#050A18]">
                <img 
                  src="/logo.png" 
                  alt="NEXABYTE Logo" 
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home