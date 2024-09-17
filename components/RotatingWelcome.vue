<template>
  <div class="rotating-welcome">
    <Transition name="slide">
      <h1 class="text-3xl font-bold text-primary" :key="options[currentIndex]">
        {{ options[currentIndex] }}
      </h1>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
const currentIndex = ref(0);
const options = [
  "Velkommen til",
  "Welcome to",
  "Vælkomin til",
  "Välkommen till",
  "Willkommen bei",
];

onMounted(() => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % options.length;
  }, 5000);
});
</script>

<style>
.rotating-welcome {
  position: relative;
  width: 100%;
  height: 2rem;
  overflow: hidden;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 3s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}
</style>
