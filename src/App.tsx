import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import WhatsAppButton from "@/components/ui/WhatsAppButton"
import { useEffect, lazy, Suspense } from "react"
import useGoogleAnalytics from "@/hooks/useGoogleAnalytics"

// Lazy loaded page components
const Home = lazy(() => import("@/pages/Home"))
const Services = lazy(() => import("@/pages/Services"))
const Portfolio = lazy(() => import("@/pages/Portfolio"))
const Contact = lazy(() => import("@/pages/Contact"))
const Cotizador = lazy(() => import("@/pages/Cotizador"))

const PageLoader = () => (
  <div className="min-h-[60vh] w-full flex flex-col items-center justify-center gap-4">
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 border-4 border-white/5 rounded-full" />
      <div className="absolute inset-0 border-4 border-t-primary-cyan border-r-primary-purple rounded-full animate-spin" />
    </div>
    <span className="text-text-muted text-sm tracking-widest uppercase animate-pulse">Cargando...</span>
  </div>
)

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useGoogleAnalytics();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-text-main font-sans selection:bg-primary-cyan/30">
        <Navbar />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cotizador" element={<Cotizador />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App
