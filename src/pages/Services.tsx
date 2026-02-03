import { motion } from 'framer-motion';
import { ArrowRight, Target, Zap, Star, Settings, BarChart3, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/shared/SectionHeading';
import RequestAuditDialog from '@/components/shared/RequestAuditDialog';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CALENDLY_URL = 'https://calendly.com/noxcv1408/30min';

const serviceCategories = {
  it: [
    {
      id: 'lead-generation',
      icon: Target,
      title: 'Lead Generation',
      intro: 'Strategie multi-canale per attrarre prospect qualificati e pronti all\'acquisto.',
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
  ],
  en: [
    {
      id: 'lead-generation',
      icon: Target,
      title: 'Lead Generation',
      intro: 'Multi-channel strategies to attract qualified prospects ready to buy.',
      deliverables: [
        'Meta Ads campaigns (Facebook & Instagram)',
        'Google Ads campaigns (Search, Display, YouTube)',
        'High-converting landing pages',
        'Lead magnets and gated content',
        'Optimized forms and A/B testing',
        'CRM integration and automated nurturing',
      ],
      timeline: '2-4 weeks for initial setup',
    },
    {
      id: 'sales-automation',
      icon: Zap,
      title: 'Sales Automation',
      intro: 'Automated workflows that convert leads to customers 24/7, hands-free.',
      deliverables: [
        'Automated email sequences',
        'SMS follow-up and reminders',
        'Structured sales pipelines',
        'Automated lead scoring',
        'Real-time sales team notifications',
        'Calendar integration and bookings',
      ],
      timeline: '3-6 weeks for complete implementation',
    },
    {
      id: 'retention',
      icon: Star,
      title: 'Retention & Reputation',
      intro: 'Systems to maximize lifetime value and build a 5-star reputation.',
      deliverables: [
        'Customer reactivation campaigns',
        'Automated referral programs',
        'Automated review requests',
        'Review management and responses',
        'NPS surveys and feedback loops',
        'Website review widgets',
      ],
      timeline: '2-3 weeks for setup',
    },
    {
      id: 'websites-funnels',
      icon: Settings,
      title: 'Websites & Funnels',
      intro: 'Pages and funnels optimized for conversions, speed, and brand experience.',
      deliverables: [
        'Responsive business websites',
        'Campaign-specific landing pages',
        'Multi-step funnels',
        'Integrated checkout and payments',
        'Blog and content hub',
        'Forms, surveys and interactive quizzes',
      ],
      timeline: '2-6 weeks depending on complexity',
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Analytics & Optimization',
      intro: 'KPI dashboards and data-driven continuous optimization for growing performance.',
      deliverables: [
        'Centralized KPI dashboard',
        'Advanced conversion tracking',
        'Weekly/monthly reports',
        'Continuous A/B testing',
        'Multi-touch attribution analysis',
        'Optimization consulting',
      ],
      timeline: 'Setup 1-2 weeks + ongoing optimization',
    },
  ],
  ru: [
    {
      id: 'lead-generation',
      icon: Target,
      title: 'Лидогенерация',
      intro: 'Мультиканальные стратегии для привлечения квалифицированных клиентов.',
      deliverables: [
        'Кампании Meta Ads (Facebook & Instagram)',
        'Кампании Google Ads (Search, Display, YouTube)',
        'Высококонверсионные лендинги',
        'Лид-магниты и закрытый контент',
        'Оптимизированные формы и A/B тесты',
        'Интеграция CRM и автоматический nurturing',
      ],
      timeline: '2-4 недели для начальной настройки',
    },
    {
      id: 'sales-automation',
      icon: Zap,
      title: 'Автоматизация Продаж',
      intro: 'Автоматические воронки, которые конвертируют лиды в клиентов 24/7.',
      deliverables: [
        'Автоматические email-последовательности',
        'SMS follow-up и напоминания',
        'Структурированные пайплайны продаж',
        'Автоматический скоринг лидов',
        'Уведомления в реальном времени',
        'Интеграция календаря и бронирований',
      ],
      timeline: '3-6 недель для полной реализации',
    },
    {
      id: 'retention',
      icon: Star,
      title: 'Удержание & Репутация',
      intro: 'Системы для максимизации LTV и построения 5-звездочной репутации.',
      deliverables: [
        'Кампании реактивации клиентов',
        'Автоматические реферальные программы',
        'Автоматические запросы отзывов',
        'Управление и ответы на отзывы',
        'NPS опросы и обратная связь',
        'Виджеты отзывов для сайта',
      ],
      timeline: '2-3 недели для настройки',
    },
    {
      id: 'websites-funnels',
      icon: Settings,
      title: 'Сайты & Воронки',
      intro: 'Страницы и воронки, оптимизированные для конверсий и бренда.',
      deliverables: [
        'Адаптивные бизнес-сайты',
        'Лендинги для кампаний',
        'Многошаговые воронки',
        'Интегрированные платежи',
        'Блог и контент-хаб',
        'Формы, опросы и интерактивные квизы',
      ],
      timeline: '2-6 недель в зависимости от сложности',
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Аналитика & Оптимизация',
      intro: 'Дашборды KPI и постоянная оптимизация на основе данных.',
      deliverables: [
        'Централизованный дашборд KPI',
        'Расширенное отслеживание конверсий',
        'Еженедельные/ежемесячные отчеты',
        'Постоянное A/B тестирование',
        'Multi-touch атрибуция',
        'Консалтинг по оптимизации',
      ],
      timeline: 'Настройка 1-2 недели + постоянная оптимизация',
    },
  ],
};

const faqData = {
  it: [
    {
      question: 'Quanto costa lavorare con Vesuvio?',
      answer: 'I nostri progetti partono da €2.000/mese per servizi gestiti. Offriamo anche progetti una tantum per setup specifici. Prenota una call per un preventivo personalizzato.',
    },
    {
      question: 'Quanto tempo serve per vedere i primi risultati?',
      answer: 'Dipende dal servizio. Le campagne paid possono generare lead in 7-14 giorni. I sistemi di automazione completi richiedono 4-8 settimane per l\'implementazione.',
    },
    {
      question: 'Lavorate con aziende del mio settore?',
      answer: 'Lavoriamo con aziende B2B e B2C in diversi settori: healthcare, e-commerce, servizi professionali, SaaS, real estate e altri. Prenota una call per valutare il fit.',
    },
    {
      question: 'Cosa include l\'audit gratuito?',
      answer: 'Analizziamo il tuo attuale stack marketing, identifichiamo le opportunità di automazione e forniamo un piano d\'azione con priorità chiare e ROI stimato.',
    },
  ],
  en: [
    {
      question: 'How much does it cost to work with Vesuvio?',
      answer: 'Our projects start from €2,000/month for managed services. We also offer one-time projects for specific setups. Book a call for a custom quote.',
    },
    {
      question: 'How long until I see results?',
      answer: 'It depends on the service. Paid campaigns can generate leads in 7-14 days. Complete automation systems require 4-8 weeks for implementation.',
    },
    {
      question: 'Do you work with companies in my industry?',
      answer: 'We work with B2B and B2C companies across sectors: healthcare, e-commerce, professional services, SaaS, real estate and more. Book a call to assess fit.',
    },
    {
      question: 'What does the free audit include?',
      answer: 'We analyze your current marketing stack, identify automation opportunities, and provide an action plan with clear priorities and estimated ROI.',
    },
  ],
  ru: [
    {
      question: 'Сколько стоит работа с Vesuvio?',
      answer: 'Наши проекты начинаются от €2,000/месяц за управляемые услуги. Также предлагаем разовые проекты для конкретных настроек. Запишитесь на звонок для индивидуального предложения.',
    },
    {
      question: 'Когда я увижу первые результаты?',
      answer: 'Зависит от услуги. Платные кампании могут генерировать лиды за 7-14 дней. Полные системы автоматизации требуют 4-8 недель для внедрения.',
    },
    {
      question: 'Вы работаете с компаниями в моей отрасли?',
      answer: 'Мы работаем с B2B и B2C компаниями в разных секторах: здравоохранение, e-commerce, профессиональные услуги, SaaS, недвижимость и другие.',
    },
    {
      question: 'Что включает бесплатный аудит?',
      answer: 'Мы анализируем ваш текущий маркетинговый стек, определяем возможности автоматизации и предоставляем план действий с приоритетами и оценкой ROI.',
    },
  ],
};

const Services = () => {
  const { language, t, getLocalizedPath } = useLanguage();
  const services = serviceCategories[language];
  const faqs = faqData[language];

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
            {services.map((service, index) => (
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
                      {language === 'it' ? 'Cosa include:' : language === 'en' ? 'What\'s included:' : 'Что включено:'}
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
                        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                          {t.cta.bookCall}
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
              {faqs.map((faq, index) => (
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
              <RequestAuditDialog
                trigger={
                  <Button variant="dark" size="xl">
                    {t.cta.freeAudit}
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
