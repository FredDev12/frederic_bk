<template>
  <section class="section container-page">
    <SectionTitle title="Projets & Études de cas" subtitle="Filtre par compétences" />

    <!-- Pills -->
    <SkillPills v-model="selected" :skills="allSkills" class="mb-6" />

    <!-- Grille filtrée -->
    <div class="grid md:grid-cols-2 gap-5">
      <ProjectCard
        v-for="(p, i) in filtered"
        :key="p.title"
        :project="p"
        class="reveal"
        :class="delayClass(i)"
        v-reveal
      />
    </div>

    <!-- Vide -->
    <p v-if="!filtered.length" class="mt-6 text-center text-[rgb(var(--color-muted))]">
      Aucun projet pour ces compétences pour le moment.
    </p>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import SectionTitle from '@/components/SectionTitle.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import SkillPills from '@/components/SkillPills.vue'
import reveal from '@/directives/reveal'

defineOptions({ directives: { reveal } })

// Source unique des projets
const allProjects = [
  { title:'EduLink (MVP)', year:'2025', summary:'Gestion scolaire', tags:['Vue','Tailwind','Node','PDF'], repo:'#', demo:'#', caseStudy:'/projects#edulink' },
  { title:'Wadoria Website', year:'2025', summary:'Landing moderne', tags:['Vue','Tailwind','SEO'], repo:'#', demo:'#', caseStudy:'/projects#wadoria' },
  { title:'Gestion de rondes', year:'2025', summary:'Apps agents + dashboard', tags:['Flutter','Vue','Node','Maps'], repo:'#', demo:'#', caseStudy:'/projects#rondes' },
  { title:'Simulateur électrique', year:'2024', summary:'Conso & devis', tags:['Vue','Tailwind','Email','PDF'], repo:'#', demo:'#', caseStudy:'/projects#simulateur' },
]

// Skills dérivées
const allSkills = Array.from(new Set(allProjects.flatMap(p => p.tags))).sort()

// Sélection (pills)
const selected = ref([])

// Filtrage
const filtered = computed(() => {
  if (!selected.value.length) return allProjects
  const set = new Set(selected.value)
  return allProjects.filter(p => p.tags.some(t => set.has(t)))
})

// petit helper pour un léger stagger des reveals
function delayClass(i) {
  const idx = (i % 4) + 1 // 1..4
  return `reveal-delay-${idx}`
}
</script>
