<template>
    <head>

    </head>
    <div>
        <NuxtLayout>
            <ContentDoc :path="`/project/${route.params.slug}/${locale}`">
                <template v-slot="{ doc }">
                    <div class="header">
                        <div class="info">
                            <h1>{{ doc.title }}</h1>
                        </div>
                    </div>
                    <div>
                        <ContentRenderer :value="doc" />
                    </div>
                </template>
            </ContentDoc>
        </NuxtLayout>
    </div>
</template>

<script setup>
useHead({
    titleTemplate: (blogTitle) => {
        return blogTitle ? `${blogTitle} - Jonko's Project` : `Jonko's Project`;
    }
})
const { locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
</script>

<script>
definePageMeta({
    title: 'Jonko - Project'
})
</script>