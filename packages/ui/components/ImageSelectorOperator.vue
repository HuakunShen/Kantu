<script lang="ts" setup>
import { ImageItem, Keys, ArrowKeys } from "@kantu/lib";

const props = defineProps<{ imgUrls: string[] }>();
const emit = defineEmits<{
  (event: "download", content: string): void;
}>();
const urlIdx = ref(0);
const imageItems = props.imgUrls.map((url, idx) =>
  ImageItem.parse({ url, idx })
);

const imageItemsRef = ref(imageItems);
const imageItemsToDisplay = computed(() => {
  return imageItemsRef.value.filter((item: ImageItem) => item.display);
});
onMounted(() => {
  imageItemsRef.value[0].display = true;
  setTimeout(() => {
    imageItemsRef.value[0].candidate = false;
  }, 10);
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

function swipeLeft() {
  imageItemsRef.value[urlIdx.value].swipeLeft = true;
  proceed();
}

function keydownHandler(e: KeyboardEvent) {
  if (urlIdx.value >= imageItemsRef.value.length) {
    return;
  }
  if (ArrowKeys.has(e.key)) {
    imageItemsRef.value[urlIdx.value].label = e.key;
  }
  if (e.key == Keys.Enum.ArrowLeft) {
    swipeLeft();
  } else if (e.key == Keys.Enum.ArrowRight) {
    swipeRight();
  } else {
  }
}

onMounted(() => {
  document.addEventListener("keydown", keydownHandler);
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", keydownHandler);
});

function onDownload() {
  console.log("download");
  const data = imageItemsRef.value.map((item) => ({
    url: item.url,
    label: item.label,
    idx: item.idx,
    swipeRight: item.swipeRight,
    swipeLeft: item.swipeLeft,
  }));
  const content = JSON.stringify(data, null, 2);
  emit("download", content);
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
      <UButton label="Download" @click="onDownload" />
    </div>
    <div v-if="urlIdx < imageItemsRef.length" class="grow">
      <UIImageSelectorCanvas :imgItems="imageItemsToDisplay" />
    </div>
    <div v-else class="grow flex justify-center items-center">
      <p class="text-2xl font-mono pl-3">
        Finished, Click Download to get the result.
      </p>
    </div>
  </div>
</template>
