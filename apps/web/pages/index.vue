<script lang="ts" setup>
import { useInputStore } from "~/stores/memory";

const inputStore = useInputStore();
const textareaContent = ref("");
const imageLinks = ref<string[]>([]);

function onFileChange(e: Event) {
  const ele = e.target as HTMLInputElement;
  const files = ele?.files;
  if (files) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const fileContent = e.target?.result;
      if (!fileContent) return;
      imageLinks.value = fileContent.toString()?.split("\n");
      inputStore.setImageUrls(imageLinks.value);
    };
    reader.readAsText(files[0]);
  }
}

function onTextareaInput() {
  imageLinks.value = textareaContent.value.split("\n");
  inputStore.setImageUrls(imageLinks.value);
}
</script>
<template>
  <div class="p-5">
    <h2 class="text-2xl">Choose a File</h2>
    <input type="file" @change="onFileChange" />
    <h2 class="text-2xl">Enter URLs (separated by new lines)</h2>
    <UTextarea v-model="textareaContent" autoresize @input="onTextareaInput" />
    <div class="flex space-x-4">
      <UButton
        to="/image-classification"
        class="mt-4"
        icon="i-game-icons-choice"
        >Start Classification</UButton
      >
      <UButton to="/slideshow" class="mt-4" icon="i-tabler-slideshow"
        >Start Slideshow</UButton
      >
    </div>
    <pre class="h-96 overflow-scroll">{{ inputStore.urls }}</pre>
  </div>
</template>
