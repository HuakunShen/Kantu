<script setup>
import { Icon } from "@iconify/vue";
</script>
<template>
  <ul class="flex flex-col justify-around h-full px-4">
    <UButton to="/">
      Home
      <Icon name="material-symbols:home" />
      <!-- <UIcon class="text-4xl" name="i-ion-home-sharp" /> -->
    </UButton>

    <UButton to="/gallery">
      Gallery
      <!-- <UIcon class="text-4xl" name="i-icon-park-outline-preview-open" /> -->
    </UButton>

    <UButton to="/image-classification">
      Classification
      <!-- <UIcon class="text-4xl" name="i-icon-park-outline-full-selection" /> -->
    </UButton>

    <UButton to="/slideshow">
      Slideshow
      <!-- <UIcon class="text-4xl" name="i-tabler-slideshow" /> -->
    </UButton>

    <UButton to="/setting">
      Setting
      <!-- <UIcon class="text-4xl" name="i-uil-setting" /> -->
    </UButton>
  </ul>
</template>
