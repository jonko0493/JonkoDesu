<script setup>
const { locale } = useI18n({
  useScope: 'local'
})
</script>
<template>
    <ContentList path="/project" v-slot="{ list }">
        <div v-for="project in list.filter(b => b._path.endsWith(locale))">
            <ProjectPreview :key="project.title" :project="project" />
        </div>
    </ContentList>
</template>