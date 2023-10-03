<script lang="ts" setup>
const props = defineProps<{ urls: string[]; urlIdx: number }>();
type UrlItem = {
  url: string;
  display: boolean;
  idx: number;
  swipeLeft: boolean;
  swipeRight: boolean;
  candidate: boolean;
};
const urlsItems = ref<UrlItem[]>(
  props.urls.map((url, idx) => ({
    url,
    display: false,
    idx,
    swipeLeft: false,
    swipeRight: false,
    candidate: true,
  }))
);
urlsItems.value[0].display = true;
urlsItems.value[0].candidate = false;
const urlDisplayIdx = ref<number>(0);
const urlsItemToDisplay = computed(() => {
  return urlsItems.value.filter((item: UrlItem) => item.display);
});
function proceed() {
  const cacheIdx = urlDisplayIdx.value;
  urlDisplayIdx.value++;
  urlsItems.value[urlDisplayIdx.value].display = true;
  setTimeout(() => {
    urlsItems.value[urlDisplayIdx.value].candidate = false;
  }, 50);
  setTimeout(() => {
    urlsItems.value[cacheIdx].display = false;
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
  >
    <li
      v-for="urlItem in urlsItemToDisplay"
      :class="`absolute transition-all duration-300 ease-in-out
      
      ${urlItem.swipeRight ? ' ml-[100vw]' : ''} ${
        urlItem.swipeLeft ? ' mr-[100vw]' : ''
      }`"
      :key="urlItem.idx"
    >
      <NuxtImg
        v-if="urlItem.display"
        :src="urlItem.url"
        :class="`${urlItem.candidate ? 'w-1' : 'w-[30em]'} transition-all duration-300`"
      />
    </li>
  </ul>
</template>
