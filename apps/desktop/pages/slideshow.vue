<script lang="ts" setup>
import { readFolderFromDisk } from "~/utils/fs";

const store = useDefaultStore();
const settingStore = useSettingStore();
const toast = useToast();
const urls = ref<string[]>([]);

onMounted(async () => {
  if (!store.folder) {
    toast.add({ title: "No Folder Selected" });
    navigateTo("/");
    return;
  }
  const urls_ = await readFolderFromDisk(store.folder);
  shuffleArray(urls_);
  urls.value = urls_;
});
</script>
<template>
  <UISlideshow
    v-if="urls.length > 0"
    :imgUrls="urls"
    :slideshowInterval="settingStore.slideshowInterval"
  />
</template>
