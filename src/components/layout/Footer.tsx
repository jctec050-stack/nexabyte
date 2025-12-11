import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 relative">
                <img src="/logo.png" alt="NEXABYTE Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold tracking-wider text-white">
                NEXA<span className="text-primary-cyan">BYTE</span>
              </span>
            </div>
            <p className="text-text-muted max-w-sm">
              Transformando ideas en soluciones digitales innovadoras. 
              Experiencia, creatividad y tecnología al servicio de tu negocio.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Servicios</h3>
            <ul className="space-y-2 text-text-muted">
              <li><a href="/services" className="hover:text-primary-cyan transition-colors">Desarrollo Web</a></li>
              <li><a href="/services" className="hover:text-primary-cyan transition-colors">Aplicaciones Móviles</a></li>
              <li><a href="/services" className="hover:text-primary-cyan transition-colors">Consultoría IT</a></li>
              <li><a href="/services" className="hover:text-primary-cyan transition-colors">Soporte Técnico</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-text-muted">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-cyan" />
                jctec050@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-cyan" />
                +595 976 392 214
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary-cyan" />
                Hernandarias - Alto Parana
              </li>
              <li className="flex gap-4 mt-4">
                <a href="https://www.linkedin.com/in/juan-carlos-piris-sanchez-a7a724162/" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 rounded-full hover:bg-primary-cyan/20 hover:text-primary-cyan transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/jctec050-stack" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 rounded-full hover:bg-primary-cyan/20 hover:text-primary-cyan transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-text-muted text-sm">
          <p>&copy; {new Date().getFullYear()} NEXABYTE. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer