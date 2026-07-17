import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  schemaMarkup?: object;
}

export default function SEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  schemaMarkup,
}: SEOProps) {
  useEffect(() => {
    // Actualizar el título de la página
    document.title = title;

    // Función auxiliar para actualizar o crear etiquetas meta
    const updateMetaTag = (name: string, value: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (element) {
        element.setAttribute("content", value);
      } else {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        element.setAttribute("content", value);
        document.head.appendChild(element);
      }
    };

    // Actualizar descripción y keywords
    updateMetaTag("description", description);
    if (keywords) {
      updateMetaTag("keywords", keywords);
    }

    // Etiquetas OpenGraph (para redes sociales como Facebook/LinkedIn)
    updateMetaTag("og:title", ogTitle || title, true);
    updateMetaTag("og:description", ogDescription || description, true);
    updateMetaTag("og:url", ogUrl || window.location.href, true);
    updateMetaTag("og:type", "website", true);
    if (ogImage) {
      updateMetaTag("og:image", ogImage, true);
    }

    // Etiquetas Twitter Cards
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", ogTitle || title);
    updateMetaTag("twitter:description", ogDescription || description);
    if (ogImage) {
      updateMetaTag("twitter:image", ogImage);
    }

    // Manejo de Datos Estructurados JSON-LD
    let scriptElement = document.getElementById("json-ld-schema") as HTMLScriptElement | null;
    if (schemaMarkup) {
      if (!scriptElement) {
        scriptElement = document.createElement("script");
        scriptElement.id = "json-ld-schema";
        scriptElement.type = "application/ld+json";
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(schemaMarkup);
    } else {
      if (scriptElement) {
        scriptElement.remove();
      }
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, schemaMarkup]);

  return null;
}
