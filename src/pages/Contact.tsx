import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import emailjs from '@emailjs/browser'
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
    // Sign up at https://www.emailjs.com/
    const SERVICE_ID = "YOUR_SERVICE_ID"
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID"
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY"

    if (SERVICE_ID === "YOUR_SERVICE_ID") {
      setLoading(false)
      setError("Por favor configura tus credenciales de EmailJS en el código.")
      return
    }

    if (formRef.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then(() => {
          setSuccess(true)
          formRef.current?.reset()
        })
        .catch(() => {
          setError("Hubo un error al enviar el mensaje. Por favor intenta nuevamente.")
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }

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
              <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nombre</label>
                    <input 
                      name="user_name"
                      type="text" 
                      required
                      className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-cyan transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input 
                      name="user_email"
                      type="email" 
                      required
                      className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-cyan transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Asunto</label>
                  <select name="subject" className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-cyan transition-colors text-text-muted">
                    <option value="Consulta General">Consulta General</option>
                    <option value="Presupuesto">Presupuesto</option>
                    <option value="Soporte">Soporte</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Mensaje</label>
                  <textarea 
                    name="message"
                    required
                    className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-cyan transition-colors h-32 resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                {success && (
                  <div className="bg-green-500/10 border border-green-500/20 text-green-500 p-4 rounded-lg text-sm">
                    ¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.
                  </div>
                )}

                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <Button className="w-full group" disabled={loading}>
                  {loading ? (
                    <>
                      Enviando...
                      <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                    </>
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
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