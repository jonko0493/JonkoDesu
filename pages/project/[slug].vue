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
                            <div class="image" v-if="doc.image">
                                <img :src="`/images/project/${doc.image}`" class="image"/>
                            </div>
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

<style scoped>
.image {
    display: block;
    margin: auto;
    width: 50%;
}
img .image {
    max-width: 100px;
}
</style>

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