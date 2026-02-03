import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/shared/SectionHeading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from '@/hooks/use-toast';

const CALENDLY_URL = 'https://calendly.com/noxcv1408/30min';

const faqData = {
  it: [
    {
      question: 'Quanto costa una consulenza iniziale?',
      answer: 'La prima call strategica di 30 minuti è completamente gratuita. Analizziamo insieme le tue esigenze e valutiamo come possiamo aiutarti.',
    },
    {
      question: 'Qual è il budget minimo per iniziare?',
      answer: 'I nostri progetti partono da €2.000/mese per servizi gestiti. Per progetti una tantum, il minimo è €3.000. Tutto dipende dalle tue esigenze specifiche.',
    },
    {
      question: 'Quanto tempo richiede un progetto tipico?',
      answer: 'Un setup completo di automazione richiede 4-8 settimane. Campagne ads possono partire in 7-14 giorni. Durante la call ti daremo una timeline precisa.',
    },
    {
      question: 'Lavorate solo con aziende di Napoli?',
      answer: 'No, lavoriamo con clienti in tutta Italia e in Europa. Il 70% del nostro lavoro è da remoto, con call regolari e report dettagliati.',
    },
    {
      question: 'Cosa include l\'audit gratuito?',
      answer: 'Analizziamo il tuo attuale stack marketing, identifichiamo le opportunità di automazione e forniamo un piano d\'azione con priorità chiare e ROI stimato.',
    },
  ],
  en: [
    {
      question: 'How much does an initial consultation cost?',
      answer: 'The first 30-minute strategy call is completely free. We analyze your needs together and assess how we can help.',
    },
    {
      question: 'What is the minimum budget to start?',
      answer: 'Our projects start from €2,000/month for managed services. For one-time projects, the minimum is €3,000. Everything depends on your specific needs.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'A complete automation setup requires 4-8 weeks. Ad campaigns can start in 7-14 days. During the call we\'ll give you a precise timeline.',
    },
    {
      question: 'Do you only work with Naples-based companies?',
      answer: 'No, we work with clients across Italy and Europe. 70% of our work is remote, with regular calls and detailed reports.',
    },
    {
      question: 'What does the free audit include?',
      answer: 'We analyze your current marketing stack, identify automation opportunities, and provide an action plan with clear priorities and estimated ROI.',
    },
  ],
  ru: [
    {
      question: 'Сколько стоит первичная консультация?',
      answer: 'Первый 30-минутный стратегический звонок полностью бесплатный. Мы вместе анализируем ваши потребности и оцениваем, как можем помочь.',
    },
    {
      question: 'Какой минимальный бюджет для старта?',
      answer: 'Наши проекты начинаются от €2,000/месяц за управляемые услуги. Для разовых проектов минимум €3,000. Всё зависит от ваших конкретных потребностей.',
    },
    {
      question: 'Сколько времени занимает типичный проект?',
      answer: 'Полная настройка автоматизации требует 4-8 недель. Рекламные кампании могут стартовать за 7-14 дней. На звонке дадим точный таймлайн.',
    },
    {
      question: 'Вы работаете только с компаниями из Неаполя?',
      answer: 'Нет, мы работаем с клиентами по всей Италии и Европе. 70% нашей работы удаленно, с регулярными звонками и детальными отчетами.',
    },
    {
      question: 'Что включает бесплатный аудит?',
      answer: 'Мы анализируем ваш текущий маркетинговый стек, определяем возможности автоматизации и предоставляем план действий с приоритетами и оценкой ROI.',
    },
  ],
};

const Contact = () => {
  const { language, t } = useLanguage();
  const faqs = faqData[language];
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [auditFormData, setAuditFormData] = useState({
    name: '',
    email: '',
    website: '',
    goals: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAuditSubmitting, setIsAuditSubmitting] = useState(false);

  // Handle hash scroll
  useEffect(() => {
    if (window.location.hash === '#audit') {
      setTimeout(() => {
        const element = document.getElementById('audit');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link
    const subject = encodeURIComponent(`Richiesta da ${formData.name} - ${formData.company || 'Sito web'}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\nAzienda: ${formData.company || 'N/A'}\n\nMessaggio:\n${formData.message}`
    );
    window.location.href = `mailto:info@vesuviodigital.com?subject=${subject}&body=${body}`;
    
    toast({
      title: language === 'it' ? 'Email pronta!' : language === 'en' ? 'Email ready!' : 'Email готов!',
      description: language === 'it' 
        ? 'Si aprirà il tuo client email per inviare il messaggio.' 
        : language === 'en' 
        ? 'Your email client will open to send the message.' 
        : 'Откроется ваш почтовый клиент для отправки сообщения.',
    });
    
    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  const handleAuditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuditSubmitting(true);
    
    // Create mailto link for audit
    const subject = encodeURIComponent(`Richiesta Audit Gratuito - ${auditFormData.name}`);
    const body = encodeURIComponent(
      `Nome: ${auditFormData.name}\nEmail: ${auditFormData.email}\nSito Web: ${auditFormData.website || 'N/A'}\n\nObiettivi:\n${auditFormData.goals}`
    );
    window.location.href = `mailto:info@vesuviodigital.com?subject=${subject}&body=${body}`;
    
    toast({
      title: language === 'it' ? 'Richiesta audit pronta!' : language === 'en' ? 'Audit request ready!' : 'Запрос аудита готов!',
      description: language === 'it' 
        ? 'Si aprirà il tuo client email per inviare la richiesta.' 
        : language === 'en' 
        ? 'Your email client will open to send the request.' 
        : 'Откроется ваш почтовый клиент для отправки запроса.',
    });
    
    setAuditFormData({ name: '', email: '', website: '', goals: '' });
    setIsAuditSubmitting(false);
  };

  const contactInfo = [
    { icon: Mail, label: t.contact.info.email, value: 'info@vesuviodigital.com', href: 'mailto:info@vesuviodigital.com' },
    { icon: MapPin, label: t.contact.info.address, value: 'Napoli, Italia', href: null },
    { icon: Clock, label: t.contact.info.hours, value: language === 'it' ? 'Lun-Ven: 9:00 - 18:00' : language === 'en' ? 'Mon-Fri: 9:00 AM - 6:00 PM' : 'Пн-Пт: 9:00 - 18:00', href: null },
  ];

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
              {t.contact.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              {t.contact.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.form.name} *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-muted border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.form.email} *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-muted border-border"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.company}
                  </label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-muted border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.message} *
                  </label>
                  <Textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-muted border-border resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '...' : t.contact.form.submit}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Info + Booking */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Info */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  {t.footer.contact}
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-foreground hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking CTA */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  {t.cta.bookCall}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {language === 'it' 
                    ? '30 minuti di strategia gratuita. Scegli uno slot disponibile.'
                    : language === 'en'
                    ? '30 minutes of free strategy. Choose an available slot.'
                    : '30 минут бесплатной стратегии. Выберите доступный слот.'}
                </p>
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                    {t.cta.bookCall}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Audit Form Section */}
      <section id="audit" className="section-padding bg-charcoal-light">
        <div className="container-custom">
          <SectionHeading title={t.audit.title} subtitle={t.audit.subtitle} />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
              <form onSubmit={handleAuditSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.form.name} *
                    </label>
                    <Input
                      required
                      value={auditFormData.name}
                      onChange={(e) => setAuditFormData({ ...auditFormData, name: e.target.value })}
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.form.email} *
                    </label>
                    <Input
                      type="email"
                      required
                      value={auditFormData.email}
                      onChange={(e) => setAuditFormData({ ...auditFormData, email: e.target.value })}
                      className="bg-background border-border"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {language === 'it' ? 'Sito Web' : language === 'en' ? 'Website' : 'Сайт'}
                  </label>
                  <Input
                    type="url"
                    placeholder="https://"
                    value={auditFormData.website}
                    onChange={(e) => setAuditFormData({ ...auditFormData, website: e.target.value })}
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {language === 'it' ? 'Obiettivi principali' : language === 'en' ? 'Main goals' : 'Основные цели'} *
                  </label>
                  <Textarea
                    required
                    rows={4}
                    placeholder={language === 'it' 
                      ? 'Descrivi brevemente cosa vorresti ottenere...'
                      : language === 'en'
                      ? 'Briefly describe what you would like to achieve...'
                      : 'Кратко опишите, чего вы хотели бы достичь...'}
                    value={auditFormData.goals}
                    onChange={(e) => setAuditFormData({ ...auditFormData, goals: e.target.value })}
                    className="bg-background border-border resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="lava" 
                  size="lg" 
                  className="w-full"
                  disabled={isAuditSubmitting}
                >
                  {isAuditSubmitting ? '...' : t.cta.freeAudit}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
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
    </Layout>
  );
};

export default Contact;
