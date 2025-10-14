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
"id": 1,
"title": "Web Application for Presence Management",
"summary": "Developed a full-stack web application for managing employee presence, including attendance tracking, JSON imports, statistics dashboards, and secure authentication ",
"images": [
"/Gestiondutemps/Capture d'écran 0.png",
"/Gestiondutemps/Capture d'écran 1.png",
"/Gestiondutemps/Capture d'écran 2.png",
"/Gestiondutemps/Capture d'écran 3.png",
"/Gestiondutemps/Capture d'écran 4.png"
],
"tags": [
"React",
"Node.js",
"SQL",
"JWT Authentication",
"API Development",
"Performance Optimization",
"Automated Testing"
],
"details": {
"challenge": "The team needed a centralized system to track daily employee presence, handle imports from external sources, generate real-time statistics, and ensure secure, responsive access across devices without performance bottlenecks.",
"solution": "Built a responsive React frontend with state management and advanced filters, integrated with a Node.js backend featuring RESTful APIs for presence data, JSON imports, and stats. Utilized SQL database with optimized indexes, JWT for authentication, caching for performance, and automated scripts for backups and logs.",
"impact": [
"Streamlined presence tracking, reducing manual errors and enabling quick imports while preventing duplicates.",
"Improved team efficiency with mobile-responsive design and dashboards showing attendance stats, leading to better resource management and data-driven decisions."
]
}
}
];
