<template>
    <div v-if="type == 'nav'" class="nav">
        <NuxtLink v-for="social in socials.filter(s => s.display.nav)" :href="social.link" rel="me"
            :style="`color: ${social.color}`">
            <Icon :name="social.icon" />
        </NuxtLink>
    </div>
    <ButtonRow v-else class="footer">
        <NuxtLink v-for="social in socials.filter(s => s.display.footer)" :href="social.link" rel="me"
            :style="`color: ${social.color}`">
            <Icon :name="social.icon" />
        </NuxtLink>
    </ButtonRow>
</template>

<script setup>
import socials from '/assets/social-links.json'

const { locale } = useI18n()
const localePath = useLocalePath()

const { type, stackTopper } = defineProps({
    type: {
        type: String,
        required: false,
        default: 'nav'
    }
})
</script>

<style scoped>
.nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0.5rem;
    font-size: 2rem;
    filter: drop-shadow(0.4vh 0.4vh 0.2vh rgba(0, 0, 0, 0.3));
}

.footer {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
    filter: drop-shadow(0vh 0vh 0.3vh var(--main-light-gray));
    font-size: 1.8em;
}
</style>