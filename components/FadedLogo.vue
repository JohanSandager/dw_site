<template>
  <div
    class="fixed bottom-0 z-0"
    :style="{
      transform: `translateX(${translateX}%) translateY(${translateY}%)`,
    }"
  >
    <img
      style="pointer-events: none"
      draggable="false"
      class="opacity-25 object-cover w-full h-full"
      src="/public/DW_logo_transparent.png"
    />
  </div>
</template>

<script setup lang="ts">
const translateX = useState("translateX", () => -40);
const translateY = useState("translateY", () => 40);

onMounted(() => {
  window.addEventListener("scroll", () => {
    translateX.value = -40 + scrollY / 10;
    translateY.value = 40 - scrollY / (window.innerWidth / 160);
  });
});
</script>
