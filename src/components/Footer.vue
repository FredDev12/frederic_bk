<template>
<footer class="mt-20 border-t border-white/10">
<div class="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 text-sm text-[rgb(var(--color-muted))] flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
<p>© {{ new Date().getFullYear() }} Frederic Betukumesu — Wadoria / MED</p>
<div class="flex gap-4">
<a class="hover:opacity-80" href="https://github.com/USERNAME" target="_blank">GitHub</a>
<a class="hover:opacity-80" href="https://www.linkedin.com/in/USERNAME" target="_blank">LinkedIn</a>
<RouterLink class="hover:opacity-80" to="/contact">Contact</RouterLink>
</div>
</div>
</footer>
</template>