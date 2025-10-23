<template>
  <!-- Profil global -->
  <section class="section container-page">
    <div class="grid md:grid-cols-2 gap-10 items-center">
      <img
        v-reveal.d1
        :src="profile"
        alt="Frederic Betukumesu"
        class="w-64 h-64 mx-auto rounded-2xl object-cover shadow-lg border border-white/10 reveal"
      />
      <div>
        <h2 v-reveal.d2 class="section-title text-gradient mb-3 reveal">
          À propos de moi
        </h2>
        <p v-reveal.d3 class="text-[rgb(var(--color-muted))] leading-relaxed reveal">
          Je suis <strong>Frederic Betukumesu</strong>, ingénieur en
          <strong>Informatique Réseaux et Infrastructure</strong>, passionné par
          le <strong>développement web et mobile</strong> ainsi que
          l’intégration de solutions <strong>IoT</strong> et <strong>DevOps</strong>.
          Mon parcours allie expertise technique, créativité et polyvalence — du
          câblage réseau à la conception de plateformes numériques performantes.
        </p>
        <ul v-reveal.d4 class="mt-4 space-y-1 text-[rgb(var(--color-muted))] reveal">
          <li>💡 <strong>Spécialités :</strong> Réseaux, Full-stack, IoT, Énergie & Automatisation</li>
          <li>⚙️ <strong>Stacks :</strong> Vue 3, Node.js, Flask, Flutter, Tailwind, Docker</li>
          <li>🌍 <strong>Basé à :</strong> Lubumbashi (RDC)</li>
        </ul>
        <div v-reveal.d4 class="mt-6 flex gap-3 flex-wrap reveal">
          <a href="https://wa.me/243844894508" target="_blank" rel="noopener" class="btn-primary">WhatsApp</a>
          <a href="https://www.linkedin.com/in/frederic-betukumesu" target="_blank" rel="noopener" class="btn-ghost">LinkedIn</a>
          <a href="https://github.com/FredDev12" target="_blank" rel="noopener" class="btn-ghost">GitHub</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Compétences -->
  <section class="section container-page">
    <SectionTitle title="Compétences principales" subtitle="Techniques, outils et domaines" />
    <div class="grid md:grid-cols-2 gap-6">
      <div class="card p-6">
        <h3 class="font-semibold">Développement & Technologies</h3>
        <ul class="mt-2 space-y-2 text-[rgb(var(--color-muted))] list-disc list-inside">
          <li>Front-end : Vue.js, Tailwind CSS, Vite</li>
          <li>Back-end : Node.js / TypeORM, Flask / SQLAlchemy</li>
          <li>Mobile : Flutter, Java (notions)</li>
          <li>IoT : Arduino, ESP32 — automatisation & monitoring</li>
        </ul>
      </div>
      <div class="card p-6">
        <h3 class="font-semibold">Infrastructure & DevOps</h3>
        <ul class="mt-2 space-y-2 text-[rgb(var(--color-muted))] list-disc list-inside">
          <li>Réseaux : Installation, maintenance et supervision</li>
          <li>DevOps : GitHub Actions, Docker, AWS S3</li>
          <li>Systèmes : Linux, Windows Server</li>
          <li>Électricité : Installation domestique et industrielle</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Timeline -->
  <section class="section container-page">
    <SectionTitle title="Parcours" subtitle="Formation, expériences et projets" />
    <Timeline :items="timeline" />
  </section>
</template>

<script setup>
import Timeline from '@/components/Timeline.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import reveal from '@/directives/reveal'
import profile from '@/assets/profile.png'

defineOptions({ directives: { reveal } })

const timeline = [
  {
    title: 'Licence en Informatique — Réseaux & Infrastructure',
    subtitle: 'Université Nouveaux Horizons (UNH)',
    period: '2021 – 2024',
    description: 'Formation axée sur les réseaux, la sécurité et la modélisation NS-3.',
    tags: ['Réseaux', 'NS-3', 'Sécurité']
  },
  {
    title: 'Développeur Junior • Wadoria',
    subtitle: 'Lubumbashi',
    period: '2023 – présent',
    description: 'Conception d’applications web et mobiles, solutions de sécurité connectée (rondes, CCTV).',
    tags: ['Vue', 'Flutter', 'Node']
  },
  {
    title: 'Freelance Full-stack Developer',
    subtitle: 'Lubumbashi',
    period: '2024 – présent',
    description: 'Développement de back-end Node/Flask, intégration d’API, automatisation IoT et DevOps.',
    tags: ['Node', 'Flask', 'DevOps']
  },
  {
    title: 'Projet de recherche — Optimisation énergétique dans un microgrid',
    subtitle: 'Université Nouveaux Horizons',
    period: '2024',
    description: 'Conception d’algorithmes de délestage et d’une API REST pour la gestion d’énergie intelligente.',
    tags: ['Python', 'API', 'Smart Grid']
  },
  {
    title: 'Électricien • Master Engineering DRC (MED)',
    subtitle: 'Lubumbashi',
    period: '2022 – présent',
    description: 'Installation et maintenance de réseaux électriques domestiques et industriels.',
    tags: ['Électricité', 'Sécurité']
  }
]
</script>
