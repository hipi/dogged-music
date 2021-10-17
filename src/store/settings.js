import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    ...JSON.parse(localStorage.getItem('settings')),
  }),
  actions: {},
})
