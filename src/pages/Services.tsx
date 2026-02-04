import { motion } from 'framer-motion';
import { ArrowRight, Target, Zap, Star, Settings, BarChart3, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/shared/SectionHeading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CALENDLY_URL = 'https://calendly.com/noxcv1408/30min';
const WHATSAPP_AUDIT_URL = 'https://wa.me/393314054922?text=Buongiorno%21%20Vorrei%20richiedere%20un%20audit%20gratuito.';

const serviceCategories = [
  {
    id: 'lead-generation',
    icon: Target,
    title: 'Lead Generation',
    intro: "Strategie multi-canale per attrarre prospect qualificati e pronti all'acquisto.",
    deliverables: [
      'Campagne Meta Ads (Facebook & Instagram)',
      'Campagne Google Ads (Search, Display, YouTube)',
      'Landing page ad alta conversione',
      'Lead magnet e contenuti gated',
      'Form ottimizzati e A/B testing',
      'Integrazione CRM e nurturing automatico',
    ],
    timeline: '2-4 settimane per setup iniziale',
  },
  {
    id: 'sales-automation',
    icon: Zap,
    title: 'Automazione Vendite',
    intro: 'Workflow automatici che convertono lead in clienti 24/7, senza intervento manuale.',
    deliverables: [
      'Sequenze email automatiche',
      'SMS follow-up e reminder',
      'Pipeline di vendita strutturate',
      'Scoring lead automatico',
      'Notifiche real-time al team vendite',
      'Integrazione calendario e prenotazioni',
    ],
    timeline: '3-6 settimane per implementazione completa',
  },
  {
    id: 'retention',
    icon: Star,
    title: 'Fidelizzazione & Reputazione',
    intro: 'Sistemi per massimizzare il lifetime value e costruire una reputazione a 5 stelle.',
    deliverables: [
      'Campagne di riattivazione clienti',
      'Programmi referral automatizzati',
      'Richieste recensioni automatiche',
      'Gestione e risposta recensioni',
      'Survey NPS e feedback loop',
      'Widget recensioni per sito web',
    ],
    timeline: '2-3 settimane per setup',
  },
  {
    id: 'websites-funnels',
    icon: Settings,
    title: 'Siti Web & Funnel',
    intro: 'Pagine e funnel ottimizzati per conversioni, velocità e brand experience.',
    deliverables: [
      'Siti web aziendali responsive',
      'Landing page campagne specifiche',
      'Funnel multi-step',
      'Checkout e pagamenti integrati',
      'Blog e content hub',
      'Form, survey e quiz interattivi',
    ],
    timeline: '2-6 settimane a seconda della complessità',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Analytics & Ottimizzazione',
    intro: 'Dashboard KPI e ottimizzazione continua basata sui dati per performance crescenti.',
    deliverables: [
      'Dashboard centralizzata KPI',
      'Tracking conversioni avanzato',
      'Report settimanali/mensili',
      'A/B testing continuo',
      'Analisi attribution multi-touch',
      'Consulenza ottimizzazione',
    ],
    timeline: 'Setup 1-2 settimane + ottimizzazione continua',
  },
];

const faqData = [
  {
    question: 'Quanto costa lavorare con Vesuvio?',
    answer: "I nostri progetti partono da €2.000/mese per servizi gestiti. Offriamo anche progetti una tantum per setup specifici. Prenota una call per un preventivo personalizzato.",
  },
  {
    question: 'Quanto tempo serve per vedere i primi risultati?',
    answer: "Dipende dal servizio. Le campagne paid possono generare lead in 7-14 giorni. I sistemi di automazione completi richiedono 4-8 settimane per l'implementazione.",
  },
  {
    question: 'Lavorate con aziende del mio settore?',
    answer: 'Lavoriamo con aziende B2B e B2C in diversi settori: healthcare, e-commerce, servizi professionali, SaaS, real estate e altri. Prenota una call per valutare il fit.',
  },
  {
    question: "Cosa include l'audit gratuito?",
    answer: "Analizziamo il tuo attuale stack marketing, identifichiamo le opportunità di automazione e forniamo un piano d'azione con priorità chiare e ROI stimato.",
  },
];

const Services = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 lava-bg opacity-50" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              {t.services.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8"
            >
              {t.services.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button variant="hero" size="lg" asChild>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  {t.cta.bookCall}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Catalog */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-12">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 md:p-10"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">{service.intro}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{service.timeline}</span>
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <h3 className="font-semibold text-foreground mb-4">
                      Cosa include:
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Button variant="lavaOutline" asChild>
                        <a href={WHATSAPP_AUDIT_URL} target="_blank" rel="noopener noreferrer">
                          {t.cta.getStarted}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-charcoal-light">
        <div className="container-custom">
          <SectionHeading title={t.faq.title} />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card rounded-xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.finalCta.title}
            </h2>
            <p className="text-muted-foreground mb-8">{t.finalCta.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  {t.cta.bookCall}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="dark" size="xl" asChild>
                <a href={WHATSAPP_AUDIT_URL} target="_blank" rel="noopener noreferrer">
                  {t.cta.freeAudit}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
