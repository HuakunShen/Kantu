<script lang="ts" setup>
import { useInputStore } from "~/stores/memory";

const inputStore = useInputStore();
</script>
<template>
  <UISlideshow :imgUrls="inputStore.urls" :slideshowInterval="4000" />
</template>
