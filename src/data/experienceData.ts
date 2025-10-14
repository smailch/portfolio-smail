export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

export const jobs: Job[] = [
  {
    title: "Full Stack Developer",
    company: "Avaxia Group · Stage",
    dates: "juil. 2025 - août 2025 · 2 mois · Tunisie · Hybride",
    description: [
      "Développement full-stack et Développement web.",
      "Travail sur des fonctionnalités front-end et intégration back-end.",
      "Collaboration en équipe en mode hybride."
    ]
  },
  {
    title: "Stagiaire",
    company: "Qorash Information Technology · Stage",
    dates: "juil. 2023 - août 2023 · 2 mois · Tunisie · Sur site",
    description: [
      "Participation à des projets internes et maintenance d'applications.",
      "Acquisition d'expérience pratique en développement web.",
      "Travail réalisé sur site en équipe."
    ]
  }
];