
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Calculator, 
  Send,
  Globe,
  Search,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { 
  pageTypes, 
  additionalFeatures, 
  hostingOptions, 
  domainOptions, 
  emailOptions, 
  productOptions, 
  paymentMethods, 
  platforms, 
  channels, 
  erpApps, 
  developmentTime, 
  seoOptions, 
  supportOptions, 
  structureOptions, 
  imageOptions 
} from '@/data/cotizadorData';

// Types
type SelectionState = {
  pageType: string | null;
  features: string[];
  hosting: string | null;
  domain: string | null;
  emails: string | null;
  products: string | null;
  payments: string[];
  platforms: string[];
  channels: string[];
  erpApps: string[];
  devTime: string | null;
  seo: string | null;
  support: string | null;
  structure: string | null;
  images: string | null;
  contact: {
    email: string;
    whatsapp: string;
    notes: string;
  };
};

const initialSelection: SelectionState = {
  pageType: null,
  features: [],
  hosting: null,
  domain: null,
  emails: null,
  products: null,
  payments: [],
  platforms: [],
  channels: [],
  erpApps: [],
  devTime: null,
  seo: null,
  support: null,
  structure: null,
  images: null,
  contact: {
    email: '',
    whatsapp: '',
    notes: '',
  },
};

const steps = [
  { id: 1, title: 'Tipo de Proyecto' },
  { id: 2, title: 'Funcionalidades' },
  { id: 3, title: 'Infraestructura' },
  { id: 4, title: 'Detalles' },
  { id: 5, title: 'Alcance' },
  { id: 6, title: 'Plazos y Soporte' },
  { id: 7, title: 'Resumen' },
];

export default function Cotizador() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selection, setSelection] = useState<SelectionState>(initialSelection);
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate Price
  useEffect(() => {
    let price = 0;

    // Base Page Type
    const selectedPage = pageTypes.find(p => p.id === selection.pageType);
    if (selectedPage) price += selectedPage.price;

    // Features
    selection.features.forEach(fId => {
      const feature = additionalFeatures.find(f => f.id === fId);
      if (feature) price += feature.price;
    });

    // Hosting
    const hosting = hostingOptions.find(h => h.id === selection.hosting);
    if (hosting) price += hosting.price;

    // Domain
    const domain = domainOptions.find(d => d.id === selection.domain);
    if (domain) price += domain.price;

    // Emails
    const emails = emailOptions.find(e => e.id === selection.emails);
    if (emails) price += emails.price;

    // Products (if ecommerce)
    const products = productOptions.find(p => p.id === selection.products);
    if (products) price += products.price;

    // Payments
    selection.payments.forEach(pId => {
      const payment = paymentMethods.find(p => p.id === pId);
      if (payment) price += payment.price;
    });

    // Platforms
    selection.platforms.forEach(pId => {
      const platform = platforms.find(p => p.id === pId);
      if (platform) price += platform.price;
    });

    // ERP Apps
    selection.erpApps.forEach(aId => {
      const app = erpApps.find(a => a.id === aId);
      if (app) price += app.price;
    });

    // SEO
    const seo = seoOptions.find(s => s.id === selection.seo);
    if (seo) price += seo.price;

    // Support
    const support = supportOptions.find(s => s.id === selection.support);
    if (support) price += support.price;

    // Structure
    const structure = structureOptions.find(s => s.id === selection.structure);
    if (structure) price += structure.price;

    // Images
    const images = imageOptions.find(i => i.id === selection.images);
    if (images) price += images.price;

    // Time Multiplier (Apply at the end)
    const time = developmentTime.find(t => t.id === selection.devTime);
    if (time && time.multiplier) {
      price = price * time.multiplier;
    }

    setTotalPrice(Math.round(price));
  }, [selection]);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleAutoAdvance = () => {
    setTimeout(() => {
      handleNext();
    }, 400); // Pequeño delay para ver la selección
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const toggleSelection = (category: keyof SelectionState, id: string, single: boolean = false) => {
    setSelection(prev => {
      if (single) {
        return { ...prev, [category]: prev[category] === id ? null : id };
      }
      
      const list = prev[category] as string[];
      const newList = list.includes(id) 
        ? list.filter(item => item !== id)
        : [...list, id];
      
      return { ...prev, [category]: newList };
    });
  };

  const updateContact = (field: string, value: string) => {
    setSelection(prev => ({
      ...prev,
      contact: { ...prev.contact, [field]: value }
    }));
  };

  const isStepValid = () => {
    if (currentStep === 1) return !!selection.pageType;
    if (currentStep === 3) return !!selection.hosting && !!selection.domain;
    if (currentStep === 6) return !!selection.devTime;
    return true; // Other steps are optional or have defaults
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pageTypes.map((type) => (
              <div 
                key={type.id}
                onClick={() => { toggleSelection('pageType', type.id, true); handleAutoAdvance(); }}
                className={`
                  cursor-pointer p-6 rounded-xl border-2 transition-all duration-200
                  ${selection.pageType === type.id 
                    ? 'border-primary-cyan bg-primary-cyan/10 shadow-lg shadow-primary-cyan/20' 
                    : 'border-white/10 hover:border-primary-cyan/50 bg-card-bg/50'}
                `}
              >
                <div className="flex items-center justify-between mb-4">
                  <type.icon className={`w-8 h-8 ${selection.pageType === type.id ? 'text-primary-cyan' : 'text-text-muted'}`} />
                  {selection.pageType === type.id && <Check className="w-6 h-6 text-primary-cyan" />}
                </div>
                <h3 className="text-xl font-bold mb-2">{type.label}</h3>
                <p className="text-text-muted text-sm mb-4">{type.description}</p>
                <p className="text-primary-purple font-bold">${type.price}</p>
              </div>
            ))}
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Funcionalidades Adicionales</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {additionalFeatures.map((feature) => (
                  <div 
                    key={feature.id}
                    onClick={() => toggleSelection('features', feature.id)}
                    className={`
                      cursor-pointer p-4 rounded-xl border transition-all duration-200 flex items-center gap-4
                      ${selection.features.includes(feature.id)
                        ? 'border-primary-cyan bg-primary-cyan/10' 
                        : 'border-white/10 hover:border-primary-cyan/30 bg-card-bg/50'}
                    `}
                  >
                    <div className={`p-2 rounded-lg ${selection.features.includes(feature.id) ? 'bg-primary-cyan text-white' : 'bg-white/5 text-text-muted'}`}>
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">{feature.label}</p>
                      <p className="text-sm text-text-muted">+${feature.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {selection.pageType === 'erp' && (
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">Módulos ERP</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {erpApps.map((app) => (
                    <div 
                      key={app.id}
                      onClick={() => toggleSelection('erpApps', app.id)}
                      className={`
                        cursor-pointer p-4 rounded-xl border transition-all duration-200
                        ${selection.erpApps.includes(app.id)
                          ? 'border-primary-purple bg-primary-purple/10' 
                          : 'border-white/10 hover:border-primary-purple/30 bg-card-bg/50'}
                      `}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{app.label}</span>
                        {selection.erpApps.includes(app.id) && <Check className="w-4 h-4 text-primary-purple" />}
                      </div>
                      <p className="text-sm text-text-muted">+${app.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex justify-end pt-8">
              <Button onClick={handleNext} className="gap-2">
                Continuar <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="bg-card-bg/30 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Globe className="text-primary-cyan" /> Hosting
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hostingOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => toggleSelection('hosting', option.id, true)}
                    className={`
                      p-4 rounded-lg border text-left transition-all
                      ${selection.hosting === option.id
                        ? 'border-primary-cyan bg-primary-cyan/10'
                        : 'border-white/10 hover:border-white/20'}
                    `}
                  >
                    <span className="block font-medium">{option.label}</span>
                    <span className="text-sm text-text-muted">{option.price > 0 ? `+$${option.price}/año` : 'Sin costo'}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-card-bg/30 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Search className="text-primary-purple" /> Dominio
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {domainOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => toggleSelection('domain', option.id, true)}
                    className={`
                      p-4 rounded-lg border text-left transition-all
                      ${selection.domain === option.id
                        ? 'border-primary-purple bg-primary-purple/10'
                        : 'border-white/10 hover:border-white/20'}
                    `}
                  >
                    <span className="block font-medium">{option.label}</span>
                    <span className="text-sm text-text-muted">{option.price > 0 ? `+$${option.price}/año` : 'Sin costo'}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-card-bg/30 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Mail className="text-blue-400" /> Correos Corporativos
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {emailOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => toggleSelection('emails', option.id, true)}
                    className={`
                      p-3 rounded-lg border text-center transition-all text-sm
                      ${selection.emails === option.id
                        ? 'border-blue-400 bg-blue-400/10'
                        : 'border-white/10 hover:border-white/20'}
                    `}
                  >
                    <span className="block font-medium mb-1">{option.label}</span>
                    <span className="text-xs text-text-muted">+${option.price}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-8">
              <Button onClick={handleNext} disabled={!isStepValid()} className="gap-2">
                Continuar <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-8 max-w-4xl mx-auto">
            {(selection.pageType === 'ecommerce' || selection.pageType === 'hibrida') && (
              <>
                <div className="bg-card-bg/30 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold mb-4">Catálogo de Productos (Carga Inicial)</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {productOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => toggleSelection('products', option.id, true)}
                        className={`
                          p-3 rounded-lg border text-center transition-all text-sm flex flex-col justify-between
                          ${selection.products === option.id
                            ? 'border-primary-cyan bg-primary-cyan/10'
                            : 'border-white/10 hover:border-white/20'}
                        `}
                      >
                        <span className="block font-medium mb-1">{option.label}</span>
                        <span className="text-xs text-text-muted">+${option.price}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-card-bg/30 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold mb-4">Métodos de Pago</h3>
                  <div className="flex flex-wrap gap-3">
                    {paymentMethods.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => toggleSelection('payments', option.id)}
                        className={`
                          px-4 py-2 rounded-full border transition-all text-sm
                          ${selection.payments.includes(option.id)
                            ? 'border-green-400 bg-green-400/10 text-green-400'
                            : 'border-white/10 hover:border-white/20 text-text-muted'}
                        `}
                      >
                        {option.label} (+${option.price})
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div className="bg-card-bg/30 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-4">Plataformas</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {platforms.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => toggleSelection('platforms', option.id)}
                    className={`
                      p-4 rounded-lg border text-left transition-all flex items-center gap-3
                      ${selection.platforms.includes(option.id)
                        ? 'border-primary-purple bg-primary-purple/10'
                        : 'border-white/10 hover:border-white/20'}
                    `}
                  >
                    <option.icon className="w-5 h-5" />
                    <div>
                      <span className="block font-medium">{option.label}</span>
                      <span className="text-xs text-text-muted">{option.price > 0 ? `+$${option.price}` : 'Incluido'}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-card-bg/30 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-4">Canales de Captación</h3>
              <div className="flex flex-wrap gap-3">
                {channels.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => toggleSelection('channels', option.id)}
                    className={`
                      px-4 py-2 rounded-full border transition-all text-sm flex items-center gap-2
                      ${selection.channels.includes(option.id)
                        ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400'
                        : 'border-white/10 hover:border-white/20 text-text-muted'}
                    `}
                  >
                    <option.icon className="w-4 h-4" />
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-8">
              <Button onClick={handleNext} className="gap-2">
                Continuar <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-8 max-w-3xl mx-auto">
             <div className="bg-card-bg/30 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-4">Estructura del Sitio</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {structureOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => toggleSelection('structure', option.id, true)}
                    className={`
                      p-4 rounded-lg border text-center transition-all
                      ${selection.structure === option.id
                        ? 'border-primary-cyan bg-primary-cyan/10'
                        : 'border-white/10 hover:border-white/20'}
                    `}
                  >
                    <span className="block font-medium">{option.label}</span>
                    <span className="text-sm text-text-muted">{option.price > 0 ? `+$${option.price}` : 'Incluido'}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-card-bg/30 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-4">Recursos Gráficos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {imageOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => toggleSelection('images', option.id, true)}
                    className={`
                      p-4 rounded-lg border text-left transition-all flex items-center gap-3
                      ${selection.images === option.id
                        ? 'border-pink-400 bg-pink-400/10'
                        : 'border-white/10 hover:border-white/20'}
                    `}
                  >
                    <option.icon className="w-5 h-5 text-pink-400" />
                    <div>
                      <span className="block font-medium">{option.label}</span>
                      <span className="text-sm text-text-muted">+${option.price}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-8">
              <Button onClick={handleNext} className="gap-2">
                Continuar <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="bg-card-bg/30 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-4">Tiempo de Desarrollo</h3>
              <div className="space-y-3">
                {developmentTime.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => toggleSelection('devTime', option.id, true)}
                    className={`
                      w-full p-4 rounded-lg border text-left transition-all flex justify-between items-center
                      ${selection.devTime === option.id
                        ? 'border-primary-cyan bg-primary-cyan/10'
                        : 'border-white/10 hover:border-white/20'}
                    `}
                  >
                    <div>
                      <span className="block font-bold text-lg">{option.label}</span>
                      <span className="text-sm text-text-muted">{option.description}</span>
                    </div>
                    <div className="text-right">
                      {option.multiplier > 1 && <span className="text-red-400 text-sm font-bold">+{Math.round((option.multiplier - 1) * 100)}% costo</span>}
                      {option.multiplier < 1 && <span className="text-green-400 text-sm font-bold">{Math.round((option.multiplier - 1) * 100)}% desc.</span>}
                      {option.multiplier === 1 && <span className="text-text-muted text-sm">Precio estándar</span>}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card-bg/30 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold mb-4">Estrategia SEO</h3>
                <div className="space-y-3">
                  {seoOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => toggleSelection('seo', option.id, true)}
                      className={`
                        w-full p-3 rounded-lg border text-left transition-all
                        ${selection.seo === option.id
                          ? 'border-blue-400 bg-blue-400/10'
                          : 'border-white/10 hover:border-white/20'}
                      `}
                    >
                      <span className="block font-medium">{option.label}</span>
                      <span className="text-xs text-text-muted">{option.description}</span>
                      <span className="text-sm font-bold block mt-1">+${option.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-card-bg/30 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold mb-4">Soporte Técnico</h3>
                <div className="space-y-3">
                  {supportOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => toggleSelection('support', option.id, true)}
                      className={`
                        w-full p-3 rounded-lg border text-left transition-all
                        ${selection.support === option.id
                          ? 'border-green-400 bg-green-400/10'
                          : 'border-white/10 hover:border-white/20'}
                      `}
                    >
                      <span className="block font-medium">{option.label}</span>
                      <span className="text-xs text-text-muted">{option.description}</span>
                      <span className="text-sm font-bold block mt-1">+${option.price}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-8">
              <Button onClick={handleNext} disabled={!isStepValid()} className="gap-2">
                Continuar <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-card-bg/50 p-6 rounded-xl border border-primary-cyan/30">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Calculator className="text-primary-cyan" /> Resumen
                </h3>
                
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between pb-2 border-b border-white/10">
                    <span className="text-text-muted">Tipo de Proyecto</span>
                    <span className="font-bold">{pageTypes.find(p => p.id === selection.pageType)?.label}</span>
                  </div>
                  
                  {selection.features.length > 0 && (
                    <div className="pb-2 border-b border-white/10">
                      <span className="text-text-muted block mb-1">Funcionalidades</span>
                      <div className="flex flex-wrap gap-1">
                        {selection.features.map(f => (
                          <span key={f} className="bg-white/5 px-2 py-0.5 rounded text-xs">
                            {additionalFeatures.find(feat => feat.id === f)?.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between pb-2 border-b border-white/10">
                    <span className="text-text-muted">Hosting & Dominio</span>
                    <span className="font-medium text-right">
                      {hostingOptions.find(h => h.id === selection.hosting)?.label}<br/>
                      {domainOptions.find(d => d.id === selection.domain)?.label}
                    </span>
                  </div>

                  <div className="flex justify-between pb-2 border-b border-white/10">
                    <span className="text-text-muted">Tiempo de Desarrollo</span>
                    <span className="font-bold text-primary-purple">{developmentTime.find(t => t.id === selection.devTime)?.label}</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-primary-cyan/30">
                  <p className="text-center text-text-muted mb-2">Precio Final Estimado</p>
                  <p className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary-cyan to-primary-purple">
                    ${totalPrice.toLocaleString()} USD
                  </p>
                  <p className="text-center text-xs text-text-muted mt-2">*Precio referencial sujeto a evaluación final</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card-bg/30 p-6 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold mb-6">Datos de Contacto</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Correo Electrónico</label>
                    <input 
                      type="email" 
                      value={selection.contact.email}
                      onChange={(e) => updateContact('email', e.target.value)}
                      className="w-full bg-background border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary-cyan transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">WhatsApp</label>
                    <input 
                      type="tel" 
                      value={selection.contact.whatsapp}
                      onChange={(e) => updateContact('whatsapp', e.target.value)}
                      className="w-full bg-background border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary-cyan transition-colors"
                      placeholder="+595 976 392 214"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Notas Adicionales</label>
                    <textarea 
                      value={selection.contact.notes}
                      onChange={(e) => updateContact('notes', e.target.value)}
                      className="w-full bg-background border border-white/10 rounded-lg p-3 h-32 focus:outline-none focus:border-primary-cyan transition-colors resize-none"
                      placeholder="Detalles específicos de tu proyecto..."
                    />
                  </div>
                  
                  <Button 
                    className="w-full mt-4 gap-2" 
                    size="lg"
                    onClick={() => {
                      const featuresList = selection.features.map(f => additionalFeatures.find(feat => feat.id === f)?.label).join(', ');
                      const hostingName = hostingOptions.find(h => h.id === selection.hosting)?.label;
                      const domainName = domainOptions.find(d => d.id === selection.domain)?.label;
                      const devTimeName = developmentTime.find(t => t.id === selection.devTime)?.label;
                      
                      const message = `*Hola, me interesa realizar un proyecto web.* 🚀\n\n` +
                        `📌 *Tipo de Proyecto:* ${pageTypes.find(p => p.id === selection.pageType)?.label}\n` +
                        `💰 *Presupuesto Estimado:* $${totalPrice} USD\n\n` +
                        `📋 *Detalles del Proyecto:*\n` +
                        `   • Funcionalidades: ${featuresList || 'Ninguna'}\n` +
                        `   • Hosting: ${hostingName}\n` +
                        `   • Dominio: ${domainName}\n` +
                        `   • Tiempo de Desarrollo: ${devTimeName}\n\n` +
                        `📝 *Notas Adicionales:* ${selection.contact.notes || 'Ninguna'}\n\n` +
                        `📩 *Contacto:* ${selection.contact.email}`;
                        
                      window.open(`https://wa.me/595976392214?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                  >
                    <Send className="w-5 h-5" /> Enviar Cotización
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
          Cotizador de Proyectos
        </h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Personaliza tu proyecto web paso a paso y obtén un estimado inmediato adaptado a tus necesidades.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-10 max-w-4xl mx-auto">
        <div className="flex justify-between mb-2">
          {steps.map((step) => (
            <div 
              key={step.id}
              className={`text-xs md:text-sm font-medium transition-colors duration-300 ${
                step.id <= currentStep ? 'text-primary-cyan' : 'text-text-muted/30'
              }`}
            >
              <span className="hidden md:inline">{step.title}</span>
              <span className="md:hidden">{step.id}</span>
            </div>
          ))}
        </div>
        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary-cyan to-primary-purple"
            initial={{ width: '0%' }}
            animate={{ width: `${(currentStep / steps.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="min-h-[400px]"
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-12 max-w-4xl mx-auto border-t border-white/10 pt-8">
        <Button 
          variant="ghost" 
          onClick={handleBack}
          disabled={currentStep === 1}
          className={`${currentStep === 1 ? 'invisible' : ''} gap-2`}
        >
          <ChevronLeft className="w-5 h-5" /> Anterior
        </Button>

        <div className="flex items-center gap-6">
          <div className="text-right hidden md:block">
            <span className="text-text-muted text-sm block">Estimado actual</span>
            <span className="text-2xl font-bold text-primary-cyan">${totalPrice}</span>
          </div>
          
          {currentStep < steps.length ? null : null}
        </div>
      </div>
    </div>
  );
}
