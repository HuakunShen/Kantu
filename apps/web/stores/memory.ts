import { defineStore } from "pinia";

export const useInputStore = defineStore("image-urls", {
  state: () => ({ urls: [] as string[] }),
  getters: {},
  actions: {
    setImageUrls(urls: string[]) {
      this.urls = urls;
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
