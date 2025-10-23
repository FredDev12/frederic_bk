<template>
  <section class="section container-page">
    <SectionTitle title="Projets & Études de cas" subtitle="Filtre par compétences" />

    <!-- Barre de contrôles -->
    <div class="mb-4 flex flex-wrap items-center gap-3">
      <SkillPills v-model="selected" :skills="allSkills" />
      <div class="ms-auto flex items-center gap-3">
        <label class="text-sm text-[rgb(var(--color-muted))]">Mode</label>
        <select
          v-model="mode"
          class="input w-auto py-1.5"
          aria-label="Mode de filtrage"
          title="Mode de filtrage"
        >
          <option value="OR">Au moins une</option>
          <option value="AND">Toutes</option>
        </select>
        <span class="text-sm text-[rgb(var(--color-muted))]">
          {{ filtered.length }} / {{ allProjects.length }} projet(s)
        </span>
        <button v-if="selected.length" class="btn-ghost" @click="resetFilters">Réinitialiser</button>
      </div>
    </div>

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
      Aucun projet pour ces compétences en mode {{ mode }}.
    </p>
  </section>
</template>
<script setup>
import { computed, ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SectionTitle from '@/components/SectionTitle.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import SkillPills from '@/components/SkillPills.vue'
import reveal from '@/directives/reveal'


import { projects as allProjects, allSkills } from '@/data/projects'

defineOptions({ directives: { reveal } })
const route = useRoute()
const router = useRouter()

const selected = ref([])
const mode = ref('OR') // 'OR' | 'AND'

const filtered = computed(() => {
  if (!selected.value.length) return allProjects
  const set = new Set(selected.value)
  return mode.value === 'AND'
    ? allProjects.filter(p => [...set].every(s => p.tags.includes(s)))
    : allProjects.filter(p => p.tags.some(t => set.has(t)))
})

function delayClass(i) {
  const idx = (i % 4) + 1
  return `reveal-delay-${idx}`
}

// URL <-> état
function syncToQuery() {
  const skills = selected.value.join(',')
  const q = { ...route.query }
  skills ? (q.skills = skills) : delete q.skills
  mode.value !== 'OR' ? (q.mode = mode.value) : delete q.mode
  router.replace({ query: q })
}
function hydrateFromQuery() {
  const skillsParam = (route.query.skills || '').toString()
  const list = skillsParam.split(',').map(s => s.trim()).filter(Boolean).filter(s => allSkills.includes(s))
  selected.value = list
  const m = (route.query.mode || 'OR').toString().toUpperCase()
  mode.value = m === 'AND' ? 'AND' : 'OR'
}
watch([selected, mode], syncToQuery, { deep: true })
onMounted(hydrateFromQuery)

function resetFilters() {
  selected.value = []
  mode.value = 'OR'
  syncToQuery()
}
</script>

