<script lang="ts" setup>
import { ImageItem, Keys, ArrowKeys } from "@kantu/lib";

const props = defineProps<{ imgUrls: string[] }>();
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

function download(content: string, fileName: string, contentType: string) {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

function onDownload() {
  download(
    JSON.stringify(imageItemsRef.value, null, 2),
    "kantu-classification-result.json",
    "text/plain"
  );
}
</script>
<template>
  <div class="flex flex-col h-full overflow-x-hidden">
    <div class="flex flex-none pt-2 px-2 justify-between items-center">
      <span></span>
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
