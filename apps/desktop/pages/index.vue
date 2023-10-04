<script lang="ts" setup>
const defaultStore = useDefaultStore();
</script>
<template>
  <p class="pl-10 py-1">
    <strong>Current Folder Path: </strong><code>{{ defaultStore.folder }}</code>
  </p>
  <div class="px-3 h-32">
    <FileDrop />
  </div>
</template>
