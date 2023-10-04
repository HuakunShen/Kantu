<script lang="ts" setup>
const defaultStore = useDefaultStore();
</script>
<template>
  <div class="flex flex-col h-full p-5">
    <div class="px-3 grow">
      <FileDrop />
    </div>
    <p class="pl-10 py-1 flex-none">
      <strong>Current Folder Path: </strong
      ><code>{{ defaultStore.folder }}</code>
    </p>
  </div>
</template>
