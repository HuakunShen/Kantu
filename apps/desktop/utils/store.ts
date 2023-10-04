import { defineStore } from "pinia";

export const useDefaultStore = defineStore("default", {
  state: () => ({ folder: "" }),
  getters: {},
  actions: {
    setFolder(path: string) {
      this.folder = path;
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});

export const useSettingStore = defineStore("setting", {
  state: () => ({ slideshowInterval: 4000 }),
  getters: {},
  actions: {
    setSlideshowInterval(interval: number) {
      this.slideshowInterval = interval;
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
