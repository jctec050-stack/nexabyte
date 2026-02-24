
import { 
  ShoppingCart, 
  Monitor, 
  Layout, 
  Layers, 
  Globe, 
  Database, 
  Briefcase,
  MessageSquare,
  MessageCircle,
  GraduationCap,
  Calendar,
  CreditCard,
  Repeat,
  FileText,
  Activity,
  Users,
  Search,
  Headphones,
  Image,
  Mail,
  Box,
  Smartphone,
  Share2
} from 'lucide-react';

export const pageTypes = [
  { id: 'ecommerce', label: 'E-Commerce', icon: ShoppingCart, price: 600, description: 'Tienda en línea completa con carrito y pagos.' },
  { id: 'informativa', label: 'Informativa', icon: Monitor, price: 250, description: 'Sitio web para presentar tu empresa o servicios.' },
  { id: 'landing', label: 'Landing Page', icon: Layout, price: 150, description: 'Página única optimizada para conversiones.' },
  { id: 'hibrida', label: 'Página Híbrida', icon: Layers, price: 400, description: 'Combinación de informativa y funcionalidades dinámicas.' },
  { id: 'webapp', label: 'Web App', icon: Globe, price: 1250, description: 'Aplicación web compleja con lógica personalizada.' },
  { id: 'crm', label: 'CRM', icon: Users, price: 1500, description: 'Gestión de relaciones con clientes a medida.' },
  { id: 'erp', label: 'ERP', icon: Database, price: 2000, description: 'Sistema de planificación de recursos empresariales.' },
];

export const additionalFeatures = [
  { id: 'chatbot', label: 'Chat bot', icon: MessageSquare, price: 150 },
  { id: 'messaging', label: 'Mensajería', icon: MessageCircle, price: 100 },
  { id: 'courses', label: 'Cursos', icon: GraduationCap, price: 400 },
  { id: 'reservations', label: 'Reservas', icon: Calendar, price: 200 },
  { id: 'pos', label: 'Punto de venta', icon: CreditCard, price: 300 },
  { id: 'subscriptions', label: 'Suscripciones', icon: Repeat, price: 250 },
  { id: 'billing', label: 'Facturación', icon: FileText, price: 350 },
  { id: 'medical_history', label: 'Historias Clínicas', icon: Activity, price: 500 },
  { id: 'appointments', label: 'Citas', icon: Calendar, price: 200 },
  { id: 'referrals', label: 'Sistema de referidos', icon: Users, price: 150 },
];

export const hostingOptions = [
  { id: 'hosting_yes', label: 'Sí, tengo hosting', price: 0 },
  { id: 'hosting_no', label: 'No, necesito hosting', price: 75 },
];

export const domainOptions = [
  { id: 'domain_yes', label: 'Sí, tengo dominio', price: 0 },
  { id: 'domain_no', label: 'No, necesito dominio', price: 10 },
];

export const emailOptions = [
  { id: 'emails_0_10', label: '0 a 10', price: 25 },
  { id: 'emails_10_20', label: '10 a 20', price: 50 },
  { id: 'emails_20_30', label: '20 a 30', price: 75 },
  { id: 'emails_30_plus', label: '30 en adelante', price: 125 },
];

export const productOptions = [
  { id: 'products_0_5', label: '0 a 5', price: 25 },
  { id: 'products_5_10', label: '5 a 10', price: 50 },
  { id: 'products_10_20', label: '10 a 20', price: 100 },
  { id: 'products_20_50', label: '20 a 50', price: 200 },
  { id: 'products_50_100', label: '50 a 100', price: 350 },
  { id: 'products_100_plus', label: '100 a 150', price: 500 },
];

export const paymentMethods = [
  { id: 'paypal', label: 'PayPal', price: 50 },
  { id: 'stripe', label: 'Stripe', price: 50 },
  { id: 'transfer', label: 'Transferencia', price: 25 },
  { id: 'crypto', label: 'Criptomonedas', price: 100 },
];

export const platforms = [
  { id: 'web', label: 'Web', icon: Globe, price: 0 },
  { id: 'android', label: 'Android TWA', icon: Smartphone, price: 250 },
  { id: 'ios', label: 'iOS TWA', icon: Smartphone, price: 250 },
];

export const channels = [
  { id: 'social', label: 'Redes Sociales', icon: Share2, price: 0 },
  { id: 'google', label: 'Google Ads', icon: Search, price: 0 },
  { id: 'organic', label: 'Orgánico', icon: Globe, price: 0 },
];

export const erpApps = [
  { id: 'accounting', label: 'Contabilidad', price: 500 },
  { id: 'invoicing', label: 'Facturación', price: 400 },
  { id: 'inventory', label: 'Inventario', price: 400 },
  { id: 'ecommerce_erp', label: 'Comercio electrónico', price: 600 },
  { id: 'crm_erp', label: 'CRM', price: 500 },
  { id: 'sales', label: 'Ventas', price: 400 },
];

export const developmentTime = [
  { id: 'less_30', label: 'Menos de 30 días', multiplier: 1.5, description: 'Servicio Express (+50%)' },
  { id: '30_60', label: '30 a 60 días', multiplier: 1.2, description: 'Prioridad Alta (+20%)' },
  { id: '60_90', label: '60 a 90 días', multiplier: 1.0, description: 'Estándar' },
  { id: 'more_90', label: 'Más de 90 días', multiplier: 0.9, description: 'Sin prisa (-10%)' },
];

export const seoOptions = [
  { id: 'seo_basic', label: 'SEO Básico', price: 100, description: 'Configuración inicial y meta tags.' },
  { id: 'seo_intermediate', label: 'SEO Intermedio', price: 250, description: 'Optimización de contenido y velocidad.' },
  { id: 'seo_advanced', label: 'SEO Avanzado', price: 500, description: 'Estrategia completa y backlinks.' },
];

export const supportOptions = [
  { id: 'support_yes', label: 'Sí, deseo soporte', price: 50, description: 'Mantenimiento mensual (precio base).' },
  { id: 'support_no', label: 'No, gracias', price: 0, description: 'Sin mantenimiento posterior.' },
];

export const structureOptions = [
  { id: 'sections_1_3', label: '1 a 3 Secciones', price: 0 },
  { id: 'sections_3_5', label: '3 a 5 Secciones', price: 50 },
  { id: 'sections_5_8', label: '5 a 10 Secciones', price: 100 },
];

export const imageOptions = [
  { id: 'images_yes', label: 'Sí, necesito imágenes', icon: Image, price: 75 },
  { id: 'images_no', label: 'No, tengo las mías', icon: Image, price: 0 },
];
