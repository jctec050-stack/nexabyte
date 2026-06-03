export type PortfolioProject = {
  id: string
  title: string
  category: string
  description: string
  summary: string
  liveUrl: string
  techStack: string[]
  previewTitle: string
  previewItems: string[]
  status: string
  screenshotUrl?: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "pagina-web-highlight",
    title: "Pagina Web para Highlight",
    category: "Landing Page",
    description:
      "Landing page para la empresa de marketing Highlight, enfocada en presentar sus servicios y reforzar su presencia digital de forma clara y atractiva.",
    summary:
      "Proyecto pensado para comunicar la propuesta de valor de la marca con una estructura directa, visual profesional y enfoque comercial.",
    liveUrl: "https://www.highlight.com.py",
    techStack: ["HTML", "CSS", "JavaScript", "Supabase"],
    previewTitle: "Landing corporativa de marketing",
    previewItems: [
      "Presentacion de servicios",
      "Estructura comercial clara",
      "Presencia digital profesional",
    ],
    status: "Finalizado",
  },
  {
    id: "ecommerce-benmarket",
    title: "Ecommerce para Benmarket",
    category: "Ecommerce",
    description:
      "Tienda en linea para Benmarket, pensada para exhibir productos, facilitar compras y construir una experiencia de venta digital moderna.",
    summary:
      "Proyecto ecommerce en desarrollo con catalogo online, interfaz responsiva y conexion a Supabase para administrar informacion y escalabilidad.",
    liveUrl: "https://tiendabenmarket.vercel.app/",
    techStack: ["React", "Vite", "JavaScript", "Tailwind CSS", "Supabase"],
    previewTitle: "Tienda online moderna",
    previewItems: [
      "Catalogo de productos",
      "Experiencia de compra online",
      "Integracion con base de datos",
    ],
    status: "En Desarrollo",
  },
  {
    id: "pagina-reservas-tucancha",
    title: "Pagina de Reservas Tucancha",
    category: "Aplicacion Web",
    description:
      "Pagina web integrada con una aplicacion de reservas de canchas, pensada para facilitar la gestion de turnos y la experiencia de los usuarios.",
    summary:
      "Proyecto orientado a reservas online con una interfaz moderna, flujo de seleccion agil y backend conectado para administrar disponibilidad y datos.",
    liveUrl: "https://tucancha.com.py/",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    previewTitle: "Reservas online de canchas",
    previewItems: [
      "Gestion de reservas",
      "Interfaz moderna y responsiva",
      "Integracion con base de datos",
    ],
    status: "Activo",
  },
  {
    id: "pagina-web-imagro",
    title: "Pagina Web Imagro",
    category: "Sitio Web Corporativo",
    description:
      "Pagina web para la empresa metalurgica Imagro, orientada a presentar su identidad, servicios y presencia online de forma clara y profesional.",
    summary:
      "Proyecto corporativo enfocado en mostrar la marca y la informacion principal de la empresa con una estructura simple, directa y facil de navegar.",
    liveUrl: "https://imagro.com.py/",
    techStack: ["HTML", "CSS", "JavaScript"],
    previewTitle: "Presencia digital corporativa",
    previewItems: [
      "Informacion institucional",
      "Secciones corporativas",
      "Navegacion clara y directa",
    ],
    status: "Finalizado",
  },
  {
    id: "cotizador-web",
    title: "Cotizador de Proyectos Web",
    category: "Aplicacion Web",
    description:
      "Cotizador interactivo para estimar trabajos web paso a paso, con calculo dinamico de precios y envio directo por WhatsApp.",
    summary:
      "Permite elegir tipo de proyecto, funcionalidades, infraestructura, alcance y soporte para generar una propuesta mas clara y rapida.",
    liveUrl: "/cotizador",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    previewTitle: "Flujo guiado de cotizacion",
    previewItems: [
      "Seleccion por pasos",
      "Precio actualizado en tiempo real",
      "Envio directo a WhatsApp",
    ],
    status: "Activo",
  },
]
