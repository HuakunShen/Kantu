<script lang="ts" setup>
import { shuffleArray } from "~/utils/array";
import { readDir } from "@tauri-apps/api/fs";
import { convertFileSrc } from "@tauri-apps/api/tauri";

const defaultStore = useDefaultStore();
const toast = useToast();
const convertedFiles = ref<string[]>([]);

onMounted(async () => {
  if (!defaultStore.folder) {
    toast.add({ title: "No Folder Selected" });
    navigateTo("/");
    return;
  }
  const files = await readFolderFromDisk(defaultStore.folder);
  shuffleArray(files);
  convertedFiles.value = files;
});
</script>
<template>
  <UIGallery :urls="convertedFiles" />
</template>
