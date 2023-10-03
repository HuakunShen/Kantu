<script lang="ts" setup>
const urls = [
  "https://i.imgur.com/9Csxdg7.png",
  "https://i.imgur.com/u7dllJy.png",
  "https://i.imgur.com/tLw5N2t.png",
  "https://i.imgur.com/e2UbXnK.png",
  "https://i.imgur.com/k54kvKM.png",
  "https://i.imgur.com/WaqFF6f.png",
  "https://i.imgur.com/ibX6R0k.png",
  "https://i.imgur.com/EAmFFqq.png",
  "https://i.imgur.com/U1B4FYM.png",
  "https://i.imgur.com/xKPxcoK.png",
  "https://i.imgur.com/G3v5O3n.png",
  "https://i.imgur.com/OXA6HL0.png",
  "https://i.imgur.com/1kDAmjn.png",
  "https://i.imgur.com/Yz79vnt.png",
  "https://i.imgur.com/iyBUbak.png",
  "https://i.imgur.com/AqOsCVn.png",
  "https://i.imgur.com/1mntCy4.png",
  "https://i.imgur.com/MkYwSlh.png",
  "https://i.imgur.com/KkP8kFd.png",
  "https://i.imgur.com/NkLZkmk.png",
  "https://i.imgur.com/0ucZw3l.png",
  "https://i.imgur.com/mVFWC3B.png",
  "https://i.imgur.com/bGTTT65.png",
];
let urlIdx = ref(0);
</script>
<template>
  <UIImageSelection
    ref="selector"
    class="h-full"
    :urls="urls"
    v-model:url-idx="urlIdx"
  />
</template>
