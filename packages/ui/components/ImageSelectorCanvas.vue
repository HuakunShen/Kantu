<script lang="ts" setup>
import { ImageItem } from "@kantu/lib";

defineProps<{ imgItems: ImageItem[] }>();
</script>
<template>
  <ul
    v-if="imgItems.length > 0"
    class="flex justify-center items-center overflow-x-hidden max-w-[100vw] h-full"
  >
    <li
      v-for="urlItem in imgItems"
      :class="`absolute transition-all duration-300 ease-in-out ${
        urlItem.swipeRight ? ' ml-[300vw]' : ''
      } ${urlItem.swipeLeft ? ' mr-[300vw]' : ''}`"
      :key="urlItem.idx"
    >
      <NuxtImg
        :src="urlItem.url"
        :class="`${
          urlItem.candidate ? 'w-16' : ' w-full'
        } transition-all duration-500 max-h-screen`"
        alt=""
      />
    </li>
  </ul>
</template>
