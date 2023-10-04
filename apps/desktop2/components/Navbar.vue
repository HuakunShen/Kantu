<template>
  <ul class="flex flex-col justify-around h-full px-4">
    <NuxtLink to="/">
      <UIcon class="text-4xl" name="i-ion-home-sharp" />
    </NuxtLink>

    <NuxtLink to="/gallery">
      <UIcon class="text-4xl" name="i-icon-park-outline-preview-open" />
    </NuxtLink>

    <NuxtLink to="/image-classification">
      <UIcon class="text-4xl" name="i-icon-park-outline-full-selection" />
    </NuxtLink>

    <NuxtLink to="/slideshow">
      <UIcon class="text-4xl" name="i-tabler-slideshow" />
    </NuxtLink>

    <NuxtLink to="/setting">
      <UIcon class="text-4xl" name="i-uil-setting" />
    </NuxtLink>
  </ul>
</template>
