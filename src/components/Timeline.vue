<template>
  <ol class="relative border-s border-white/10 space-y-8 ps-6">
    <li v-for="(item, i) in items" :key="i" class="relative">
      <!-- dot -->
      <span class="absolute -start-[9px] top-1.5 h-3.5 w-3.5 rounded-full bg-white/20 ring-2 ring-white/10"></span>

      <!-- header -->
      <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3 class="text-base sm:text-lg font-semibold">
          {{ item.title }}
          <span v-if="item.subtitle" class="text-sm font-normal text-[rgb(var(--color-muted))]"> — {{ item.subtitle }}</span>
        </h3>
        <time class="text-xs text-[rgb(var(--color-muted))]">{{ item.period }}</time>
      </div>

      <!-- content -->
      <p v-if="item.description" class="mt-2 text-sm text-[rgb(var(--color-muted))] leading-relaxed">
        {{ item.description }}
      </p>

      <!-- tags -->
      <div v-if="item.tags?.length" class="mt-3 flex flex-wrap gap-2">
        <span v-for="t in item.tags" :key="t" class="px-2.5 py-1 rounded-full text-xs border border-white/10 bg-white/5">
          {{ t }}
        </span>
      </div>
    </li>
  </ol>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => []
  }
})
</script>
