<script setup>
const { locale } = useI18n({
  useScope: 'local'
})
const localePath = useLocalePath()
</script>
<template>
    <div class="project-preview">
        <div class="project-image" v-if="project.image">
            <NuxtLink :to="localePath(project._path.substring(0, project._path.lastIndexOf('/')))">
                <img :src="'/images/project/' + project.image" class="modal-exclude" />    
            </NuxtLink>
        </div>
        <div class="project-body">
            <div class="title">
                <NuxtLink :to="localePath(project._path.substring(0, project._path.lastIndexOf('/')))">{{ project.title }}</NuxtLink>
            </div>
            <div class="description">{{ project.description }}</div>
        </div>

    </div>
</template>

<style scoped>
.project-preview {
    display: flex;
    flex-direction: row;
    margin-bottom: 1.5rem;
}

.project-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.5rem;
    margin-right: 1rem;
}

.project-image img {
    max-width: 150px;
    max-height: 150px;
    height: auto;
    border-radius: 0.5rem;
}

.project-image:hover {
    cursor: pointer;
    filter: brightness(0.9);
    transform: scale(1.025);
}

.project-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.project-body .title {
    font-size: 1.25rem;
    font-weight: bold;
}

.project-body .title a {
    color: white;
}

.project-body .data {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.project-body .data .tags .tag {
    border-radius: 0.5rem;
    padding: 0.1rem 0.25rem;
    margin: 0 0.2rem;
}

.project-body .description {
    margin-top: 1rem;
}

/* Less than 580px */
@media screen and (max-width: 36rem) {
    .project-preview {
        flex-direction: column;
    }

    .project-image {
        margin: 1rem 0;
    }
}
</style>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>