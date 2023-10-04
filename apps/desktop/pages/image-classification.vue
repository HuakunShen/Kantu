<script lang="ts" setup>
import { readFolderFromDisk } from "~/utils/fs";
import { writeTextFile, BaseDirectory } from "@tauri-apps/api/fs";

const store = useDefaultStore();
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

async function onDownload(content: string) {
  const fileName = `image-classification-${Date.now()}.txt`;
  await writeTextFile(fileName, content, { dir: BaseDirectory.Download });
  toast.add({ title: "Downloaded to Downlodas Folder", description: fileName });
}
</script>
<template>
  <UIImageSelectorOperator
    class="pt-10"
    v-if="urls.length > 0"
    :imgUrls="urls"
    @download="onDownload"
  />
</template>
