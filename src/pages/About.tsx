import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Zap, TrendingUp, Users, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/shared/SectionHeading';
import AnimatedCard from '@/components/shared/AnimatedCard';

const aboutContent = {
  it: {
    hero: {
      title: 'Chi Siamo',
      subtitle: 'Energia vulcanica per la crescita del tuo business. Siamo Vesuvio, l\'agenzia digitale di Roma che trasforma le tue ambizioni in risultati misurabili.',
    },
    story: {
      title: 'La Nostra Storia',
      content: [
        'Vesuvio nasce dalla convinzione che il marketing digitale debba generare risultati, non solo report.',
        'Dopo anni di esperienza in agenzie internazionali e startup in rapida crescita, abbiamo fondato Vesuvio con una missione chiara: costruire sistemi di marketing e vendita che funzionano come macchine automatiche di acquisizione clienti.',
        'Dal nostro quartier generale a Roma, serviamo clienti in tutta Italia e in Europa, con un focus maniacale su performance e ROI.',
      ],
    },
    mission: {
      title: 'La Nostra Missione',
      content: 'Democratizzare l\'accesso a sistemi di marketing automation di livello enterprise. Ogni business merita strumenti potenti e strategie basate sui dati.',
    },
    values: {
      title: 'I Nostri Valori',
      items: [
        { icon: Target, title: 'Risultati Misurabili', desc: 'Ogni azione è tracciata. Ogni euro investito è accountable.' },
        { icon: Zap, title: 'Velocità di Esecuzione', desc: 'Go-live in settimane, non mesi. Il tempo è denaro.' },
        { icon: TrendingUp, title: 'Ottimizzazione Continua', desc: 'Non ci fermiamo al lancio. Iteriamo e miglioriamo sempre.' },
        { icon: Users, title: 'Partnership, Non Fornitura', desc: 'Siamo parte del tuo team, non un fornitore esterno.' },
      ],
    },
    process: {
      title: 'Il Nostro Processo',
      steps: [
        { num: '01', title: 'Discovery', desc: 'Analizziamo il tuo business, il mercato e gli obiettivi.' },
        { num: '02', title: 'Strategia', desc: 'Definiamo il piano d\'azione con KPI chiari e timeline.' },
        { num: '03', title: 'Implementazione', desc: 'Costruiamo e lanciamo i sistemi rapidamente.' },
        { num: '04', title: 'Ottimizzazione', desc: 'Monitoriamo, testiamo e miglioriamo continuamente.' },
      ],
    },
    team: {
      title: 'Il Team',
      subtitle: 'Un team snello di specialisti con esperienza in aziende Fortune 500 e startup unicorn.',
      members: [
        { name: '[Nome Fondatore]', role: 'CEO & Strategist', bio: '10+ anni in digital marketing. Ex [Azienda].' },
        { name: '[Nome]', role: 'Head of Automation', bio: 'Specialista HighLevel e workflow automation.' },
        { name: '[Nome]', role: 'Performance Marketing', bio: 'Meta & Google Ads certified. €10M+ gestiti.' },
        { name: '[Nome]', role: 'Creative Director', bio: 'Copywriting e design conversion-focused.' },
      ],
    },
  },
  en: {
    hero: {
      title: 'About Us',
      subtitle: 'Volcanic energy for your business growth. We are Vesuvio, the Rome-based digital agency that transforms your ambitions into measurable results.',
    },
    story: {
      title: 'Our Story',
      content: [
        'Vesuvio was born from the belief that digital marketing should generate results, not just reports.',
        'After years of experience in international agencies and fast-growing startups, we founded Vesuvio with a clear mission: to build marketing and sales systems that work like automatic customer acquisition machines.',
        'From our Rome headquarters, we serve clients across Italy and Europe, with a maniacal focus on performance and ROI.',
      ],
    },
    mission: {
      title: 'Our Mission',
      content: 'Democratize access to enterprise-level marketing automation systems. Every business deserves powerful tools and data-driven strategies.',
    },
    values: {
      title: 'Our Values',
      items: [
        { icon: Target, title: 'Measurable Results', desc: 'Every action is tracked. Every euro invested is accountable.' },
        { icon: Zap, title: 'Speed of Execution', desc: 'Go-live in weeks, not months. Time is money.' },
        { icon: TrendingUp, title: 'Continuous Optimization', desc: 'We don\'t stop at launch. We iterate and improve always.' },
        { icon: Users, title: 'Partnership, Not Vendor', desc: 'We\'re part of your team, not an external supplier.' },
      ],
    },
    process: {
      title: 'Our Process',
      steps: [
        { num: '01', title: 'Discovery', desc: 'We analyze your business, market, and goals.' },
        { num: '02', title: 'Strategy', desc: 'We define the action plan with clear KPIs and timeline.' },
        { num: '03', title: 'Implementation', desc: 'We build and launch systems rapidly.' },
        { num: '04', title: 'Optimization', desc: 'We monitor, test, and continuously improve.' },
      ],
    },
    team: {
      title: 'The Team',
      subtitle: 'A lean team of specialists with experience at Fortune 500 companies and unicorn startups.',
      members: [
        { name: '[Founder Name]', role: 'CEO & Strategist', bio: '10+ years in digital marketing. Ex [Company].' },
        { name: '[Name]', role: 'Head of Automation', bio: 'HighLevel specialist and workflow automation.' },
        { name: '[Name]', role: 'Performance Marketing', bio: 'Meta & Google Ads certified. €10M+ managed.' },
        { name: '[Name]', role: 'Creative Director', bio: 'Conversion-focused copywriting and design.' },
      ],
    },
  },
  ru: {
    hero: {
      title: 'О Нас',
      subtitle: 'Вулканическая энергия для роста вашего бизнеса. Мы Vesuvio, цифровое агентство из Рима, которое превращает ваши амбиции в измеримые результаты.',
    },
    story: {
      title: 'Наша История',
      content: [
        'Vesuvio родился из убеждения, что digital маркетинг должен генерировать результаты, а не только отчеты.',
        'После многих лет опыта в международных агентствах и быстрорастущих стартапах мы основали Vesuvio с четкой миссией: создавать системы маркетинга и продаж, которые работают как автоматические машины привлечения клиентов.',
        'Из нашей штаб-квартиры в Риме мы обслуживаем клиентов по всей Италии и Европе, с маниакальным фокусом на performance и ROI.',
      ],
    },
    mission: {
      title: 'Наша Миссия',
      content: 'Демократизировать доступ к системам маркетинговой автоматизации enterprise-уровня. Каждый бизнес заслуживает мощных инструментов и стратегий на основе данных.',
    },
    values: {
      title: 'Наши Ценности',
      items: [
        { icon: Target, title: 'Измеримые Результаты', desc: 'Каждое действие отслеживается. Каждый евро подотчетен.' },
        { icon: Zap, title: 'Скорость Исполнения', desc: 'Запуск за недели, не месяцы. Время — деньги.' },
        { icon: TrendingUp, title: 'Постоянная Оптимизация', desc: 'Мы не останавливаемся на запуске. Мы всегда улучшаем.' },
        { icon: Users, title: 'Партнерство, Не Поставка', desc: 'Мы часть вашей команды, не внешний поставщик.' },
      ],
    },
    process: {
      title: 'Наш Процесс',
      steps: [
        { num: '01', title: 'Discovery', desc: 'Анализируем ваш бизнес, рынок и цели.' },
        { num: '02', title: 'Стратегия', desc: 'Определяем план действий с четкими KPI и таймлайном.' },
        { num: '03', title: 'Реализация', desc: 'Строим и запускаем системы быстро.' },
        { num: '04', title: 'Оптимизация', desc: 'Мониторим, тестируем и постоянно улучшаем.' },
      ],
    },
    team: {
      title: 'Команда',
      subtitle: 'Компактная команда специалистов с опытом в Fortune 500 компаниях и unicorn стартапах.',
      members: [
        { name: '[Имя Основателя]', role: 'CEO & Стратег', bio: '10+ лет в digital маркетинге. Ex [Компания].' },
        { name: '[Имя]', role: 'Head of Automation', bio: 'Специалист HighLevel и workflow автоматизации.' },
        { name: '[Имя]', role: 'Performance Marketing', bio: 'Meta & Google Ads certified. €10M+ управлено.' },
        { name: '[Имя]', role: 'Creative Director', bio: 'Conversion-focused копирайтинг и дизайн.' },
      ],
    },
  },
};

const About = () => {
  const { language, t } = useLanguage();
  const content = aboutContent[language];

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
              {content.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              {content.hero.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                {content.story.title}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                {content.story.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 text-center"
            >
              <Award className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                {content.mission.title}
              </h3>
              <p className="text-muted-foreground">{content.mission.content}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-charcoal-light">
        <div className="container-custom">
          <SectionHeading title={content.values.title} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.values.items.map((value, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <value.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading title={content.process.title} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <span className="font-display text-6xl font-bold text-primary/10">
                  {step.num}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
                {index < content.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-charcoal-light">
        <div className="container-custom">
          <SectionHeading title={content.team.title} subtitle={content.team.subtitle} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.team.members.map((member, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground text-center">
                  {member.name}
                </h3>
                <p className="text-primary text-sm text-center mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm text-center">{member.bio}</p>
              </AnimatedCard>
            ))}
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

export default About;
