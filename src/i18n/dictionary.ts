import type { Locale } from "./types";

/**
 * Все пользовательские строки интерфейса / All UI copy for one locale.
 */
export type Dictionary = {
  nav: {
    brand: string;
    home: string;
    about: string;
    skills: string;
    projects: string;
    showcase: string;
    contact: string;
  };
  languageSwitcher: {
    ariaLabel: string;
    az: string;
    ru: string;
    en: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    bio: string;
    ctaContact: string;
    ctaCv: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
  };
  skills: { title: string };
  projects: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      href: string;
      tags: string[];
      previewSrc?: string;
    }>;
  };
  showcase: {
    eyebrow: string;
    title: string;
    subtitle: string;
    developerTitle: string;
    developerDescription: string;
    instructorTitle: string;
    instructorDescription: string;
    instagram: string;
    videoSection: string;
    videoTitles: [string, string];
    developerTip: string;
    developerAlts: [string, string, string, string, string];
    instructorAlts: [string, string, string];
  };
  contact: {
    title: string;
    subtitle: string;
    /** Имя в копирайте / Name shown in copyright line */
    footerName: string;
  };
};

const ru: Dictionary = {
  nav: {
    brand: "Portfolio",
    home: "Главная",
    about: "О себе",
    skills: "Навыки",
    projects: "Проекты",
    showcase: "Галерея",
    contact: "Контакты",
  },
  languageSwitcher: {
    ariaLabel: "Язык интерфейса",
    az: "AZ",
    ru: "RU",
    en: "EN",
  },
  hero: {
    greeting: "Привет, я",
    name: "Fidan",
    role: "Frontend Developer · TypeScript · React · Next.js",
    bio: "Работаю фронтенд-разработчиком: интерфейсы на React и Next.js, анимации и доступность. Параллельно преподаю программирование и делюсь опытом с учениками.",
    ctaContact: "Связаться",
    ctaCv: "Скачать резюме",
  },
  about: {
    title: "О себе",
    p1: "Я фронтенд-разработчик с фокусом на современный стек: TypeScript, React и Next.js. Люблю продумывать интерфейсы от идеи до реализации, превращая требования в понятные и удобные пользовательские сценарии. Отдельное внимание уделяю плавным анимациям и микровзаимодействиям, которые делают продукт живым и приятным в использовании.",
    p2: "В работе опираюсь на доступность, семантическую верстку и производительность, чтобы интерфейсы оставались не только красивыми, но и быстрыми, устойчивыми и удобными для всех пользователей. Ценю чистую архитектуру, компонентный подход и аккуратную работу с деталями на каждом этапе разработки. Открыта к новым проектам и коллаборациям.",
    p3: "Параллельно работаю инструктором по программированию: веду занятия, помогаю ученикам разбираться в коде, инструментах разработки и принципах инженерного мышления, а также поддерживаю их в построении уверенной практики и развитии в профессии.",
  },
  skills: { title: "Навыки" },
  projects: {
    title: "Проекты",
    items: [
      {
        title: "Munchigo",
        description:
          "Сайт бренда здорового перекуса: каталог, презентация продукции и удобная навигация для пользователей.",
        href: "https://munchigo.az/",
        tags: ["Next.js", "React", "Tailwind"],
      },
      {
        title: "GlassTech",
        description:
          "Корпоративный сайт производителя декоративного стекла и стеклянных систем: каталог, проекты и контакты.",
        href: "https://glasstech.az/",
        tags: ["React", "TypeScript", "UI"],
      },
      {
        title: "GitHub User Search",
        description: "Приложение для поиска профилей пользователей в GitHub.",
        href: "https://github-user-search-kxd5.vercel.app/",
        tags: ["Next.js", "TypeScript", "Tailwind"],
      },
      {
        title: "Название проекта 2",
        description: "Ещё один проект с описанием и ссылкой на код или демо.",
        href: "https://new-domain-wrest.vercel.app/",
        tags: ["React", "Framer Motion"],
      },
    ],
  },
  showcase: {
    eyebrow: "Две специальности",
    title: "В фокусе",
    subtitle:
      "Сначала разработка и продукт — затем преподавание. Замените ссылки ниже на свои материалы.",
    developerTitle: "Фронтенд-разработчик",
    developerDescription:
      "На хакатонах, ивентах и соревнованиях я чувствую сильный драйв, ответственность и рост: здесь я учусь работать в команде, быстро принимать решения под дедлайном и превращать идеи в реальный результат.",
    instructorTitle: "Инструктор по программированию",
    instructorDescription:
      "Я работаю инструктором по программированию и преподаю почти 4 года. Здесь короткие видео и фото с моих занятий со школьниками и студентами.",
    instagram: "Instagram",
    videoSection: "Видео",
    videoTitles: ["Видео 1", "Видео 2"],
    developerTip:
      "Подсказка: замените константы вверху файла MediaShowcase.tsx на свои ссылки.",
    developerAlts: ["Хакатон 1", "Хакатон 2", "Хакатон 3", "Хакатон 4", "Хакатон 5"],
    instructorAlts: ["Занятие 1", "Занятие 2", "Занятие 3"],
  },
  contact: {
    title: "Связаться",
    subtitle: "Напишите мне — с радостью отвечу.",
    footerName: "Fidan",
  },
};

const en: Dictionary = {
  nav: {
    brand: "Portfolio",
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    showcase: "Gallery",
    contact: "Contact",
  },
  languageSwitcher: {
    ariaLabel: "Interface language",
    az: "AZ",
    ru: "RU",
    en: "EN",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Fidan",
    role: "Frontend Developer · TypeScript · React · Next.js",
    bio: "I work as a frontend developer: interfaces with React and Next.js, motion and accessibility. I also teach programming and share experience with students.",
    ctaContact: "Get in touch",
    ctaCv: "Download CV",
  },
  about: {
    title: "About",
    p1: "I'm a frontend developer focused on a modern stack: TypeScript, React, and Next.js. I enjoy shaping interfaces from idea to implementation, turning requirements into clear and intuitive user flows. I pay special attention to smooth animations and micro-interactions that make a product feel alive and enjoyable to use.",
    p2: "In my work, I rely on accessibility, semantic markup, and performance so interfaces are not only visually strong, but also fast, resilient, and usable for everyone. I value clean architecture, a component-driven approach, and careful attention to detail at every stage of development. I'm open to new projects and collaborations.",
    p3: "In parallel, I work as a programming instructor: I run classes, help students navigate code, development tools, and engineering thinking, and support them in building confident hands-on practice and professional growth.",
  },
  skills: { title: "Skills" },
  projects: {
    title: "Projects",
    items: [
      {
        title: "Munchigo",
        description:
          "Website for a healthy snacks brand: product presentation, catalog-style layout, and clear user navigation.",
        href: "https://munchigo.az/",
        tags: ["Next.js", "React", "Tailwind"],
      },
      {
        title: "GlassTech",
        description:
          "Corporate site for decorative glass and glass systems: products, projects showcase, and contact flows.",
        href: "https://glasstech.az/",
        tags: ["React", "TypeScript", "UI"],
      },
      {
        title: "GitHub User Search",
        description: "An app for searching GitHub user profiles.",
        href: "https://github-user-search-kxd5.vercel.app/",
        tags: ["Next.js", "TypeScript", "Tailwind"],
      },
      {
        title: "Project title 2",
        description: "Another project with a description and link to code or demo.",
        href: "https://new-domain-wrest.vercel.app/",
        tags: ["React", "Framer Motion"],
      },
    ],
  },
  showcase: {
    eyebrow: "Two paths",
    title: "In focus",
    subtitle:
      "Engineering and product first — then teaching. Replace the links below with your own assets.",
    developerTitle: "Frontend Developer",
    developerDescription:
      "At hackathons, events, and competitions, I feel energy, responsibility, and growth: these experiences teach me teamwork, fast decision-making under deadlines, and turning ideas into real outcomes.",
    instructorTitle: "Programming instructor",
    instructorDescription:
      "I work as a programming instructor and have been teaching students for almost 4 years. Here are short videos and photos from my classes with school and university students.",
    instagram: "Instagram",
    videoSection: "Video",
    videoTitles: ["Video 1", "Video 2"],
    developerTip: "Tip: replace the constants at the top of MediaShowcase.tsx with your links.",
    developerAlts: ["Hackathon 1", "Hackathon 2", "Hackathon 3", "Hackathon 4", "Hackathon 5"],
    instructorAlts: ["Class 1", "Class 2", "Class 3"],
  },
  contact: {
    title: "Contact",
    subtitle: "Message me — I'll be happy to reply.",
    footerName: "Fidan",
  },
};

const az: Dictionary = {
  nav: {
    brand: "Portfolio",
    home: "Ana səhifə",
    about: "Haqqımda",
    skills: "Bacarıqlar",
    projects: "Layihələr",
    showcase: "Qalereya",
    contact: "Əlaqə",
  },
  languageSwitcher: {
    ariaLabel: "İnterfeys dili",
    az: "AZ",
    ru: "RU",
    en: "EN",
  },
  hero: {
    greeting: "Salam, mən",
    name: "Fidan",
    role: "Frontend Developer · TypeScript · React · Next.js",
    bio: "Frontend developer kimi işləyirəm: React və Next.js ilə interfeyslər, animasiya və əlçatanlıq. Eyni zamanda proqramlaşdırma tədris edir və tələbələrlə təcrübəmi bölüşürəm.",
    ctaContact: "Əlaqə",
    ctaCv: "CV yüklə",
  },
  about: {
    title: "Haqqımda",
    p1: "Mən TypeScript, React və Next.js üzərində fokuslanan frontend developerəm. Tələbləri aydın və rahat istifadəçi ssenarilərinə çevirərək interfeysləri ideyadan realizasiyaya qədər düşünməyi sevirəm. Məhsulu daha canlı və istifadədə daha xoş edən axıcı animasiyalara və mikro-interaksiyalara xüsusi diqqət yetirirəm.",
    p2: "İşimdə əlçatanlıq, semantik markup və performansa əsaslanıram ki, interfeyslər yalnız vizual olaraq güclü deyil, həm də sürətli, dayanıqlı və hər kəs üçün rahat olsun. Təmiz arxitekturanı, komponent yanaşmasını və inkişafın hər mərhələsində detallara diqqətli yanaşmanı önəmli hesab edirəm. Yeni layihələrə və əməkdaşlıqlara açığam.",
    p3: "Paralel olaraq proqramlaşdırma instructoru kimi çalışıram: dərslər keçir, tələbələrə kodu, development alətlərini və mühəndislik düşüncəsini anlamaqda kömək edir, həmçinin onların özünəinamlı praktika formalaşdırmasına və peşəkar inkişafına dəstək oluram.",
  },
  skills: { title: "Bacarıqlar" },
  projects: {
    title: "Layihələr",
    items: [
      {
        title: "Munchigo",
        description:
          "Sağlam atışdırmalıq brendi üçün veb-sayt: məhsul təqdimatı və istifadəçi üçün rahat naviqasiya.",
        href: "https://munchigo.az/",
        tags: ["Next.js", "React", "Tailwind"],
      },
      {
        title: "GlassTech",
        description:
          "Dekorativ şüşə və şüşə sistemləri istehsalçısı üçün korporativ sayt: məhsullar, layihələr və əlaqə.",
        href: "https://glasstech.az/",
        tags: ["React", "TypeScript", "UI"],
      },
      {
        title: "GitHub User Search",
        description: "GitHub istifadəçi profillərini axtarmaq üçün tətbiq.",
        href: "https://github-user-search-kxd5.vercel.app/",
        tags: ["Next.js", "TypeScript", "Tailwind"],
      },
      {
        title: "Layihə adı 2",
        description: "Kod və ya demo linki olan başqa bir layihə.",
        href: "https://new-domain-wrest.vercel.app/",
        tags: ["React", "Framer Motion"],
      },
    ],
  },
  showcase: {
    eyebrow: "İki istiqamət",
    title: "Fokusda",
    subtitle:
      "Əvvəlcə mühəndislik və məhsul — sonra tədris. Aşağıdakı linkləri öz materiallarınızla əvəz edin.",
    developerTitle: "Frontend Developer",
    developerDescription:
      "Hakatonlarda, tədbirlərdə və yarışlarda mən güclü motivasiya, məsuliyyət və inkişaf hiss edirəm: bu mühit mənə komanda işi, deadline altında sürətli qərarvermə və ideyanı real nəticəyə çevirməyi öyrədir.",
    instructorTitle: "Proqramlaşdırma instructoru",
    instructorDescription:
      "Mən proqramlaşdırma instructoru kimi işləyirəm və təxminən 4 ildir dərs keçirəm. Burada məktəblilər və tələbələrlə keçdiyim dərslərdən qısa videolar və fotolar var.",
    instagram: "Instagram",
    videoSection: "Video",
    videoTitles: ["Video 1", "Video 2"],
    developerTip: "",
    developerAlts: ["Hakaton 1", "Hakaton 2", "Hakaton 3", "Hakaton 4", "Hakaton 5"],
    instructorAlts: ["Dərs 1", "Dərs 2", "Dərs 3"],
  },
  contact: {
    title: "Əlaqə",
    subtitle: "Mənə yazın — məmnuniyyətlə cavab verəcəyəm.",
    footerName: "Fidan",
  },
};

/**
 * Словари по локали / Per-locale dictionaries.
 */
export const dictionaries: Record<Locale, Dictionary> = {
  ru,
  en,
  az,
};
