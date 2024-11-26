<template>
  <div class="flex flex-row items-center justify-between w-full">
    <div class="mr-5">
      <h1>{{ item.item }}</h1>
    </div>

    <div class="flex flex-row">
      <button @click="decStock">➖</button>
      <div v-for="_ in item.current_count">
        <h1 class="text-3xl">🍺</h1>
      </div>
      <div v-for="_ in item.target - item.current_count">
        <h1 class="text-3xl">🫙</h1>
      </div>
      <button @click="incStock">➕</button>
    </div>
  </div>
</template>

import Loading from "./Loading.vue";
<script lang="ts" setup>
import type { InventoryItem } from "~/types/inventoryItem";

const isLoading = ref(true);
const props = defineProps<{ item: InventoryItem }>();
const store = useInventoryStore();

const fetchData = async () => {
  isLoading.value = true;
  try {
    await store.getInventoryData();
  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = false;
  }
};

const decStock = async () => {
  isLoading.value = true;
  try {
    await store.updateCurrentCount(props.item, props.item.current_count - 1);
  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = false;
  }
};

const incStock = async () => {
  isLoading.value = true;
  try {
    await store.updateCurrentCount(props.item, props.item.current_count + 1);
  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style></style>
