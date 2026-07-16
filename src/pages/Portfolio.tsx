import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, FolderOpen, Globe, Layers3 } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { portfolioProjects } from "@/data/portfolioData"
import SEO from "@/components/common/SEO"

const Portfolio = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <SEO 
        title="Portafolio de Proyectos - NEXABYTE"
        description="Descubre nuestros proyectos destacados, casos de éxito y soluciones a medida en desarrollo web, móvil y sistemas informáticos."
        keywords="proyectos web, casos de exito, portfolio programacion, paginas web realizadas, portafolio nexabyte"
      />
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-cyan/30 bg-primary-cyan/10 px-4 py-2 text-sm text-primary-cyan mb-6">
            <FolderOpen className="w-4 h-4" />
            Proyectos Realizados
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Portafolio</h1>
          <p className="text-text-muted text-lg max-w-3xl mx-auto">
            Una seleccion de proyectos y soluciones que ya fuimos construyendo, con acceso rapido,
            resumen funcional y una vista previa de cada trabajo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {portfolioProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden border-white/10 hover:border-primary-cyan/40 lg:p-0"
            >
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-white/10">
                  {project.screenshotUrl ? (
                    <div className="rounded-2xl overflow-hidden border border-white/10 bg-background">
                      <img
                        src={project.screenshotUrl}
                        alt={`Vista previa de ${project.title}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-primary-cyan/10 via-background to-primary-purple/10 p-6 min-h-[280px] flex flex-col justify-between">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs uppercase tracking-[0.3em] text-primary-cyan">
                          Vista previa
                        </span>
                        <span className="text-xs rounded-full border border-white/10 px-3 py-1 text-text-muted">
                          {project.status}
                        </span>
                      </div>

                      <div>
                        <h2 className="text-2xl font-bold mb-3">{project.previewTitle}</h2>
                        <p className="text-text-muted mb-6">{project.summary}</p>
                        <div className="space-y-3">
                          {project.previewItems.map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                            >
                              <div className="w-2 h-2 rounded-full bg-primary-purple" />
                              <span className="text-sm text-white">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 pt-6 text-text-muted text-sm">
                        <Globe className="w-4 h-4 text-primary-cyan" />
                        <span>{project.category}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6 md:p-8 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs uppercase tracking-[0.3em] text-primary-cyan">
                      {project.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    <span className="text-sm text-text-muted">{project.status}</span>
                  </div>

                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-text-muted mb-4">{project.description}</p>
                  <p className="text-text-muted mb-8">{project.summary}</p>

                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Layers3 className="w-4 h-4 text-primary-purple" />
                      <span className="text-sm font-medium text-white">Tecnologias utilizadas</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-4">
                    {project.liveUrl.startsWith("/") ? (
                      <Link to={project.liveUrl}>
                        <Button className="gap-2">
                          Ver proyecto
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    ) : (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        <Button className="gap-2">
                          Ver proyecto
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-white/5 rounded-2xl p-10 border border-white/10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Seguimos sumando proyectos</h2>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
