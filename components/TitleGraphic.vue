<template>
    <NuxtLink :to="localePath(to)" class="title-graphic">
        <h1>{{ t('jonko') }}</h1>
    </NuxtLink>
</template>

<script setup>
const { locale, t } = useI18n({
  useScope: 'local'
})
const localePath = useLocalePath()
</script>

<style scoped>
.title-graphic {
    filter: drop-shadow(0.12em 0.12rem 0.12rem rgba(0, 0, 0, 0.4));
    height: auto;
    max-width: 45em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}

.graphic-vector, .graphic-image {
    width: 100%;
    height: auto;
}
</style>

<script>
export default {
    props: {
        graphic: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: false
        }
    }
}
</script>