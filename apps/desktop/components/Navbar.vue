<template>
  <ul class="flex flex-col justify-around h-full px-4">
    <ULink to="/">
      <UIcon class="text-4xl" name="i-ion-home-sharp" />
    </ULink>

    <ULink to="/gallery">
      <UIcon class="text-4xl" name="i-icon-park-outline-preview-open" />
    </ULink>

    <ULink to="/image-classification">
      <UIcon class="text-4xl" name="i-icon-park-outline-full-selection" />
    </ULink>

    <ULink to="/slideshow">
      <UIcon class="text-4xl" name="i-tabler-slideshow" />
    </ULink>

    <ULink to="/setting">
      <UIcon class="text-4xl" name="i-uil-setting" />
    </ULink>
  </ul>
</template>
