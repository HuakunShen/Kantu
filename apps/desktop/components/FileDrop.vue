<script lang="ts" setup>
import { open } from "@tauri-apps/api/dialog";
import { convertFileSrc } from "@tauri-apps/api/tauri";

const defaultStore = useDefaultStore();
const isHover = ref(false);
function onClickChooseFolder() {
  open({ directory: true, title: "Choose Folder" }).then((p) => {
    if (typeof p === "string") {
      defaultStore.setFolder(p);
    }
  });
}
</script>
<template>
  <DragNDrop
    class="cursor-pointer"
    v-model:isOnHover="isHover"
    @fileDrop="
      (p) => {
        defaultStore.setFolder(p);
      }
    "
    @click="onClickChooseFolder"
  >
    <div
      :class="`w-full h-full border-dashed border-2 rounded-lg flex justify-center items-center ${
        isHover && 'outline'
      }`"
    >
      <div class="flex flex-col items-center">
        <UIcon name="i-bi-folder" class="text-3xl" />
        <p>Drag and Drop</p>
      </div>
    </div>
  </DragNDrop>
</template>
