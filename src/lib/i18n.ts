export type Language = 'it' | 'en' | 'ru';

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
];

export const translations = {
  it: {
    nav: {
      home: 'Home',
      services: 'Servizi',
      highlevel: 'Soluzioni HighLevel',
      caseStudies: 'Case Studies',
      about: 'Chi Siamo',
      contact: 'Contatti',
    },
    cta: {
      bookCall: 'Prenota una Call',
      freeAudit: 'Audit Gratuito',
      getStarted: 'Inizia Ora',
      learnMore: 'Scopri di Più',
      viewCases: 'Vedi i Risultati',
      contactUs: 'Contattaci',
    },
    hero: {
      title: 'Energia Vulcanica per la Tua Crescita',
      subtitle: 'Sistemi di marketing e automazione che generano lead qualificati e convertono in vendite. Risultati misurabili, zero sprechi.',
      trustedBy: 'Partner di fiducia per',
    },
    services: {
      title: 'Cosa Facciamo',
      subtitle: 'Sistemi completi per acquisire, convertire e fidelizzare clienti',
      leadGen: {
        title: 'Lead Generation',
        desc: 'Strategie multi-canale per attrarre prospect qualificati pronti ad acquistare.',
      },
      salesAuto: {
        title: 'Automazione Vendite',
        desc: 'Workflow automatici che convertono lead in clienti 24/7.',
      },
      retention: {
        title: 'Fidelizzazione & Reputazione',
        desc: 'Sistemi per massimizzare il lifetime value e raccogliere recensioni.',
      },
      websites: {
        title: 'Siti Web & Funnel',
        desc: 'Landing page e funnel ad alta conversione ottimizzati per ROI.',
      },
      analytics: {
        title: 'Analytics & Ottimizzazione',
        desc: 'Dashboard KPI e ottimizzazione continua per performance crescenti.',
      },
    },
    whyVesuvio: {
      title: 'Perché Vesuvio',
      subtitle: 'Il partner che trasforma la tua visione in risultati concreti',
      speed: {
        title: 'Velocità',
        desc: 'Go-live in settimane, non mesi. Processi rodati per risultati rapidi.',
      },
      clarity: {
        title: 'Chiarezza',
        desc: 'Report trasparenti, comunicazione diretta, zero gergo inutile.',
      },
      roi: {
        title: 'ROI Misurabile',
        desc: 'Ogni euro investito viene tracciato. Sai sempre quanto rende.',
      },
      automation: {
        title: 'Automation-First',
        desc: 'Sistemi che lavorano mentre dormi. Scalabilità senza stress.',
      },
    },
    caseStudies: {
      title: 'Risultati Reali',
      subtitle: 'Performance certificate dai numeri',
      viewAll: 'Tutti i Case Studies',
    },
    testimonials: {
      title: 'Cosa Dicono i Clienti',
    },
    techStack: {
      title: 'Powered by',
    },
    finalCta: {
      title: 'Pronto a Far Esplodere la Tua Crescita?',
      subtitle: 'Prenota una call strategica gratuita di 30 minuti. Analizziamo il tuo business e identifichiamo le opportunità.',
    },
    footer: {
      description: 'Agenzia digitale di Roma specializzata in sistemi di marketing automation e lead generation ad alte prestazioni.',
      quickLinks: 'Link Rapidi',
      contact: 'Contatti',
      legal: 'Note Legali',
      privacy: 'Privacy Policy',
      terms: 'Termini di Servizio',
      cookies: 'Cookie Policy',
      rights: 'Tutti i diritti riservati.',
    },
    contact: {
      title: 'Parliamo del Tuo Progetto',
      subtitle: 'Compila il form o prenota direttamente una call strategica',
      form: {
        name: 'Nome e Cognome',
        email: 'Email',
        phone: 'Telefono',
        company: 'Azienda',
        message: 'Come possiamo aiutarti?',
        submit: 'Invia Richiesta',
      },
      info: {
        phone: 'Telefono',
        email: 'Email',
        address: 'Indirizzo',
        hours: 'Orari',
      },
    },
    faq: {
      title: 'Domande Frequenti',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      highlevel: 'HighLevel Solutions',
      caseStudies: 'Case Studies',
      about: 'About',
      contact: 'Contact',
    },
    cta: {
      bookCall: 'Book a Call',
      freeAudit: 'Free Audit',
      getStarted: 'Get Started',
      learnMore: 'Learn More',
      viewCases: 'View Results',
      contactUs: 'Contact Us',
    },
    hero: {
      title: 'Volcanic Energy for Your Growth',
      subtitle: 'Marketing and automation systems that generate qualified leads and convert to sales. Measurable results, zero waste.',
      trustedBy: 'Trusted by',
    },
    services: {
      title: 'What We Do',
      subtitle: 'Complete systems to acquire, convert, and retain customers',
      leadGen: {
        title: 'Lead Generation',
        desc: 'Multi-channel strategies to attract qualified prospects ready to buy.',
      },
      salesAuto: {
        title: 'Sales Automation',
        desc: 'Automated workflows that convert leads to customers 24/7.',
      },
      retention: {
        title: 'Retention & Reputation',
        desc: 'Systems to maximize lifetime value and collect reviews.',
      },
      websites: {
        title: 'Websites & Funnels',
        desc: 'High-converting landing pages and funnels optimized for ROI.',
      },
      analytics: {
        title: 'Analytics & Optimization',
        desc: 'KPI dashboards and continuous optimization for growing performance.',
      },
    },
    whyVesuvio: {
      title: 'Why Vesuvio',
      subtitle: 'The partner that transforms your vision into concrete results',
      speed: {
        title: 'Speed',
        desc: 'Go-live in weeks, not months. Proven processes for rapid results.',
      },
      clarity: {
        title: 'Clarity',
        desc: 'Transparent reports, direct communication, zero jargon.',
      },
      roi: {
        title: 'Measurable ROI',
        desc: 'Every euro invested is tracked. You always know your returns.',
      },
      automation: {
        title: 'Automation-First',
        desc: 'Systems that work while you sleep. Scalability without stress.',
      },
    },
    caseStudies: {
      title: 'Real Results',
      subtitle: 'Performance certified by numbers',
      viewAll: 'All Case Studies',
    },
    testimonials: {
      title: 'What Clients Say',
    },
    techStack: {
      title: 'Powered by',
    },
    finalCta: {
      title: 'Ready to Ignite Your Growth?',
      subtitle: 'Book a free 30-minute strategy call. We analyze your business and identify opportunities.',
    },
    footer: {
      description: 'Rome-based digital agency specializing in high-performance marketing automation and lead generation systems.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookie Policy',
      rights: 'All rights reserved.',
    },
    contact: {
      title: "Let's Talk About Your Project",
      subtitle: 'Fill out the form or book a strategy call directly',
      form: {
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        company: 'Company',
        message: 'How can we help?',
        submit: 'Submit Request',
      },
      info: {
        phone: 'Phone',
        email: 'Email',
        address: 'Address',
        hours: 'Hours',
      },
    },
    faq: {
      title: 'Frequently Asked Questions',
    },
  },
  ru: {
    nav: {
      home: 'Главная',
      services: 'Услуги',
      highlevel: 'Решения HighLevel',
      caseStudies: 'Кейсы',
      about: 'О Нас',
      contact: 'Контакты',
    },
    cta: {
      bookCall: 'Записаться на Звонок',
      freeAudit: 'Бесплатный Аудит',
      getStarted: 'Начать',
      learnMore: 'Узнать Больше',
      viewCases: 'Смотреть Результаты',
      contactUs: 'Связаться',
    },
    hero: {
      title: 'Вулканическая Энергия для Вашего Роста',
      subtitle: 'Маркетинговые и автоматизированные системы, которые генерируют качественные лиды и конвертируют в продажи. Измеримые результаты, ноль потерь.',
      trustedBy: 'Нам доверяют',
    },
    services: {
      title: 'Что Мы Делаем',
      subtitle: 'Комплексные системы для привлечения, конверсии и удержания клиентов',
      leadGen: {
        title: 'Лидогенерация',
        desc: 'Мультиканальные стратегии для привлечения готовых к покупке клиентов.',
      },
      salesAuto: {
        title: 'Автоматизация Продаж',
        desc: 'Автоматические воронки, которые конвертируют лиды в клиентов 24/7.',
      },
      retention: {
        title: 'Удержание & Репутация',
        desc: 'Системы для максимизации LTV и сбора отзывов.',
      },
      websites: {
        title: 'Сайты & Воронки',
        desc: 'Высококонверсионные лендинги и воронки, оптимизированные для ROI.',
      },
      analytics: {
        title: 'Аналитика & Оптимизация',
        desc: 'Дашборды KPI и постоянная оптимизация для роста показателей.',
      },
    },
    whyVesuvio: {
      title: 'Почему Vesuvio',
      subtitle: 'Партнер, который превращает вашу идею в конкретные результаты',
      speed: {
        title: 'Скорость',
        desc: 'Запуск за недели, не месяцы. Отлаженные процессы для быстрых результатов.',
      },
      clarity: {
        title: 'Прозрачность',
        desc: 'Прозрачные отчеты, прямая коммуникация, без лишнего жаргона.',
      },
      roi: {
        title: 'Измеримый ROI',
        desc: 'Каждый вложенный евро отслеживается. Вы всегда знаете свою отдачу.',
      },
      automation: {
        title: 'Automation-First',
        desc: 'Системы, которые работают пока вы спите. Масштабирование без стресса.',
      },
    },
    caseStudies: {
      title: 'Реальные Результаты',
      subtitle: 'Эффективность, подтвержденная цифрами',
      viewAll: 'Все Кейсы',
    },
    testimonials: {
      title: 'Отзывы Клиентов',
    },
    techStack: {
      title: 'Работаем на',
    },
    finalCta: {
      title: 'Готовы Зажечь Свой Рост?',
      subtitle: 'Запишитесь на бесплатный 30-минутный стратегический звонок. Мы проанализируем ваш бизнес и определим возможности.',
    },
    footer: {
      description: 'Цифровое агентство в Риме, специализирующееся на высокопроизводительных системах автоматизации маркетинга и лидогенерации.',
      quickLinks: 'Быстрые Ссылки',
      contact: 'Контакты',
      legal: 'Правовая Информация',
      privacy: 'Политика Конфиденциальности',
      terms: 'Условия Использования',
      cookies: 'Политика Cookies',
      rights: 'Все права защищены.',
    },
    contact: {
      title: 'Обсудим Ваш Проект',
      subtitle: 'Заполните форму или запишитесь на стратегический звонок',
      form: {
        name: 'Имя и Фамилия',
        email: 'Email',
        phone: 'Телефон',
        company: 'Компания',
        message: 'Как мы можем помочь?',
        submit: 'Отправить Запрос',
      },
      info: {
        phone: 'Телефон',
        email: 'Email',
        address: 'Адрес',
        hours: 'Часы Работы',
      },
    },
    faq: {
      title: 'Часто Задаваемые Вопросы',
    },
  },
};

export const useTranslation = (lang: Language) => {
  return translations[lang];
};
