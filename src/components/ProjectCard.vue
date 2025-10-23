<template>
    <article class="card p-5 sm:p-6 hover:scale-[1.01] transition">
        <div class="flex items-start justify-between gap-4">
            <div>
                <h3 class="text-lg font-semibold">{{ project.title }}</h3>
                <p class="mt-1 text-sm text-[rgb(var(--color-muted))]">{{ project.summary }}</p>
            </div>
            <span class="badge">{{ project.year }}</span>
        </div>
        <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="t in project.tags" :key="t" class="badge">{{ t }}</span>
        </div>
        <div class="mt-4 flex gap-3">
            <a v-if="project.demo" :href="project.demo" target="_blank" class="btn-primary">Demo</a>
            <a v-if="project.repo" :href="project.repo" target="_blank" class="btn-ghost">Code</a>
            <RouterLink v-if="project.caseStudy" :to="project.caseStudy" class="btn-ghost">Étude de cas</RouterLink>
        </div>
    </article>
</template>
<script setup>
defineProps({ project: Object })
</script>