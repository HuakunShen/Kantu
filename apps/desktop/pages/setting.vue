<script lang="ts" setup>
import { useSettingStore } from "~/utils/store";

const settingStore = useSettingStore();
const interval = computed({
  get: () => settingStore.slideshowInterval,
  set: (val) => {
    settingStore.setSlideshowInterval(val);
  },
});
</script>
<template>
  <h1 class="text-4xl">Setting</h1>
  <UFormGroup label="Slideshow Interval" name="email">
    <UInput v-model="interval" type="number" />
  </UFormGroup>
</template>
