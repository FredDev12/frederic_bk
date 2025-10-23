<template>
    <header class="sticky top-0 z-40 backdrop-blur supports-backdrop-filter:bg-black/20 border-b border-white/10">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
            <RouterLink to="/" class="flex items-center gap-2">
                <img src="/favicon.png" class="h-6 w-6" alt="logo" />
                <span class="font-semibold">Frederic B.</span>
            </RouterLink>
            <nav class="hidden sm:flex items-center gap-6">
                <RouterLink class="hover:opacity-80" to="/">Accueil</RouterLink>
                <RouterLink class="hover:opacity-80" to="/projects">Projets</RouterLink>
                <RouterLink class="hover:opacity-80" to="/about">À propos</RouterLink>
                <RouterLink class="hover:opacity-80" to="/contact">Contact</RouterLink>
                <a href="https://wa.me/243844894508" target="_blank" class="btn-primary">WhatsApp</a>
            </nav>
        </div>
    </header>
</template>