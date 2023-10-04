<script lang="ts" setup>
import { ImageItem, Keys, ArrowKeys } from "@kantu/lib2";

const emit = defineEmits<{
  download: [];
}>();
const props = defineProps<{
  urlIdx: number;
  totalLength: number;
  imageItemsToDisplay: ImageItem[];
}>();
</script>
<template>
  <div class="flex flex-col h-full overflow-x-hidden">
    <div class="flex flex-none pt-2 px-2 justify-between items-center">
      <!-- <p>
        {{ urlIdx >= totalLength ? totalLength : urlIdx + 1 }}/{{ totalLength }}
      </p> -->
    </div>
    <div v-if="urlIdx < totalLength" class="grow">
      <UIImageSelectorCanvas :imgItems="imageItemsToDisplay" />
    </div>
    <div v-else class="grow flex justify-center items-center">
      <p class="text-2xl font-mono pl-3">End</p>
    </div>
  </div>
</template>
