<template>
    <div class="card p-6 text-center">
        <div class="text-4xl font-bold">{{ value }}</div>
        <div class="mt-2 text-sm text-[rgb(var(--color-muted))]">{{ label }}</div>
    </div>
</template>
<script setup>
defineProps({ value: [String, Number], label: String })
</script>