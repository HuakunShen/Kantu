<script lang="ts" setup>
import { useInputStore } from "~/stores/memory";

const inputStore = useInputStore();
function download(content: string, fileName: string, contentType: string) {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}
function onDownload(content: string) {
  download(content, "kantu-classification-result.json", "text/plain");
}
</script>
<template>
  <UIImageSelectorOperator :imgUrls="inputStore.urls" @download="onDownload" />
</template>
