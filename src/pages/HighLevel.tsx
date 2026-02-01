import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Users, 
  Globe, 
  Calendar, 
  MessageSquare, 
  Workflow, 
  Mail, 
  Share2, 
  Star, 
  GraduationCap, 
  CreditCard, 
  Palette, 
  Copy, 
  BarChart3, 
  ShieldCheck,
  Plug,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/shared/SectionHeading';
import AnimatedCard from '@/components/shared/AnimatedCard';

const highLevelServices = {
  it: {
    intro: {
      title: 'Soluzioni HighLevel',
      subtitle: 'Costruiamo e gestiamo sistemi di marketing e vendita completi utilizzando HighLevel (GoHighLevel), la piattaforma all-in-one per agenzie e business orientati alla crescita.',
      description: 'Un sistema prodottizzato: setup + automazione + ottimizzazione continua. Tutto gestito da Vesuvio.',
    },
    services: [
      {
        icon: Users,
        title: 'CRM & Pipeline',
        description: 'Setup completo del CRM con pipeline personalizzate, stadi, gestione contatti e automazioni per il tuo team vendite.',
      },
      {
        icon: Globe,
        title: 'Siti Web & Funnel',
        description: 'Creazione di landing page, siti web completi, funnel multi-step e blog ottimizzati per la conversione.',
      },
      {
        icon: Calendar,
        title: 'Scheduling & Prenotazioni',
        description: 'Calendari online, gestione appuntamenti, reminder automatici via SMS/email e sincronizzazione Google/Outlook.',
      },
      {
        icon: MessageSquare,
        title: 'Comunicazioni Multi-Canale',
        description: 'Email, SMS, telefonate, voicemail drop, chat widget e centralizzazione di tutte le conversazioni in un\'unica inbox.',
      },
      {
        icon: Workflow,
        title: 'Workflow & Automazioni',
        description: 'Trigger automatici, sequenze follow-up, nurturing lead e automazioni personalizzate per ogni fase del customer journey.',
      },
      {
        icon: Mail,
        title: 'Email Marketing',
        description: 'Template email professionali, campagne broadcast, sequenze automatiche e analytics dettagliate.',
      },
      {
        icon: Share2,
        title: 'Social Planner',
        description: 'Pianificazione e pubblicazione automatica sui social media, calendario editoriale e analytics engagement.',
      },
      {
        icon: Star,
        title: 'Gestione Reputazione',
        description: 'Richieste recensioni automatiche, monitoraggio recensioni, widget per sito web e gestione Google Business Profile.',
      },
      {
        icon: GraduationCap,
        title: 'Corsi & Membership',
        description: 'Piattaforma per corsi online, contenuti gated, community e area membri con accessi controllati.',
      },
      {
        icon: CreditCard,
        title: 'Pagamenti & Fatturazione',
        description: 'Checkout integrato con Stripe, fatturazione ricorrente, abbonamenti e gestione ordini.',
      },
      {
        icon: Palette,
        title: 'White Label',
        description: 'CRM brandizzato con il tuo logo, colori e dominio personalizzato. App experience su misura per i tuoi clienti.',
      },
      {
        icon: Copy,
        title: 'Snapshots',
        description: 'Account template pre-configurati e sistemi di automazione riutilizzabili per deploy rapidi.',
      },
      {
        icon: BarChart3,
        title: 'Reporting & Analytics',
        description: 'Dashboard KPI, tracking performance pipeline, analytics campagne e report automatici.',
      },
      {
        icon: ShieldCheck,
        title: 'Compliance',
        description: 'Configurazioni per GDPR, consent management e best practice di compliance dove rilevante.',
      },
    ],
    integrations: {
      title: 'Integrazioni',
      description: 'Colleghiamo HighLevel con i tuoi strumenti esistenti:',
      items: ['SMTP / Provider Email', 'Twilio (SMS/Voice)', 'Stripe', 'Google Business Profile', 'Meta Lead Forms', 'Zapier / Make', 'Webhook personalizzati'],
    },
    saas: {
      title: 'SaaS Mode',
      description: 'Vuoi rivendere accesso a HighLevel ai tuoi clienti con il tuo brand? Configuriamo il modello SaaS per generare entrate ricorrenti.',
    },
  },
  en: {
    intro: {
      title: 'HighLevel Solutions',
      subtitle: 'We build and manage complete marketing and sales systems using HighLevel (GoHighLevel), the all-in-one platform for growth-focused agencies and businesses.',
      description: 'A productized system: setup + automation + ongoing optimization. All managed by Vesuvio.',
    },
    services: [
      {
        icon: Users,
        title: 'CRM & Pipeline',
        description: 'Complete CRM setup with custom pipelines, stages, contact management and automations for your sales team.',
      },
      {
        icon: Globe,
        title: 'Websites & Funnels',
        description: 'Creation of landing pages, complete websites, multi-step funnels and blogs optimized for conversion.',
      },
      {
        icon: Calendar,
        title: 'Scheduling & Bookings',
        description: 'Online calendars, appointment management, automatic SMS/email reminders and Google/Outlook sync.',
      },
      {
        icon: MessageSquare,
        title: 'Multi-Channel Communications',
        description: 'Email, SMS, phone calls, voicemail drops, chat widgets and centralization of all conversations in one inbox.',
      },
      {
        icon: Workflow,
        title: 'Workflows & Automation',
        description: 'Automatic triggers, follow-up sequences, lead nurturing and custom automations for every stage of the customer journey.',
      },
      {
        icon: Mail,
        title: 'Email Marketing',
        description: 'Professional email templates, broadcast campaigns, automatic sequences and detailed analytics.',
      },
      {
        icon: Share2,
        title: 'Social Planner',
        description: 'Automatic social media scheduling and publishing, editorial calendar and engagement analytics.',
      },
      {
        icon: Star,
        title: 'Reputation Management',
        description: 'Automatic review requests, review monitoring, website widgets and Google Business Profile management.',
      },
      {
        icon: GraduationCap,
        title: 'Courses & Memberships',
        description: 'Online course platform, gated content, community and member area with controlled access.',
      },
      {
        icon: CreditCard,
        title: 'Payments & Invoicing',
        description: 'Integrated Stripe checkout, recurring billing, subscriptions and order management.',
      },
      {
        icon: Palette,
        title: 'White Label',
        description: 'Branded CRM with your logo, colors and custom domain. Tailored app experience for your clients.',
      },
      {
        icon: Copy,
        title: 'Snapshots',
        description: 'Pre-configured account templates and reusable automation systems for rapid deployment.',
      },
      {
        icon: BarChart3,
        title: 'Reporting & Analytics',
        description: 'KPI dashboards, pipeline performance tracking, campaign analytics and automated reports.',
      },
      {
        icon: ShieldCheck,
        title: 'Compliance',
        description: 'GDPR configurations, consent management and compliance best practices where relevant.',
      },
    ],
    integrations: {
      title: 'Integrations',
      description: 'We connect HighLevel with your existing tools:',
      items: ['SMTP / Email Provider', 'Twilio (SMS/Voice)', 'Stripe', 'Google Business Profile', 'Meta Lead Forms', 'Zapier / Make', 'Custom webhooks'],
    },
    saas: {
      title: 'SaaS Mode',
      description: 'Want to resell HighLevel access to your clients under your brand? We set up the SaaS model to generate recurring revenue.',
    },
  },
  ru: {
    intro: {
      title: 'Решения HighLevel',
      subtitle: 'Мы создаем и управляем полными системами маркетинга и продаж с использованием HighLevel (GoHighLevel), универсальной платформы для агентств и бизнеса, ориентированных на рост.',
      description: 'Продуктизированная система: настройка + автоматизация + постоянная оптимизация. Всё управляется Vesuvio.',
    },
    services: [
      {
        icon: Users,
        title: 'CRM & Пайплайн',
        description: 'Полная настройка CRM с кастомными пайплайнами, стадиями, управлением контактами и автоматизациями для вашей команды продаж.',
      },
      {
        icon: Globe,
        title: 'Сайты & Воронки',
        description: 'Создание лендингов, полноценных сайтов, многошаговых воронок и блогов, оптимизированных для конверсии.',
      },
      {
        icon: Calendar,
        title: 'Расписание & Бронирования',
        description: 'Онлайн-календари, управление записями, автоматические SMS/email напоминания и синхронизация с Google/Outlook.',
      },
      {
        icon: MessageSquare,
        title: 'Мультиканальные Коммуникации',
        description: 'Email, SMS, звонки, голосовые сообщения, чат-виджеты и централизация всех разговоров в одном inbox.',
      },
      {
        icon: Workflow,
        title: 'Воркфлоу & Автоматизация',
        description: 'Автоматические триггеры, follow-up последовательности, nurturing лидов и кастомные автоматизации.',
      },
      {
        icon: Mail,
        title: 'Email Маркетинг',
        description: 'Профессиональные email-шаблоны, broadcast кампании, автоматические последовательности и детальная аналитика.',
      },
      {
        icon: Share2,
        title: 'Social Planner',
        description: 'Автоматическое планирование и публикация в соцсетях, редакционный календарь и аналитика вовлеченности.',
      },
      {
        icon: Star,
        title: 'Управление Репутацией',
        description: 'Автоматические запросы отзывов, мониторинг, виджеты для сайта и управление Google Business Profile.',
      },
      {
        icon: GraduationCap,
        title: 'Курсы & Членство',
        description: 'Платформа онлайн-курсов, закрытый контент, сообщество и личный кабинет с контролем доступа.',
      },
      {
        icon: CreditCard,
        title: 'Платежи & Счета',
        description: 'Интегрированный Stripe checkout, рекуррентные платежи, подписки и управление заказами.',
      },
      {
        icon: Palette,
        title: 'White Label',
        description: 'Брендированная CRM с вашим логотипом, цветами и кастомным доменом. Персональный app experience.',
      },
      {
        icon: Copy,
        title: 'Snapshots',
        description: 'Готовые шаблоны аккаунтов и переиспользуемые системы автоматизации для быстрого развертывания.',
      },
      {
        icon: BarChart3,
        title: 'Отчетность & Аналитика',
        description: 'Дашборды KPI, трекинг пайплайна, аналитика кампаний и автоматические отчеты.',
      },
      {
        icon: ShieldCheck,
        title: 'Compliance',
        description: 'Настройки GDPR, управление согласиями и лучшие практики compliance.',
      },
    ],
    integrations: {
      title: 'Интеграции',
      description: 'Мы подключаем HighLevel к вашим существующим инструментам:',
      items: ['SMTP / Email провайдер', 'Twilio (SMS/Voice)', 'Stripe', 'Google Business Profile', 'Meta Lead Forms', 'Zapier / Make', 'Кастомные вебхуки'],
    },
    saas: {
      title: 'SaaS Mode',
      description: 'Хотите перепродавать доступ к HighLevel своим клиентам под вашим брендом? Мы настроим SaaS модель для генерации рекуррентного дохода.',
    },
  },
};

const HighLevel = () => {
  const { language, t } = useLanguage();
  const content = highLevelServices[language];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 lava-bg opacity-50" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6 border border-secondary/20"
            >
              Powered by GoHighLevel
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              {content.intro.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground mb-4"
            >
              {content.intro.subtitle}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-primary font-medium mb-8"
            >
              {content.intro.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  {t.cta.bookCall}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="dark" size="lg" asChild>
                <Link to="/services">{t.cta.learnMore}</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading 
            title={language === 'it' ? 'Servizi HighLevel' : language === 'en' ? 'HighLevel Services' : 'Сервисы HighLevel'} 
            subtitle={language === 'it' ? 'Tutto ciò che puoi costruire e gestire con HighLevel' : language === 'en' ? 'Everything you can build and manage with HighLevel' : 'Всё, что можно создать и управлять с HighLevel'}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.services.map((service, index) => (
              <AnimatedCard key={index} delay={index * 0.05}>
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="section-padding bg-charcoal-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Plug className="w-7 h-7 text-primary" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {content.integrations.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {content.integrations.description}
                </p>
                <ul className="space-y-3">
                  {content.integrations.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8"
              >
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {content.saas.title}
                </h3>
                <p className="text-muted-foreground mb-6">{content.saas.description}</p>
                <Button variant="lava" asChild>
                  <Link to="/contact">{t.cta.contactUs}</Link>
                </Button>
              </motion.div>
            </div>
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
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                {t.cta.bookCall}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HighLevel;
