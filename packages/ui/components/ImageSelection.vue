<script lang="ts" setup>
const props = defineProps<{ urls: string[]; urlIdx: number }>();
type UrlItem = {
  url: string;
  display: boolean;
  idx: number;
  swipeLeft: boolean;
  swipeRight: boolean;
};
const urlsItems: Ref<UrlItem[]> = ref<UrlItem[]>(
  props.urls.map((url, idx) => ({
    url,
    display: false,
    idx,
    swipeLeft: false,
    swipeRight: false,
  }))
);
urlsItems.value[0].display = true;
const urlDisplayIdx = ref<number>(0);
const urlsItemToDisplay = computed(() => {
  return urlsItems.value.filter((item: UrlItem) => item.display);
});
function proceed() {
  const cacheIdx = urlDisplayIdx.value;
  urlDisplayIdx.value++;
  urlsItems.value[urlDisplayIdx.value].display = true;
  setTimeout(() => {
    urlsItems.value[cacheIdx].display = false;
    console.log(urlsItems.value[urlDisplayIdx.value]);
  }, 3000);
}

function keydownHandler(e: KeyboardEvent) {
  if (e.key == "ArrowLeft") {
    urlsItems.value[urlDisplayIdx.value].swipeLeft = true;
    proceed();
  } else if (e.key == "ArrowRight") {
    urlsItems.value[urlDisplayIdx.value].swipeRight = true;
    proceed();
  }
}

onMounted(() => {
  document.addEventListener("keydown", keydownHandler);
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", keydownHandler);
});
</script>
<template>
  <ul
    class="image-stack flex justify-center items-center relative overflow-x-hidden"
    v-auto-animate
  >
    <li
      v-for="urlItem in urlsItemToDisplay"
      :class="`absolute transition-all duration-300 ease-in-out ${
        urlItem.swipeRight ? ' ml-[100vw]' : ''
      } ${urlItem.swipeLeft ? ' mr-[100vw]' : ''}`"
      :key="urlItem.idx"
    >
      <NuxtImg v-if="urlItem.display" width="600" :src="urlItem.url" />
    </li>
  </ul>
</template>
<style scoped>
.image-stack .swipe-right {
  margin-left: "100vw" !important;
}

.image-stack .swipe-left {
  margin-right: "100vw" !important;
}
</style>
