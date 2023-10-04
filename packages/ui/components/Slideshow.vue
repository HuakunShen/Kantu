<script lang="ts" setup>
import { ImageItem } from "~/utils/types";

const props = defineProps<{ imgUrls: string[]; slideshowInterval: number }>();
const urlIdx = ref(0);
const imageItems = props.imgUrls.map((url, idx) =>
  ImageItem.parse({ url, idx })
);

const imageItemsRef = ref(imageItems);
const imageItemsToDisplay = computed(() => {
  return imageItemsRef.value.filter((item: ImageItem) => item.display);
});
onMounted(() => {
  // if (imageItemsRef.value.length)
  console.log(props.imgUrls.length);
  
  imageItemsRef.value[0].display = true;
  setTimeout(() => {
    imageItemsRef.value[0].candidate = false;
  }, 10);
  setInterval(() => {
    console.log("slide");
    if (urlIdx.value >= imageItemsRef.value.length) {
      return;
    }
    swipeRight();
  }, props.slideshowInterval);
});

function proceed() {
  const cacheIdx = urlIdx.value;
  urlIdx.value++;
  if (urlIdx.value >= imageItemsRef.value.length) {
    return;
  }
  imageItemsRef.value[urlIdx.value].display = true;
  setTimeout(() => {
    imageItemsRef.value[urlIdx.value].candidate = false;
  }, 50);
  setTimeout(() => {
    imageItemsRef.value[cacheIdx].display = false;
  }, 3000);
}

function swipeRight() {
  imageItemsRef.value[urlIdx.value].swipeRight = true;
  proceed();
}
</script>
<template>
  <div class="flex flex-col h-full overflow-x-hidden">
    <div class="flex flex-none pt-2 px-2 justify-between items-center">
      <NuxtLink to="/" class="font-bold hover:underline">Home</NuxtLink>
      <p>
        {{
          urlIdx >= imageItemsRef.length ? imageItemsRef.length : urlIdx + 1
        }}/{{ imageItemsRef.length }}
      </p>
    </div>
    <div v-if="urlIdx < imageItemsRef.length" class="grow">
      <UIImageSelectorCanvas :imgItems="imageItemsToDisplay" />
    </div>
    <div v-else class="grow flex justify-center items-center">
      <p class="text-2xl font-mono pl-3">Finished</p>
    </div>
  </div>
</template>
