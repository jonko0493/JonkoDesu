<template>
    <div class="error" v-if="error.statusCode == 404">
        <h2>Error {{ error.statusCode }} - Not Found</h2>
        <!-- <img src="/images/404.png" alt="We're counting on you to take us home, Nagato!" /> -->
        <ButtonLink link="/" color="red" icon="fa6-solid:house">Back to Home</ButtonLink>
    </div>
    <div class="error" v-else-if="error.statusCode == 500">
        <h2>Error {{ error.statusCode }} - Internal Error</h2>
        <p>This error can be caused by the uBlock Origin filter "Fanboy's Annoyance." Please consider disabling this filter or disabling uBlock Origin on this site.</p>
        <p>If you don't have this filter enabled, try refreshing the page (possibly a few times).</p>
    </div>
    <div class="error" v-else>
        <h2>Error {{ error.statusCode }}</h2>
        <p>If you have time, I'd appreciate you reporting this issue to me.</p>
    </div>
</template>

<style scoped>
.error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    text-align: center;
}

.error img {
    max-width: 450px;
    height: auto;
    margin: 1rem;
    border-radius: 0.5rem;
    box-shadow: var(--main-shadow);
}

/* Content display */
#content-body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--main-dark-gray);
    background-image: url('/images/haruhi-calisthenic.png');
    background-repeat: repeat;
    justify-content: center;
}

#topbar {
    margin: 0 auto;
    padding: 0;
}

#topbar #logo {
    max-width: 500px;
    padding: 0.5rem;
}
</style>

<script setup>
definePageMeta({
    title: 'Error - Jonko',
    description: 'Jonko\'s spot for all his projects and such',
})

const props = defineProps({
  error: Object
})
</script>