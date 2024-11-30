<template>
    <footer>
        <div id="socials">
            <SocialLinks type="footer" />
        </div>
        <div id="copyright">
            <div>{{ $t('website') }} &copy; {{ current_year }}, <NuxtLink :to="localePath('/')">Jonko</NuxtLink></div>
            <div>{{ $t('license-pre') }}<NuxtLink to="https://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA 4.0</NuxtLink>{{ $t('license-post') }}</div>
        </div>
    </footer>
</template>

<style>
footer {
    display: flex;
    flex-direction: column;
    color: var(--main-light-gray);
    width: 100vw;
    padding: 0.4rem 0;
    padding-top: 1.2rem;
    text-align: center;
    justify-self: flex-end;
    margin-top: auto;
}
</style>

<script setup>
const { t } = useI18n({
  useScope: 'local'
})
const localePath = useLocalePath()

const current_year = new Date().getFullYear()
</script>