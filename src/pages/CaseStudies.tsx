import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Target, Users, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/shared/SectionHeading';

const caseStudiesData = {
  it: [
    {
      id: 1,
      client: '[E-commerce Fashion]',
      industry: 'Moda & Retail',
      challenge: 'Costo acquisizione clienti troppo alto e ROAS negativo sulle campagne Meta.',
      solution: 'Ristrutturazione completa delle campagne, nuovo funnel di acquisizione con lead magnet, e sequenze email automatizzate.',
      system: 'HighLevel CRM + Meta Ads + Email automation + Retargeting dinamico',
      results: [
        { label: 'ROAS', value: '+285%', period: 'in 90 giorni' },
        { label: 'CPL', value: '€4.20', period: 'da €12.50' },
        { label: 'Conv. Rate', value: '3.8%', period: 'da 1.2%' },
        { label: 'Revenue', value: '+€180K', period: 'Q1' },
      ],
    },
    {
      id: 2,
      client: '[Clinica Dentale]',
      industry: 'Healthcare',
      challenge: 'Difficoltà a riempire l\'agenda con pazienti di qualità. Alto tasso di no-show.',
      solution: 'Sistema di booking online, reminder SMS automatici, e campagne local Google Ads + Meta.',
      system: 'HighLevel scheduling + SMS automation + Google Ads + Reputation management',
      results: [
        { label: 'Appuntamenti', value: '+147', period: '/mese' },
        { label: 'Show-up Rate', value: '92%', period: 'da 68%' },
        { label: 'LTV Paziente', value: '€2,400', period: 'media' },
        { label: 'Recensioni 5★', value: '+89', period: 'in 6 mesi' },
      ],
    },
    {
      id: 3,
      client: '[SaaS B2B]',
      industry: 'Software',
      challenge: 'Trial-to-paid conversion basso e churn elevato. Onboarding manuale non scalabile.',
      solution: 'Onboarding automatizzato, email nurturing basato su comportamento, e customer success workflow.',
      system: 'HighLevel workflows + Intercom + Custom webhooks + Stripe billing',
      results: [
        { label: 'MRR', value: '€180K', period: 'in 6 mesi' },
        { label: 'Trial→Paid', value: '24%', period: 'da 8%' },
        { label: 'Churn', value: '2.1%', period: 'da 7.8%' },
        { label: 'NPS', value: '72', period: 'da 45' },
      ],
    },
    {
      id: 4,
      client: '[Agenzia Immobiliare]',
      industry: 'Real Estate',
      challenge: 'Lead non qualificati e processo di follow-up manuale inefficiente.',
      solution: 'Form di qualificazione multi-step, scoring automatico lead, e pipeline vendita strutturata.',
      system: 'HighLevel funnels + Lead scoring + SMS/Email automation + CRM pipeline',
      results: [
        { label: 'Lead Qualificati', value: '+320%', period: '' },
        { label: 'Tempo Risposta', value: '<5 min', period: 'da 4h' },
        { label: 'Deal Chiusi', value: '+42%', period: 'YoY' },
        { label: 'Revenue', value: '+€450K', period: 'anno' },
      ],
    },
    {
      id: 5,
      client: '[Coach Online]',
      industry: 'Formazione',
      challenge: 'Lancio corso senza lista email e budget limitato per ads.',
      solution: 'Funnel webinar, sequenza email pre-lancio, e community building organica.',
      system: 'HighLevel funnels + Email marketing + Corso platform + Stripe payments',
      results: [
        { label: 'Iscritti Corso', value: '847', period: 'primo lancio' },
        { label: 'Revenue', value: '€127K', period: 'lancio' },
        { label: 'Email List', value: '12K+', period: 'in 90gg' },
        { label: 'Open Rate', value: '42%', period: 'media' },
      ],
    },
    {
      id: 6,
      client: '[Ristorante Fine Dining]',
      industry: 'Hospitality',
      challenge: 'Prenotazioni last-minute e tavoli vuoti nei giorni feriali.',
      solution: 'Sistema prenotazioni online, campagne email/SMS per riempire tavoli, loyalty program.',
      system: 'HighLevel booking + SMS campaigns + Reputation + Google Business optimization',
      results: [
        { label: 'Prenotazioni', value: '+180%', period: 'feriali' },
        { label: 'No-show', value: '-85%', period: '' },
        { label: 'Clienti Ritorno', value: '+60%', period: '' },
        { label: 'Rating Google', value: '4.9★', period: 'da 4.2★' },
      ],
    },
  ],
  en: [
    {
      id: 1,
      client: '[Fashion E-commerce]',
      industry: 'Fashion & Retail',
      challenge: 'Customer acquisition cost too high and negative ROAS on Meta campaigns.',
      solution: 'Complete campaign restructuring, new acquisition funnel with lead magnet, and automated email sequences.',
      system: 'HighLevel CRM + Meta Ads + Email automation + Dynamic retargeting',
      results: [
        { label: 'ROAS', value: '+285%', period: 'in 90 days' },
        { label: 'CPL', value: '€4.20', period: 'from €12.50' },
        { label: 'Conv. Rate', value: '3.8%', period: 'from 1.2%' },
        { label: 'Revenue', value: '+€180K', period: 'Q1' },
      ],
    },
    {
      id: 2,
      client: '[Dental Clinic]',
      industry: 'Healthcare',
      challenge: 'Difficulty filling the schedule with quality patients. High no-show rate.',
      solution: 'Online booking system, automatic SMS reminders, and local Google Ads + Meta campaigns.',
      system: 'HighLevel scheduling + SMS automation + Google Ads + Reputation management',
      results: [
        { label: 'Appointments', value: '+147', period: '/month' },
        { label: 'Show-up Rate', value: '92%', period: 'from 68%' },
        { label: 'Patient LTV', value: '€2,400', period: 'average' },
        { label: '5★ Reviews', value: '+89', period: 'in 6 months' },
      ],
    },
    {
      id: 3,
      client: '[B2B SaaS]',
      industry: 'Software',
      challenge: 'Low trial-to-paid conversion and high churn. Manual onboarding not scalable.',
      solution: 'Automated onboarding, behavior-based email nurturing, and customer success workflow.',
      system: 'HighLevel workflows + Intercom + Custom webhooks + Stripe billing',
      results: [
        { label: 'MRR', value: '€180K', period: 'in 6 months' },
        { label: 'Trial→Paid', value: '24%', period: 'from 8%' },
        { label: 'Churn', value: '2.1%', period: 'from 7.8%' },
        { label: 'NPS', value: '72', period: 'from 45' },
      ],
    },
    {
      id: 4,
      client: '[Real Estate Agency]',
      industry: 'Real Estate',
      challenge: 'Unqualified leads and inefficient manual follow-up process.',
      solution: 'Multi-step qualification form, automatic lead scoring, and structured sales pipeline.',
      system: 'HighLevel funnels + Lead scoring + SMS/Email automation + CRM pipeline',
      results: [
        { label: 'Qualified Leads', value: '+320%', period: '' },
        { label: 'Response Time', value: '<5 min', period: 'from 4h' },
        { label: 'Closed Deals', value: '+42%', period: 'YoY' },
        { label: 'Revenue', value: '+€450K', period: 'year' },
      ],
    },
    {
      id: 5,
      client: '[Online Coach]',
      industry: 'Education',
      challenge: 'Course launch without email list and limited ads budget.',
      solution: 'Webinar funnel, pre-launch email sequence, and organic community building.',
      system: 'HighLevel funnels + Email marketing + Course platform + Stripe payments',
      results: [
        { label: 'Course Signups', value: '847', period: 'first launch' },
        { label: 'Revenue', value: '€127K', period: 'launch' },
        { label: 'Email List', value: '12K+', period: 'in 90 days' },
        { label: 'Open Rate', value: '42%', period: 'average' },
      ],
    },
    {
      id: 6,
      client: '[Fine Dining Restaurant]',
      industry: 'Hospitality',
      challenge: 'Last-minute reservations and empty tables on weekdays.',
      solution: 'Online booking system, email/SMS campaigns to fill tables, loyalty program.',
      system: 'HighLevel booking + SMS campaigns + Reputation + Google Business optimization',
      results: [
        { label: 'Reservations', value: '+180%', period: 'weekdays' },
        { label: 'No-show', value: '-85%', period: '' },
        { label: 'Return Customers', value: '+60%', period: '' },
        { label: 'Google Rating', value: '4.9★', period: 'from 4.2★' },
      ],
    },
  ],
  ru: [
    {
      id: 1,
      client: '[Fashion E-commerce]',
      industry: 'Мода & Ритейл',
      challenge: 'Слишком высокая стоимость привлечения клиентов и отрицательный ROAS в Meta кампаниях.',
      solution: 'Полная реструктуризация кампаний, новая воронка с лид-магнитом и автоматические email-последовательности.',
      system: 'HighLevel CRM + Meta Ads + Email automation + Dynamic retargeting',
      results: [
        { label: 'ROAS', value: '+285%', period: 'за 90 дней' },
        { label: 'CPL', value: '€4.20', period: 'с €12.50' },
        { label: 'Conv. Rate', value: '3.8%', period: 'с 1.2%' },
        { label: 'Revenue', value: '+€180K', period: 'Q1' },
      ],
    },
    {
      id: 2,
      client: '[Стоматологическая Клиника]',
      industry: 'Здравоохранение',
      challenge: 'Сложности с заполнением расписания качественными пациентами. Высокий no-show.',
      solution: 'Система онлайн-бронирования, автоматические SMS напоминания, локальные Google Ads + Meta кампании.',
      system: 'HighLevel scheduling + SMS automation + Google Ads + Reputation management',
      results: [
        { label: 'Записи', value: '+147', period: '/месяц' },
        { label: 'Show-up Rate', value: '92%', period: 'с 68%' },
        { label: 'LTV Пациента', value: '€2,400', period: 'среднее' },
        { label: '5★ Отзывов', value: '+89', period: 'за 6 месяцев' },
      ],
    },
    {
      id: 3,
      client: '[B2B SaaS]',
      industry: 'Software',
      challenge: 'Низкая конверсия trial-to-paid и высокий churn. Ручной онбординг не масштабируется.',
      solution: 'Автоматический онбординг, nurturing на основе поведения, customer success workflow.',
      system: 'HighLevel workflows + Intercom + Custom webhooks + Stripe billing',
      results: [
        { label: 'MRR', value: '€180K', period: 'за 6 месяцев' },
        { label: 'Trial→Paid', value: '24%', period: 'с 8%' },
        { label: 'Churn', value: '2.1%', period: 'с 7.8%' },
        { label: 'NPS', value: '72', period: 'с 45' },
      ],
    },
    {
      id: 4,
      client: '[Агентство Недвижимости]',
      industry: 'Недвижимость',
      challenge: 'Неквалифицированные лиды и неэффективный ручной follow-up.',
      solution: 'Многошаговая форма квалификации, автоматический скоринг лидов, структурированный пайплайн.',
      system: 'HighLevel funnels + Lead scoring + SMS/Email automation + CRM pipeline',
      results: [
        { label: 'Качественные Лиды', value: '+320%', period: '' },
        { label: 'Время Ответа', value: '<5 мин', period: 'с 4ч' },
        { label: 'Закрытые Сделки', value: '+42%', period: 'YoY' },
        { label: 'Revenue', value: '+€450K', period: 'год' },
      ],
    },
    {
      id: 5,
      client: '[Онлайн Коуч]',
      industry: 'Образование',
      challenge: 'Запуск курса без email базы и с ограниченным бюджетом на рекламу.',
      solution: 'Вебинарная воронка, pre-launch email последовательность, органическое построение комьюнити.',
      system: 'HighLevel funnels + Email marketing + Course platform + Stripe payments',
      results: [
        { label: 'Записей на Курс', value: '847', period: 'первый запуск' },
        { label: 'Revenue', value: '€127K', period: 'запуск' },
        { label: 'Email База', value: '12K+', period: 'за 90 дней' },
        { label: 'Open Rate', value: '42%', period: 'среднее' },
      ],
    },
    {
      id: 6,
      client: '[Fine Dining Ресторан]',
      industry: 'Гостеприимство',
      challenge: 'Бронирования в последний момент и пустые столики в будни.',
      solution: 'Система онлайн-бронирования, email/SMS кампании для заполнения столиков, программа лояльности.',
      system: 'HighLevel booking + SMS campaigns + Reputation + Google Business optimization',
      results: [
        { label: 'Бронирования', value: '+180%', period: 'будни' },
        { label: 'No-show', value: '-85%', period: '' },
        { label: 'Возврат Клиентов', value: '+60%', period: '' },
        { label: 'Рейтинг Google', value: '4.9★', period: 'с 4.2★' },
      ],
    },
  ],
};

const sectionLabels = {
  it: { challenge: 'Sfida', solution: 'Soluzione', system: 'Sistema', results: 'Risultati' },
  en: { challenge: 'Challenge', solution: 'Solution', system: 'System', results: 'Results' },
  ru: { challenge: 'Задача', solution: 'Решение', system: 'Система', results: 'Результаты' },
};

const CaseStudies = () => {
  const { language, t } = useLanguage();
  const caseStudies = caseStudiesData[language];
  const labels = sectionLabels[language];

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
              {t.caseStudies.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              {t.caseStudies.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                {/* Header */}
                <div className="p-8 md:p-10 border-b border-border">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    {study.client}
                  </h2>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div>
                      <h3 className="font-semibold text-primary mb-2">{labels.challenge}</h3>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">{labels.solution}</h3>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-10">
                    <h3 className="font-semibold text-foreground mb-3">{labels.system}</h3>
                    <p className="text-muted-foreground bg-muted/30 px-4 py-3 rounded-lg inline-block">
                      {study.system}
                    </p>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-6">{labels.results}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {study.results.map((result, i) => (
                        <div key={i} className="text-center p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
                          <p className="font-display text-2xl md:text-3xl font-bold text-gradient-lava mb-1">
                            {result.value}
                          </p>
                          <p className="text-foreground font-medium text-sm">{result.label}</p>
                          {result.period && (
                            <p className="text-muted-foreground text-xs mt-1">{result.period}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal-light">
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

export default CaseStudies;
