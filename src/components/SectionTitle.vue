<template>
    <div class="mb-10">
        <h2 class="section-title">{{ title }}</h2>
        <p v-if="subtitle" class="section-sub mt-2">{{ subtitle }}</p>
    </div>
</template>
<script setup>
defineProps({ title: String, subtitle: String })
</script>