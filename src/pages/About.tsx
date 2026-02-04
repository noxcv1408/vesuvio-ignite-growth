import { motion } from 'framer-motion';
import { ArrowRight, Target, Zap, TrendingUp, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/shared/SectionHeading';
import AnimatedCard from '@/components/shared/AnimatedCard';

const CALENDLY_URL = 'https://calendly.com/noxcv1408/30min';

const aboutContent = {
  hero: {
    title: 'Chi Siamo',
    subtitle: "Energia vulcanica per la crescita del tuo business. Siamo Vesuvio, l'agenzia digitale di Napoli che trasforma le tue ambizioni in risultati misurabili.",
  },
  story: {
    title: 'La Nostra Storia',
    content: [
      'Vesuvio nasce dalla convinzione che il marketing digitale debba generare risultati, non solo report.',
      'Dopo anni di esperienza in agenzie internazionali e startup in rapida crescita, abbiamo fondato Vesuvio con una missione chiara: costruire sistemi di marketing e vendita che funzionano come macchine automatiche di acquisizione clienti.',
      'Dal nostro quartier generale a Napoli, serviamo clienti in tutta Italia e in Europa, con un focus maniacale su performance e ROI.',
    ],
  },
  mission: {
    title: 'La Nostra Missione',
    content: "Democratizzare l'accesso a sistemi di marketing automation di livello enterprise. Ogni business merita strumenti potenti e strategie basate sui dati.",
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
      { num: '02', title: 'Strategia', desc: "Definiamo il piano d'azione con KPI chiari e timeline." },
      { num: '03', title: 'Implementazione', desc: 'Costruiamo e lanciamo i sistemi rapidamente.' },
      { num: '04', title: 'Ottimizzazione', desc: 'Monitoriamo, testiamo e miglioriamo continuamente.' },
    ],
  },
};

const About = () => {
  const { t } = useLanguage();
  const content = aboutContent;

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

      {/* CTA */}
      <section className="section-padding bg-charcoal-light">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.finalCta.title}
            </h2>
            <p className="text-muted-foreground mb-8">{t.finalCta.subtitle}</p>
            <Button variant="hero" size="xl" asChild>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                {t.cta.bookCall}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
