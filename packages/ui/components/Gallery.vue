<script lang="ts" setup>
const props = defineProps<{ urls: string[] }>();

const imageModelOpen = ref(false);
const focusImageUrl = ref<undefined | string>(undefined);
</script>
<template>
  <ul class="grid grid-cols-3">
    <li v-for="path in props.urls" class="flex items-center">
      <img
        :src="path"
        loading="lazy"
        class="w-full"
        @click="
          () => {
            focusImageUrl = path;
            imageModelOpen = true;
            console.log(imageModelOpen);
          }
        "
      />
    </li>
  </ul>
  <UModal v-model="imageModelOpen">
    <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <img :src="focusImageUrl" loading="lazy" class="w-full" />
    </UCard>
  </UModal>
</template>
