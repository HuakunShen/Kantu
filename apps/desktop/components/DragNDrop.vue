<script lang="ts" setup>
import { listen } from "@tauri-apps/api/event";

const props = defineProps<{ isOnHover: boolean }>();
const emit = defineEmits<{
  (event: "update:isOnHover", isOnHover: boolean): void;
  (event: "fileDrop", path: string): void;
  (event: "drop", evt: DragEvent): void;
  (event: "dragenter", evt: DragEvent): void;
  (event: "dragover", evt: DragEvent): void;
  (event: "dragleave", evt: DragEvent): void;
  (event: "dragend", evt: DragEvent): void;
  (event: "click", evt: MouseEvent): void;
}>();

type UnlistenFn = () => void;
let unlistenFileDrop: UnlistenFn;
let unlistenFileDropCancelled: UnlistenFn;
let unlistenFileDropHover: UnlistenFn;

onMounted(async () => {
  unlistenFileDrop = await listen<string[]>("tauri://file-drop", (e) => {
    if (props.isOnHover) {
      emit("fileDrop", e.payload[0]);
      emit("update:isOnHover", false);
    }
  });
  unlistenFileDropCancelled = await listen(
    "tauri://file-drop-cancelled",
    (e) => {
      console.log(e);
    }
  );
  unlistenFileDropHover = await listen("tauri://file-drop-hover", (e) => {
    console.log(e);
  });
});

onUnmounted(() => {
  unlistenFileDrop();
  unlistenFileDropCancelled();
  unlistenFileDropHover();
});

function onDrop(e: DragEvent) {
  e.preventDefault();
  e.stopPropagation();
  emit("drop", e);
}

function onDragEnter(e: DragEvent) {
  console.log("drag enter");
  if (!props.isOnHover) {
    emit("update:isOnHover", true);
  }
  emit("dragenter", e);
}

function onDragOver(e: DragEvent) {
  console.log("drag over");

  if (!props.isOnHover) {
    emit("update:isOnHover", true);
  }
  emit("dragover", e);
}

function onDragLeave(e: DragEvent) {
  console.log("drag leave");
  emit("update:isOnHover", false);

  emit("dragleave", e);
}

function onDragEnd(e: DragEvent) {
  emit("dragend", e);
}

function onClick(e: MouseEvent) {
  emit("click", e);
}
</script>
<template>
  <span
    @drop="onDrop"
    @dragenter="onDragEnter"
    @dragleave="onDragLeave"
    @dragover="onDragOver"
    @dragend="onDragEnd"
    @click="onClick"
  >
    <slot />
  </span>
</template>
