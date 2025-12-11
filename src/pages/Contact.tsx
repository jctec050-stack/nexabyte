import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

const Contact = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen relative overflow-hidden">
       {/* Background elements */}
       <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-cyan/10 rounded-full blur-3xl -z-10" />
       <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-purple/10 rounded-full blur-3xl -z-10" />

      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contáctanos</h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Estamos listos para escuchar tus ideas y convertirlas en realidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-8">Información de Contacto</h2>
            <div className="space-y-6">
              <Card className="flex items-center gap-4 hover:border-primary-cyan/50 transition-colors">
                <div className="bg-primary-cyan/10 p-4 rounded-full">
                  <Mail className="w-6 h-6 text-primary-cyan" />
                </div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-text-muted">jctec050@gmail.com</p>
                </div>
              </Card>

              <Card className="flex items-center gap-4 hover:border-primary-purple/50 transition-colors">
                <div className="bg-primary-purple/10 p-4 rounded-full">
                  <Phone className="w-6 h-6 text-primary-purple" />
                </div>
                <div>
                  <h3 className="font-bold">Teléfono</h3>
                  <p className="text-text-muted">+595 976 392 214</p>
                </div>
              </Card>

              <Card className="flex items-center gap-4 hover:border-primary-cyan/50 transition-colors">
                <div className="bg-primary-cyan/10 p-4 rounded-full">
                  <MapPin className="w-6 h-6 text-primary-cyan" />
                </div>
                <div>
                  <h3 className="font-bold">Ubicación</h3>
                  <p className="text-text-muted">Hernandarias - Alto Parana</p>
                </div>
              </Card>
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary-cyan/10 to-primary-purple/10 border border-white/10">
              <h3 className="font-bold mb-2">Horario de Atención</h3>
              <p className="text-text-muted">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
              <p className="text-text-muted">Sábados: 9:00 AM - 6:00 PM</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nombre</label>
                    <input 
                      type="text" 
                      className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-cyan transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-cyan transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Asunto</label>
                  <select className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-cyan transition-colors text-text-muted">
                    <option>Consulta General</option>
                    <option>Presupuesto</option>
                    <option>Soporte</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Mensaje</label>
                  <textarea 
                    className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-cyan transition-colors h-32 resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                <Button className="w-full group">
                  Enviar Mensaje
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact