<template>
  <div class="flex flex-wrap items-center gap-2">
    <button
      v-for="s in skills" :key="s"
      class="px-3 py-1.5 rounded-full border text-sm transition
             border-white/10 bg-white/5 hover:bg-white/10
             focus-visible:outline-none focus-visible:ring-2"
      :class="selectedSet.has(s) ? 'ring-2 ring-white/40' : ''"
      role="checkbox"
      :aria-checked="selectedSet.has(s) ? 'true' : 'false'"
      @click="toggle(s)"
      @keydown.enter.prevent="toggle(s)"
      @keydown.space.prevent="toggle(s)"
    >
      {{ s }}
    </button>

    <button
      v-if="selectedSet.size"
      class="ms-1 px-3 py-1.5 rounded-full border text-sm transition
             border-white/15 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2"
      @click="clear"
    >
      Réinitialiser
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: { type: Array, default: () => [] }, // sélection
  skills: { type: Array, default: () => [] }      // toutes les skills
})
const emit = defineEmits(['update:modelValue'])

const selectedSet = computed(() => new Set(props.modelValue))

function toggle(s) {
  const set = new Set(props.modelValue)
  set.has(s) ? set.delete(s) : set.add(s)
  emit('update:modelValue', [...set])
}
function clear() {
  emit('update:modelValue', [])
}
</script>
