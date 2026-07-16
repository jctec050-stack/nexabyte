import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export function useGoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_ID;
    if (!gaId) {
      console.warn("Google Analytics Measurement ID (VITE_GA_ID) no está configurado.");
      return;
    }

    // Cargar el script de Google Tag Manager (gtag.js) de forma asíncrona
    const scriptId = "google-tag-manager-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script);

      // Inicializar dataLayer y la función gtag
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments);
      };
      
      window.gtag("js", new Date());
      // Desactivamos send_page_view inicial para que no duplique el evento
      window.gtag("config", gaId, {
        send_page_view: false,
      });
    }
  }, []);

  // Enviar evento de vista de página en cada cambio de ruta
  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_ID;
    if (gaId && window.gtag) {
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);
}
export default useGoogleAnalytics;
