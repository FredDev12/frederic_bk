<template>
  <header class="header-glass">
    <div class="container-page h-16 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2" @click="close()">
        <img :src="base + 'favicon.png'" class="h-6 w-6" alt="logo" />
        <span class="font-semibold">Frederic B.</span>
      </RouterLink>

      <!-- Desktop nav -->
      <nav class="hidden sm:flex items-center gap-6">
        <RouterLink class="hover:opacity-80" to="/" @click="close()">Accueil</RouterLink>
        <RouterLink class="hover:opacity-80" to="/projects" @click="close()">Projets</RouterLink>
        <RouterLink class="hover:opacity-80" to="/about" @click="close()">À propos</RouterLink>
        <RouterLink class="hover:opacity-80" to="/contact" @click="close()">Contact</RouterLink>
        <a href="https://wa.me/243844894508" target="_blank" rel="noopener" class="btn-primary">WhatsApp</a>
      </nav>

      <!-- Mobile toggle -->
      <button
        class="sm:hidden inline-flex items-center justify-center rounded-xl p-2 border border-white/10 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2"
        :aria-expanded="open ? 'true' : 'false'"
        aria-controls="mobile-menu"
        @click="toggle()"
        @keydown.esc="close()"
      >
        <span class="sr-only">Ouvrir le menu</span>
        <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Overlay + Mobile menu -->
    <transition name="fade">
      <div
        v-if="open"
        class="fixed inset-0 z-30 sm:hidden"
        aria-hidden="true"
      >
        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-black/40 supports-backdrop-filter:bg-black/20 backdrop-blur"
          @click="close()"
        />
        <!-- Panel -->
        <nav
          id="mobile-menu"
          class="absolute left-0 right-0 top-0 mt-16 container-page pb-6"
          @click.self="close()"
        >
          <div class="card p-3">
            <RouterLink class="block px-3 py-2 rounded-lg hover:bg-white/5" to="/" @click="close()">Accueil</RouterLink>
            <RouterLink class="block px-3 py-2 rounded-lg hover:bg-white/5" to="/projects" @click="close()">Projets</RouterLink>
            <RouterLink class="block px-3 py-2 rounded-lg hover:bg-white/5" to="/about" @click="close()">À propos</RouterLink>
            <RouterLink class="block px-3 py-2 rounded-lg hover:bg-white/5" to="/contact" @click="close()">Contact</RouterLink>
            <a class="btn-primary mt-2 w-full justify-center" href="https://wa.me/243844894508" target="_blank" rel="noopener">WhatsApp</a>
          </div>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const open = ref(false)
const base = import.meta.env.BASE_URL || '/frederic_bk/'

function toggle() { open.value = !open.value }
function close() { open.value = false }

function onResize() {
  if (window.innerWidth >= 640) close()
}
function onKeydown(e) {
  if (e.key === 'Escape') close()
}

watch(open, (val) => {
  // Empêche le scroll derrière le menu
  document.documentElement.style.overflow = val ? 'hidden' : ''
  document.body.style.overflow = val ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('resize', onResize)
  window.addEventListener('keydown', onKeydown)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  window.removeEventListener('keydown', onKeydown)
  document.documentElement.style.overflow = ''
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Fondu overlay/panel */
.fade-enter-active, .fade-leave-active { transition: opacity .18s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
