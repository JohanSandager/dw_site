<template>
  <div class="absolute top-[92%]" :style="{ opacity: `${opacity}` }">
    <Transition name="pop-out">
      <p v-if="!scrolled" class="text-5xl">️⬇️</p>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
var scrolled = ref(false);
var opacity = useState("opacity", () => 1);
onMounted(() => {
  window.addEventListener("scroll", () => {
    scrolled.value = scrollY >= 10 ? true : false;
  });
});
</script>

<style>
.pop-out-enter-active {
  animation: bounce-in 1s;
}

.pop-out-leave-to {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
