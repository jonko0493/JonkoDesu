<template>
    <div>
        <NuxtLayout>
            <div id="home-page">
                <div class="top">
                </div>
                <div class="main">
                    <div class="about box">
                        <h2>{{ $t('about') }}</h2>
                        <ContentDoc :path="`/${locale}`" />
                    </div>
                    <div class="projects box">
                        <h2>{{ $t('projects') }}</h2>
                        <ProjectPreviewStack />
                    </div>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup>
const { locale, t } = useI18n()
const localePath = useLocalePath()

definePageMeta({
    title: computed(() => t('index-title')),
    description: computed(() => t('index-description')),
    layout: 'default'
})
</script>

<style scoped>
#home-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}

#home-page .box {
    margin: 0.5rem;
    padding: 1.25rem;
    border-radius: 0.5rem;
    background-color: var(--accent-gray);
    box-shadow: var(--main-shadow);
}

#home-page .top {
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    width: 100%;
}

#home-page .main {
    display: flex;
    flex-direction: row;
    width: 101.5%;
}

#home-page .about {
    height: fit-content;
    max-width: 420px;
}

#home-page .projects {
    display: flex;
    flex-direction: column;
}

h2 {
    margin: 0;
    margin-bottom: 1.4rem;
    font-size: 1.5rem;
    font-weight: bold;
}

/* Less than 850px */
@media screen and (max-width: 940px) {
    #home-page .main {
        flex-direction: column-reverse;
    }

    .projects {
        max-width: unset !important;
    }
}
</style>