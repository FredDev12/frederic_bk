<template>
<section class="section">
<SectionTitle title="Projets & Études de cas" subtitle="Détails et technologies" />
<div class="grid md:grid-cols-2 gap-5">
<ProjectCard :project="projects[0]" />
<ProjectCard :project="projects[1]" />
<ProjectCard :project="projects[2]" />
<ProjectCard :project="projects[3]" />
</div>
</section>
</template>
<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import ProjectCard from '@/components/ProjectCard.vue'


const projects = [
{ title:'EduLink (MVP)', year:'2025', summary:'Gestion scolaire complète', tags:['Vue','Tailwind','Node','PDF'], repo:'#', demo:'#' },
{ title:'Wadoria Website', year:'2025', summary:'Landing moderne', tags:['Vue','Tailwind','SEO'], repo:'#', demo:'#' },
{ title:'Gestion de rondes', year:'2025', summary:'Apps agents + dashboard', tags:['Flutter','Vue','Node','Maps'], repo:'#', demo:'#' },
{ title:'Simulateur électrique', year:'2024', summary:'Calcule conso & devis', tags:['Vue','Tailwind','Email','PDF'], repo:'#', demo:'#' },
]
</script>