<template>
  <div>
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts" setup>
const loadingStates = ["Loading", "Loading.", "Loading..", "Loading..."];
const text = ref(loadingStates[0]);
var index = 0;

onMounted(() => {
  setInterval(() => {
    text.value = loadingStates[index++ % loadingStates.length];
  }, 300);
});
</script>

<style></style>
