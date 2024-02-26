<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
  <NuxtLink :to="switchLocalePath('en')">
    en
  </NuxtLink>
  <NuxtLink :to="switchLocalePath('de')">
    de
  </NuxtLink>
</template>
