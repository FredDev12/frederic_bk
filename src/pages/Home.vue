<template>
  <!-- Présentation rapide -->
  <section class="section text-center container-page">
    <img
      v-reveal.d1
      :src="profile"
      alt="Frederic Betukumesu"
      class="mx-auto w-32 h-32 rounded-full border border-white/10 shadow-lg mb-4 object-cover reveal"
    />
    <h1 v-reveal.d2 class="section-title text-gradient reveal">Frederic Betukumesu</h1>
    <p v-reveal.d3 class="max-w-2xl mx-auto mt-2 text-[rgb(var(--color-muted))] reveal">
      Ingénieur Réseaux & Télécoms, full-stack et DevOps. Je conçois des solutions modernes, fiables
      et performantes en alliant infrastructure, automatisation et expérience utilisateur.
    </p>
    <div v-reveal.d4 class="mt-4 flex justify-center gap-3 reveal">
      <RouterLink to="/projects" class="btn-primary">Voir mes projets</RouterLink>
      <RouterLink to="/contact" class="btn-ghost">Me contacter</RouterLink>
    </div>
  </section>

  <!-- Accroche / CTA secondaire -->
  <section class="section container-page">
    <div class="card p-6 md:p-8">
      <p class="mt-1 text-[rgb(var(--color-muted))]">
        Vue.js, Node, Flutter, Tailwind & Docker. Projets pour l’éducation (EduLink), la sécurité
        (CCTV, rondes connectées) et l’énergie (MED, simulateur).
      </p>
      <div class="mt-6 flex items-center justify-center gap-3">
        <RouterLink to="/projects" class="btn-primary">Études de cas</RouterLink>
        <RouterLink to="/contact" class="btn-ghost">Discuter d’un projet</RouterLink>
      </div>
    </div>
  </section>

  <!-- Services -->
  <section class="section container-page">
    <SectionTitle title="Ce que je fais" subtitle="Services et expertises" />
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <div class="card p-6 reveal reveal-delay-1" v-reveal>
        <h3 class="font-semibold text-lg">Dashboards & SaaS</h3>
        <p class="mt-2 text-sm text-[rgb(var(--color-muted))]">
          Vue 3 + Tailwind, API Node/Flask, génération PDF, graphiques, auth & rôles.
        </p>
      </div>
      <div class="card p-6 reveal reveal-delay-2" v-reveal>
        <h3 class="font-semibold text-lg">Réseaux & Sécurité</h3>
        <p class="mt-2 text-sm text-[rgb(var(--color-muted))]">
          CCTV, rondes connectées, supervision, scripts d’automatisation, géolocalisation.
        </p>
      </div>
      <div class="card p-6 reveal reveal-delay-3" v-reveal>
        <h3 class="font-semibold text-lg">DevOps & Déploiement</h3>
        <p class="mt-2 text-sm text-[rgb(var(--color-muted))]">
          Vite, Docker, GitHub Pages/Actions, S3, intégration CI/CD, optimisation SEO.
        </p>
      </div>
    </div>
  </section>

  <!-- Études de cas -->
  <section class="section container-page">
    <SectionTitle title="Études de cas" subtitle="Sélection de travaux récents" />
    <div class="grid sm:grid-cols-2 gap-5">
      <ProjectCard :project="{
        title:'EduLink (MVP)', year:'2025',
        summary:'Gestion scolaire : rôles, bulletins PDF, filières, inscriptions.',
        tags:['Vue','Tailwind','Node','PDF'],
        repo:'#', demo:'#', caseStudy:'/projects#edulink'
      }" class="reveal reveal-delay-1" v-reveal />
      <ProjectCard :project="{
        title:'Rondes connectées', year:'2025',
        summary:'Flutter agent, backend Node, dashboard Vue, alertes GPS.',
        tags:['Vue','Flutter','Node','Maps'],
        repo:'#', demo:'https://wadoria.com/', caseStudy:'/projects#rondes'
      }" class="reveal reveal-delay-2" v-reveal />
    </div>
  </section>

  <!-- Stats -->
  <section class="section container-page">
    <SectionTitle title="Quelques chiffres" />
    <div class="grid sm:grid-cols-3 gap-5">
      <StatCard value="12+" label="Projets livrés" class="reveal reveal-delay-1" v-reveal />
      <StatCard value=">99%" label="Disponibilité systèmes" class="reveal reveal-delay-2" v-reveal />
      <StatCard value="5" label="Stacks maîtrisées" class="reveal reveal-delay-3" v-reveal />
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import StatCard from '@/components/StatCard.vue'
import reveal from '@/directives/reveal'
import profile from '@/assets/profile.png'

defineOptions({ directives: { reveal } })
</script>
