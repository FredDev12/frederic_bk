<template>
    <section>
        <div>
            <p class="mt-4 text-[rgb(var(--color-muted))]">
            Vue.js, Node/TypeORM, Flutter, DevOps. Je conçois des solutions pour l’éducation (EduLink),
            la sécurité (CCTV, rondes connectées) et l’énergie (MED, simulateur).
            </p>
            <div class="mt-6 flex items-center justify-center gap-3">
                <RouterLink to="/projects" class="btn-primary">Voir mes projets</RouterLink>
                <RouterLink to="/contact" class="btn-ghost">Me contacter</RouterLink>
            </div>
        </div>
    </section>


    <section class="section">
        <SectionTitle title="Ce que je fais" subtitle="Services et expertises" />
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div class="card p-6">
                <h3 class="font-semibold text-lg">Dashboards & SaaS</h3>
                <p class="mt-2 text-sm text-[rgb(var(--color-muted))]">Vue 3 + Tailwind, API Node/Flask, PDF, graphiques, auth, rôles.</p>
            </div>
            <div class="card p-6">
                <h3 class="font-semibold text-lg">Réseaux & Sécurité</h3>
                <p class="mt-2 text-sm text-[rgb(var(--color-muted))]">CCTV, rondes connectées, scripts de seed, alertes, géoloc.</p>
            </div>
            <div class="card p-6">
                <h3 class="font-semibold text-lg">DevOps & Déploiement</h3>
                <p class="mt-2 text-sm text-[rgb(var(--color-muted))]">Vite, Docker, GitHub Pages/Actions, S3, Supabase, Stripe.</p>
            </div>
        </div>
    </section>


    <section class="section">
        <SectionTitle title="Études de cas" subtitle="Sélection de travaux récents" />
        <div class="grid sm:grid-cols-2 gap-5">
            <ProjectCard :project="{
                title:'EduLink (MVP)', year:'2025',
                summary:'Gestion scolaire: rôles, bulletins PDF, filières, inscriptions.',
                tags:['Vue 3','Tailwind v4','Node/TypeORM','PDF'],
                repo:'https://github.com/USERNAME/edulink', demo:'#', caseStudy:'/projects#edulink'
            }" />
            <ProjectCard :project="{
                title:'Rondes connectées', year:'2025',
                summary:'Flutter agent, backend Node, tableau de bord Vue, alertes GPS.',
                tags:['Vue 3','Flutter','Node','Maps'],
                repo:'https://github.com/USERNAME/wadoria-rondes', demo:'#', caseStudy:'/projects#rondes'
            }" />
        </div>
    </section>


<section class="section">
<SectionTitle title="Quelques chiffres" />
<div class="grid sm:grid-cols-3 gap-5">
<StatCard value="12+" label="Projets livrés" />
<StatCard value=">99%" label="Disponibilité systèmes" />
<StatCard value="5" label="Stacks maîtrisées" />
</div>
</section>
</template>
<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import StatCard from '@/components/StatCard.vue'
</script>