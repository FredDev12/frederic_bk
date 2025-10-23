<template>
    <section class="section">
        <SectionTitle title="Contact" subtitle="Parlons de votre projet" />
        <div class="grid md:grid-cols-2 gap-6">
            <form class="card p-6 space-y-4" @submit.prevent="submit">
                <input v-model="form.name" placeholder="Nom" class="input" required />
                <input v-model="form.email" type="email" placeholder="Email" class="input" required />
                <textarea v-model="form.message" placeholder="Message" rows="6" class="input"></textarea>
                <button class="btn-primary">Envoyer</button>
            </form>
            <div class="card p-6">
                <h3 class="font-semibold">Réseaux</h3>
                <div class="mt-3 space-y-2 text-[rgb(var(--color-muted))]">
                    <p>WhatsApp: <a class="underline" href="https://wa.me/243844894508" target="_blank">+243 84 48 94 508</a></p>
                    <p>Email: <a class="underline" href="mailto:betukumesukabamba@gmail.com">betukumesukabamba@gmail.com</a></p>
                    <p>LinkedIn: <a class="underline" href="https://www.linkedin.com/in/frédéric-betukumesu" target="_blank">frédéric-betukumesu</a></p>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { reactive } from 'vue'
import SectionTitle from '@/components/SectionTitle.vue'


const form = reactive({ name:'', email:'', message:'' })
const submit = () => {
const body = encodeURIComponent(`${form.name}\n${form.email}\n\n${form.message}`)
window.location.href = `mailto:contact@wadoria.com?subject=Contact%20Portfolio&body=${body}`
}
</script>


