<template>
<div class="min-h-dvh bg-aurora">
<NavBar />
<main class="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
<RouterView />
</main>
<Footer />
</div>
</template>


<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>