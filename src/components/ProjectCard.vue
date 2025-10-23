<!-- ProjectCard.vue (extrait) -->
<template>
  <article class="card p-5 h-full flex flex-col">
    <img
      v-if="project.image"
      :src="project.image"
      :alt="project.title"
      class="w-full h-40 object-cover rounded-xl border border-white/10 mb-4"
      loading="lazy"
      decoding="async"
    />
    <header class="flex items-baseline justify-between">
      <h3 class="font-semibold text-lg">{{ project.title }}</h3>
      <span class="text-sm text-[rgb(var(--color-muted))]">{{ project.year }}</span>
    </header>

    <p class="mt-2 text-sm text-[rgb(var(--color-muted))]">{{ project.summary }}</p>

    <div class="mt-3 flex flex-wrap gap-2">
      <span v-for="t in project.tags" :key="t" class="badge">{{ t }}</span>
    </div>

    <div class="mt-4 flex gap-3">
      <a v-if="project.demo && project.demo !== '#'" :href="project.demo" target="_blank" rel="noopener" class="btn-ghost" aria-label="Démo">Démo</a>
      <a v-if="project.repo && project.repo !== '#'" :href="project.repo" target="_blank" rel="noopener" class="btn-ghost" aria-label="Code">Code</a>
    </div>
  </article>
</template>

<script setup>
defineProps({ project: { type: Object, required: true } })
</script>
