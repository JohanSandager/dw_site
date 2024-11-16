<template>
  <div
    v-if="isPrompting"
    class="z-50 fixed flex-col text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-secondary border-[1px] rounded-md p-10"
  >
    <div v-if="isLoading">
      <Loading></Loading>
    </div>
    <div v-else>
      <p class="text-6xl">‼️</p>
      <p>Are You Sure that you want to delete {{ item.name }}?</p>
      <div class="flex flex-row justify-evenly">
        <button @click="deleteItem">Yes</button>
        <button @click="toggleIsPrompting">No</button>
      </div>
    </div>
  </div>
  <div
    v-else
    @click="toggleIsPrompting"
    class="border-[1px] rounded-md text-center active:bg-primary"
  >
    <p>Delete</p>
  </div>
</template>

<script lang="ts" setup>
import type { MenuItem } from "~/types/menu";

const props = defineProps<{ item: MenuItem }>();
const isPrompting = ref(false);
const isLoading = ref(false);

const store = useMenuDataStore();

const toggleIsPrompting = () => (isPrompting.value = !isPrompting.value);

const deleteItem = async () => {
  isLoading.value = true;
  try {
    await store.deleteItem(props.item);
  } catch (err) {
  } finally {
    isLoading.value = false;
    toggleIsPrompting();
  }
};
</script>

<style></style>
