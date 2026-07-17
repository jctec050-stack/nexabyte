import { motion } from "framer-motion"
import { ArrowRight, Code, Database, Smartphone, Calculator, ShieldCheck, Zap, Layers } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Link } from "react-router-dom"
import SEO from "@/components/common/SEO"

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="NEXABYTE - Soluciones Informáticas y Desarrollo Web de Alto Rendimiento"
        description="Transformamos ideas en productos digitales de alto rendimiento. Especialistas en desarrollo web, aplicaciones móviles, base de datos y consultoría IT."
        keywords="nexabyte, desarrollo web paraguay, aplicaciones moviles paraguay, base de datos, software paraguay, soluciones informaticas, cotizador web"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "NEXABYTE",
          "image": "/logo.png",
          "description": "Transformamos ideas en productos digitales de alto rendimiento. Especialistas en desarrollo web, aplicaciones móviles, base de datos y consultoría IT.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Hernandarias",
            "addressRegion": "Alto Paraná",
            "addressCountry": "PY"
          },
          "telephone": "+595 976 392 214",
          "url": window.location.origin,
          "priceRange": "$$"
        }}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-purple/20 via-background to-background" />
        
        {/* Decorative Grid and Lights */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
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
                <div className="-rotate-45 w-full h-full flex items-center justify-center">
                  <img 
                    src="/logo.png" 
                    alt="NEXABYTE Logo" 
                    className="w-full h-full object-contain" 
                  />
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
            className="text-lg md:text-xl text-text-muted/80 max-w-2xl mx-auto mb-8 font-light leading-relaxed"
          >
            Transformamos ideas en productos digitales de alto rendimiento. Soluciones a medida en desarrollo web, móvil y sistemas empresariales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full group shadow-lg shadow-primary-cyan/20">
                Iniciar Proyecto
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/cotizador" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full group gap-2 border-primary-purple/40 hover:border-primary-purple hover:bg-primary-purple/10">
                <Calculator className="w-5 h-5 text-primary-purple" />
                Cotizar Proyecto Online
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-background relative border-t border-white/5">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Ofrecemos soluciones tecnológicas integrales diseñadas para impulsar el crecimiento de tu empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:border-primary-cyan/50 group cursor-pointer relative overflow-hidden backdrop-blur-md bg-white/[0.02]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-cyan/5 rounded-full blur-2xl -z-10 transition-all duration-300 group-hover:bg-primary-cyan/10" />
              <Code className="w-12 h-12 text-primary-cyan mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-2">Desarrollo Web</h3>
              <p className="text-text-muted text-sm">Sitios web modernos, rápidos y responsivos con las últimas tecnologías.</p>
            </Card>

            <Card className="hover:border-primary-purple/50 group cursor-pointer relative overflow-hidden backdrop-blur-md bg-white/[0.02]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-purple/5 rounded-full blur-2xl -z-10 transition-all duration-300 group-hover:bg-primary-purple/10" />
              <Smartphone className="w-12 h-12 text-primary-purple mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-2">Apps Móviles</h3>
              <p className="text-text-muted text-sm">Aplicaciones nativas y multiplataforma para iOS y Android.</p>
            </Card>

            <Card className="hover:border-primary-cyan/50 group cursor-pointer relative overflow-hidden backdrop-blur-md bg-white/[0.02]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-cyan/5 rounded-full blur-2xl -z-10 transition-all duration-300 group-hover:bg-primary-cyan/10" />
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

      {/* Bento Grid: Por Qué Elegirnos (Credibilidad y Prueba Social) */}
      <section className="py-24 bg-background relative border-t border-white/5">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué NEXABYTE?</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Nuestra ingeniería de software y procesos están diseñados para maximizar el retorno de tu inversión.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2 p-8 hover:border-primary-cyan/30 bg-white/[0.01] transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-primary-cyan/10 p-3 rounded-xl text-primary-cyan">
                  <Zap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Alto Rendimiento & Velocidad</h3>
                  <p className="text-text-muted text-base">
                    Desarrollamos utilizando tecnologías modernas que garantizan una carga ultra rápida, mejorando la retención de tus clientes y optimizando el posicionamiento orgánico en Google (Core Web Vitals).
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:border-primary-purple/30 bg-white/[0.01] transition-all flex flex-col justify-between">
              <div className="bg-primary-purple/10 p-3 rounded-xl text-primary-purple w-fit mb-4">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Seguridad Primero</h3>
                <p className="text-text-muted text-sm">
                  Protegemos tus datos y los de tus clientes implementando estándares rigurosos y conexiones encriptadas.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:border-primary-purple/30 bg-white/[0.01] transition-all flex flex-col justify-between">
              <div className="bg-primary-purple/10 p-3 rounded-xl text-primary-purple w-fit mb-4">
                <Layers className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Arquitectura Escalable</h3>
                <p className="text-text-muted text-sm">
                  Código limpio y modulable preparado para crecer a la par que tu negocio, facilitando futuras integraciones.
                </p>
              </div>
            </Card>

            <Card className="md:col-span-2 p-8 hover:border-primary-cyan/30 bg-white/[0.01] transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-primary-cyan/10 p-3 rounded-xl text-primary-cyan">
                  <Calculator className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Transparencia e Interactividad</h3>
                  <p className="text-text-muted text-base">
                    Creemos en la claridad presupuestaria. Con nuestro cotizador en tiempo real, puedes calcular el costo estimado de tu plataforma de manera instantánea y sin sorpresas.
                  </p>
                </div>
              </div>
            </Card>
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
            <div className="flex-1 relative flex items-center justify-center py-12">
              <div className="w-64 h-64 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-cyan to-primary-purple rounded-3xl rotate-45 blur-2xl opacity-40 animate-pulse" />
                <div className="relative bg-background border border-white/10 w-full h-full rounded-3xl rotate-45 flex items-center justify-center shadow-2xl shadow-primary-cyan/20">
                  <div className="-rotate-45 w-full h-full flex items-center justify-center p-8">
                    <img 
                      src="/logo.png" 
                      alt="NEXABYTE Logo" 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home