<template>
  <div>
    <div class="w-full h-8 absolute" data-tauri-drag-region></div>
    <div class="flex h-screen">
      <Navbar class="flex-none" />
      <div class="grow">
        <slot />
      </div>
    </div>
  </div>
</template>
