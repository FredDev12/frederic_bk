// src/data/projects.js
export const projects = [
  {
    title: 'EduLink (MVP)',
    year: '2025',
    summary: 'Gestion scolaire : rôles, bulletins PDF, filières, inscriptions.',
    tags: ['Vue', 'Tailwind', 'Node', 'PDF'],
    repo: '#',
    demo: '#',
    caseStudy: '/projects#edulink',
    image: '/images/edulink.webp'
  },
  {
    title: 'Rondes connectées',
    year: '2025',
    summary: 'App agent (Flutter), backend Node, dashboard Vue, alertes GPS.',
    tags: ['Flutter', 'Vue', 'Node', 'Maps'],
    repo: '#',
    demo: 'https://wadoria.com/',
    caseStudy: '/projects#rondes',
    image: '/images/rondes.webp'
  },
  {
    title: 'Wadoria Website',
    year: '2025',
    summary: 'Landing moderne avec SEO, analytics et formulaires.',
    tags: ['Vue', 'Tailwind', 'SEO'],
    repo: '#',
    demo: 'https://wadoria.com/',
    caseStudy: '/projects#wadoria',
    image: '/images/wadoria.webp'
  },
  {
    title: 'Simulateur électrique',
    year: '2024',
    summary: 'Calculs conso, devis, export PDF, email automatique.',
    tags: ['Vue', 'Tailwind', 'Email', 'PDF'],
    repo: '#',
    demo: '#',
    caseStudy: '/projects#simulateur',
    image: '/images/simulateur.webp'
  },
  {
    title: 'Dashboard IoT — Microgrid',
    year: '2024',
    summary: 'Monitoring énergie (ESP32), API Flask, charts temps réel.',
    tags: ['Flask', 'Charts', 'IoT', 'API'],
    repo: '#',
    demo: '#',
    caseStudy: '/projects#microgrid',
    image: '/images/microgrid.webp'
  },
  {
    title: 'Inventaire & QR Codes',
    year: '2024',
    summary: 'Gestion de stock, génération QR, scan mobile.',
    tags: ['Vue', 'Node', 'Database'],
    repo: '#',
    demo: '#',
    caseStudy: '/projects#inventory',
    image: '/images/inventory.webp'
  },
  {
    title: 'Docs & Génération PDF',
    year: '2023',
    summary: 'Modèles, branding, pipeline PDF côté serveur.',
    tags: ['Node', 'PDF', 'Branding'],
    repo: '#',
    demo: '#',
    caseStudy: '/projects#pdf-pipeline',
    image: '/images/pdf.webp'
  },
  {
    title: 'Starter SaaS Vue',
    year: '2023',
    summary: 'Template SaaS : auth, rôles, CRUD, tables, charts.',
    tags: ['Vue', 'Tailwind', 'Auth'],
    repo: '#',
    demo: '#',
    caseStudy: '/projects#saas-starter',
    image: '/images/saas.webp'
  }
]

// Utilitaire : toutes les skills triées
export const allSkills = Array.from(
  new Set(projects.flatMap(p => p.tags))
).sort()
