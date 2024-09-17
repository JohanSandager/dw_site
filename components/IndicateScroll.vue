<template>
  <div
    class="absolute top-[92%] transition delay-[20ms]"
    :style="{ opacity: `${opacity}` }"
  >
    <p class="text-5xl">️⬇️</p>
  </div>
</template>

<script lang="ts" setup>
var opacity = useState("opacity", () => 1);
onMounted(() => {
  window.addEventListener("scroll", () => {
    scrollY >= 20 ? (opacity.value = 0) : (opacity.value = 1);
  });
});
</script>

<style></style>
