<template>
  <div
    v-if="!creatingNewItem"
    @click="toggleCreatingNewItem"
    class="flex justify-around mt-2 p-2 border-[1px] rounded-md active:bg-primary"
  >
    <p>+</p>
  </div>
  <div
    v-else
    class="flex flex-col items-center justify-around mt-2 p-2 border-[1px] rounded-md"
  >
    <input placeholder="Title" v-model="newTitle" class="mr-4" />
    <input placeholder="Description" v-model="newDescr" class="mr-4" />
    <input
      placeholder="Price"
      v-model="newPrice"
      class="mr-4"
      inputmode="decimal"
    />
    <select id="numberDropdown" v-model="selectedNumber">
      <option v-for="number in numbers" :key="number" :value="number">
        {{ number }}
      </option>
    </select>
    <div v-if="isLoading">
      <Loading></Loading>
    </div>
    <div class="flex flex-row" v-else>
      <button @click="createNewItem" class="mr-2">Submit</button>
      <button @click="toggleCreatingNewItem">Cancel</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { MenuItem } from "~/types/menu";
const store = useMenuDataStore();
const creatingNewItem = ref(false);
const newTitle = ref("");
const newDescr = ref("");
const newPrice = ref(0.0);
const numbers = [1, 2, 3, 4];
const selectedNumber = ref(numbers[0]);
const isLoading = ref(false);

const createNewItem = async () => {
  toggleIsLoading();
  const item: MenuItem = {
    id: 0,
    name: newTitle.value,
    description: newDescr.value,
    price: newPrice.value,
    category: selectedNumber.value,
    weight: 2,
  };
  try {
    await store.newItem(item);
  } finally {
    toggleIsLoading();
    resetData();
    toggleCreatingNewItem();
  }
};

const resetData = () => {
  newTitle.value = "";
  newDescr.value = "";
  newPrice.value = 0;
};

const toggleCreatingNewItem = () =>
  (creatingNewItem.value = !creatingNewItem.value);
const toggleIsLoading = () => (isLoading.value = !isLoading.value);
</script>

<style></style>
