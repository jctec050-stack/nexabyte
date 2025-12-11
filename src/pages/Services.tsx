import { motion } from "framer-motion"
import { Code, Smartphone, Settings, Layout, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Link } from "react-router-dom"

const services = [
  {
    icon: Code,
    title: "Desarrollo Web",
    description: "Creación de sitios y aplicaciones web a medida, optimizados para velocidad y SEO.",
    features: ["Landing Pages", "E-commerce", "Aplicaciones Web Progresivas", "Paneles de Administración"]
  },
  {
    icon: Smartphone,
    title: "Desarrollo Móvil",
    description: "Aplicaciones nativas e híbridas para iOS y Android que ofrecen experiencias fluidas.",
    features: ["iOS & Android", "React Native / Flutter", "UI/UX Móvil", "Mantenimiento de Apps"]
  },
  {
    icon: Layout,
    title: "Diseño UI/UX",
    description: "Interfaces intuitivas y atractivas que mejoran la experiencia del usuario.",
    features: ["Prototipado", "Wireframing", "Diseño Visual", "User Testing"]
  },
  {
    icon: Settings,
    title: "Soporte Técnico",
    description: "Asistencia continua para garantizar el funcionamiento óptimo de tus sistemas.",
    features: ["Mantenimiento Preventivo", "Soporte 24/7", "Actualizaciones", "Resolución de Incidencias"]
  }
]

const Services = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios</h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Soluciones tecnológicas integrales adaptadas a las necesidades específicas de tu negocio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:border-primary-cyan/50 h-full flex flex-col">
              <service.icon className="w-12 h-12 text-primary-cyan mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-text-muted text-sm mb-6 flex-grow">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-text-muted">
                    <div className="w-1.5 h-1.5 bg-primary-purple rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-auto">
                <Button variant="ghost" className="w-full justify-between group-hover:text-primary-cyan hover:bg-primary-cyan/5">
                  Solicitar Info
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 text-center bg-white/5 rounded-2xl p-12 border border-white/10">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas una solución personalizada?</h2>
          <p className="text-text-muted mb-8 max-w-2xl mx-auto">
            Entendemos que cada negocio es único. Contáctanos para discutir tus requerimientos específicos y diseñaremos una propuesta a tu medida.
          </p>
          <Link to="/contact">
            <Button size="lg" className="shadow-lg shadow-primary-cyan/20">
              Hablar con un Experto
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Services