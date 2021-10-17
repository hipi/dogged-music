<template>asdasd</template>
<script setup>
import { onMounted } from 'vue'
import { useSettingsStore } from '@/store/settings'
const settingsStore = useSettingsStore()

onMounted(() => {
  console.log(settingsStore.darkModel)
})
</script>
