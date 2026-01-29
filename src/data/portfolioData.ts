export interface Project {
  id: number;
  title: string;
  summary: string;
  images: string[];
  tags: string[];
  details: {
    challenge: string;
    solution: string;
    impact: string[];
  };
  externalLink?: {
    title: string;
    url: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Web Application for Presence Management",
    summary:
      "Developed a full-stack web application for managing employee presence, including attendance tracking, JSON imports, statistics dashboards, and secure authentication.",
    images: [
      "/Gestiondutemps/Capture d'écran 0.png",
      "/Gestiondutemps/Capture d'écran 1.png",
      "/Gestiondutemps/Capture d'écran 2.png",
      "/Gestiondutemps/Capture d'écran 3.png",
      "/Gestiondutemps/Capture d'écran 4.png"
    ],
    tags: [
      "React",
      "Node.js",
      "SQL",
      "JWT Authentication",
      "API Development",
      "Performance Optimization",
      "Automated Testing"
    ],
    details: {
      challenge:
        "The team needed a centralized system to track daily employee presence, handle imports from external sources, generate real-time statistics, and ensure secure, responsive access across devices without performance bottlenecks.",
      solution:
        "Built a responsive React frontend with state management and advanced filters, integrated with a Node.js backend featuring RESTful APIs for presence data, JSON imports, and stats. Utilized SQL database with optimized indexes, JWT for authentication, caching for performance, and automated scripts for backups and logs.",
      impact: [
        "Streamlined presence tracking, reducing manual errors and enabling quick imports while preventing duplicates.",
        "Improved team efficiency with mobile-responsive design and dashboards showing attendance stats, leading to better resource management and data-driven decisions."
      ]
    }
  },
  ,
  {
  id: 2,
  title: "CyberLink Guardian – AI-Powered URL Security Checker",
  summary:
    "Application moderne de cybersécurité permettant d’analyser des URLs en temps réel pour détecter les risques (malicieux, phishing, etc.) via l'intelligence artificielle et l'agrégation de plusieurs bases de threat intelligence.",
  images: [
    "/CyberLinkGuardian/Capture d’écran 2026-02.png",
    "/CyberLinkGuardian/Capture d’écran 2026-03.png",
    "/CyberLinkGuardian/Capture d’écran 2026-04.png",
    "/CyberLinkGuardian/Capture d’écran 2026-05.png",
    "/CyberLinkGuardian/Capture d’écran 2026-06.png",
    "/CyberLinkGuardian/Capture d’écran 2026-00.png",
  ],
  tags: [
    "Python",
    "FastAPI",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "AI",
    "Threat Intelligence",
    "WCAG Accessibility"
  ],
  details: {
    challenge:
      "Fournir une solution rapide et accessible pour détecter et expliquer les menaces potentielles liées à toute URL, tout en combinant la puissance de l’IA, l'analyse heuristique et l’agrégation de plusieurs sources de threat intelligence dans une interface moderne conforme aux normes d’accessibilité (WCAG).",
    solution:
      "Développement d’un backend Python/FastAPI connecté à VirusTotal, OTX et Google Safe Browsing, avec scoring heuristique, justification décisionnelle et API REST. Création d’un frontend React/Next.js accessible, responsive et explicatif, affichant les scores, analyses détaillées et intégrant badge dynamique Safe/Suspect/Malicious.",
    impact: [
      "Analyse multi-source de liens en temps réel, avec score explicite et argumenté.",
      "Renforce la sécurité utilisateurs et leur capacité à différencier vrai/ faux positifs grâce à la transparence des raisons.",
      "Design UI accessible (WCAG), adapté aussi bien aux professionnels qu’aux étudiants, compatible desktop/mobile.",
      "Base solide pour extensions futures : nouvelles sources, interface multi-langues, analyse historique, etc."
    ]
  },
  externalLink: {
    title: "Voir le projet sur GitHub",
    url: "https://github.com/smailch/cyberlink-guardian"
  }
},
  {
    id: 3,
    title: "Esprit Clubs – Plateforme de gestion associative académique",
    summary:
      "Projet académique réalisé dans le cadre du module Intégration Web et UX-Design, encadré par IMEN EL HAKIM à ESPRIT. Esprit Clubs est une plateforme web interactive et moderne dédiée à la gestion et à la communication des clubs étudiants d'ESPRIT, offrant une expérience utilisateur fluide et intuitive pour toute la communauté estudiantine.",
    images: [
      "/EspritClub/Capture1.png",
      "/EspritClub/Capture2.png",
      "/EspritClub/Capture3.png",
      "/EspritClub/Capture4.png",
      "/EspritClub/figma1.png",
      "/EspritClub/figma2.png"
    ],
    tags: [
      "React",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "Figma",
      "UX Design",
      "Gestion associative",
      "Dashboard",
      "Communication",
      "Sondages",
      "Calendrier"
    ],
    details: {
      challenge:
        "Créer une plateforme centralisée pour la gestion des clubs étudiants, la communication, l'organisation d'événements et l'engagement associatif à ESPRIT, tout en offrant une interface moderne et responsive adaptée aux besoins des étudiants et des administrateurs.",
      solution:
        "Développement d'une application web full-stack avec React et Node.js, intégrant des modules pour dashboard, gestion d'événements, communication (chat et discussions), sondages, favoris, réalisations et calendrier interactif. Conception UX/UI sur Figma, gestion des notifications et statistiques en temps réel, et optimisation de l'expérience utilisateur.",
      impact: [
        "Centralisation des informations associatives, simplifiant la gestion et la communication au sein des clubs.",
        "Augmentation de l'engagement étudiant grâce à une interface intuitive et des fonctionnalités interactives.",
        "Facilitation de l'intégration des nouveaux étudiants et valorisation des réalisations associatives.",
        "Amélioration de la gestion administrative et suivi personnalisé des activités et événements."
      ]
    }
  }
];
