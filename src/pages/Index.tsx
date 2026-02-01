import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, TrendingUp, Settings, BarChart3, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/shared/SectionHeading';
import AnimatedCard from '@/components/shared/AnimatedCard';

// Hero Section
const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 lava-bg" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        animate={{ 
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              🔥 Digital Agency • Roma, Italia
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            <span className="text-gradient-lava">{t.hero.title.split(' ').slice(0, 2).join(' ')}</span>
            <br />
            {t.hero.title.split(' ').slice(2).join(' ')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                {t.cta.bookCall}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroSecondary" size="xl" asChild>
              <Link to="/contact">{t.cta.freeAudit}</Link>
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center"
          >
            <p className="text-muted-foreground text-sm mb-4">{t.hero.trustedBy}</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-50">
              {['[Cliente A]', '[Cliente B]', '[Cliente C]', '[Cliente D]'].map((client, i) => (
                <div key={i} className="text-foreground/60 font-semibold text-lg">
                  {client}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Target, ...t.services.leadGen },
    { icon: Zap, ...t.services.salesAuto },
    { icon: Star, ...t.services.retention },
    { icon: Settings, ...t.services.websites },
    { icon: BarChart3, ...t.services.analytics },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading title={t.services.title} subtitle={t.services.subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.desc}</p>
            </AnimatedCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="lavaOutline" size="lg" asChild>
            <Link to="/services">
              {t.cta.learnMore}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// Why Vesuvio Section
const WhyVesuvioSection = () => {
  const { t } = useLanguage();

  const pillars = [
    { icon: Zap, ...t.whyVesuvio.speed },
    { icon: Target, ...t.whyVesuvio.clarity },
    { icon: TrendingUp, ...t.whyVesuvio.roi },
    { icon: Settings, ...t.whyVesuvio.automation },
  ];

  return (
    <section className="section-padding bg-charcoal-light relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial-lava opacity-30" />
      
      <div className="container-custom relative z-10">
        <SectionHeading title={t.whyVesuvio.title} subtitle={t.whyVesuvio.subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-5 p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Case Studies Preview Section
const CaseStudiesSection = () => {
  const { t } = useLanguage();

  const caseStudies = [
    {
      client: '[E-commerce Fashion]',
      result: '+285% ROAS',
      metric: 'in 90 giorni',
      kpis: ['CPL: €4.20', 'Conv. Rate: 3.8%'],
    },
    {
      client: '[Clinica Dentale]',
      result: '+147 Appuntamenti',
      metric: 'al mese',
      kpis: ['Show-up: 92%', 'LTV: €2,400'],
    },
    {
      client: '[SaaS B2B]',
      result: '€180K MRR',
      metric: 'in 6 mesi',
      kpis: ['Trial→Paid: 24%', 'Churn: 2.1%'],
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading title={t.caseStudies.title} subtitle={t.caseStudies.subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <AnimatedCard key={index} delay={index * 0.15} className="relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-t-2xl" />
              <p className="text-muted-foreground text-sm mb-2">{study.client}</p>
              <h3 className="font-display text-3xl font-bold text-gradient-lava mb-1">
                {study.result}
              </h3>
              <p className="text-foreground mb-4">{study.metric}</p>
              <div className="flex flex-wrap gap-2">
                {study.kpis.map((kpi, i) => (
                  <span key={i} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">
                    {kpi}
                  </span>
                ))}
              </div>
            </AnimatedCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="lava" size="lg" asChild>
            <Link to="/case-studies">
              {t.caseStudies.viewAll}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Vesuvio ha trasformato completamente il nostro processo di acquisizione clienti. In 3 mesi abbiamo triplicato i lead qualificati.",
      author: "[Nome Cliente]",
      role: "[CEO, Azienda Tech]",
      rating: 5,
    },
    {
      quote: "Professionalità e risultati concreti. Il team di Vesuvio ha superato ogni nostra aspettativa con un sistema di automazione impeccabile.",
      author: "[Nome Cliente]",
      role: "[Marketing Director, E-commerce]",
      rating: 5,
    },
    {
      quote: "Finalmente un'agenzia che parla di numeri reali. ROI misurabile dal giorno uno. Consigliatissimi.",
      author: "[Nome Cliente]",
      role: "[Founder, Startup]",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-charcoal-light">
      <div className="container-custom">
        <SectionHeading title={t.testimonials.title} />

        <div className="max-w-3xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-foreground mb-8 italic leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div>
              <p className="font-semibold text-foreground">{testimonials[currentIndex].author}</p>
              <p className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</p>
            </div>
          </motion.div>

          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Tech Stack Section
const TechStackSection = () => {
  const { t } = useLanguage();

  const techs = [
    'HighLevel',
    'Meta Ads',
    'Google Ads',
    'Stripe',
    'Twilio',
    'Zapier',
    'Make',
  ];

  return (
    <section className="py-16 border-y border-border">
      <div className="container-custom">
        <p className="text-center text-muted-foreground text-sm mb-8">{t.techStack.title}</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {techs.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="text-foreground/50 hover:text-foreground transition-colors font-semibold text-lg"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Final CTA Section
const FinalCtaSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Lava glow background */}
      <div className="absolute inset-0 bg-gradient-radial-lava opacity-40" />
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            {t.finalCta.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground mb-10"
          >
            {t.finalCta.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="xl" asChild className="animate-glow-pulse">
              <Link to="/contact">
                {t.cta.bookCall}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="dark" size="xl" asChild>
              <Link to="/contact">{t.cta.freeAudit}</Link>
            </Button>
          </motion.div>

          {/* Booking embed placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 p-8 rounded-2xl border border-dashed border-border bg-muted/20"
          >
            <p className="text-muted-foreground text-sm">
              [Placeholder: Embed Calendario Prenotazioni - HighLevel / Calendly]
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <WhyVesuvioSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <TechStackSection />
      <FinalCtaSection />
    </Layout>
  );
};

export default Index;
