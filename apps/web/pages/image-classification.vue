<script lang="ts" setup>
import { useInputStore } from "~/stores/memory";

const inputStore = useInputStore();
</script>
<template>
  <UIImageSelectorOperator :imgUrls="inputStore.urls" />
</template>
