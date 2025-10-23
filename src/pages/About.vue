<template>
    <section class="section">
        <SectionTitle title="À propos" subtitle="Ingénieur réseaux & full‑stack" />
        <div class="grid md:grid-cols-2 gap-6">
            <div class="card p-6">
                <h3 class="font-semibold">Qui je suis</h3>
                <p class="mt-2 text-[rgb(var(--color-muted))]">
                Ingénieur en Réseaux & Télécoms, orienté DevOps et produits web. J’aime concevoir des
                applications utiles, documentées et scalables pour l’éducation, la sécurité et l’énergie.
                </p>
            </div>
            <div class="card p-6">
                <h3 class="font-semibold">Compétences</h3>
                <ul class="mt-2 space-y-2 text-[rgb(var(--color-muted))] list-disc list-inside">
                    <li>Front‑end: Vue 3, Tailwind v4, Vite</li>
                    <li>Back‑end: Node/TypeORM, Flask/SQLAlchemy</li>
                    <li>Mobile: Flutter</li>
                    <li>DevOps: GitHub Actions, S3, Docker (basique)</li>
                    <li>Réseaux: CCTV, rondes, NS‑3 (académique)</li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
</script>