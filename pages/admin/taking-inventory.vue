<template>
  <div class="page-background flex items-center flex-col min-h-screen">
    <h1 class="text-5xl font-bold text-primary mt-5 mb-5">Inventory</h1>
    <p v-if="isLoading">Loading...</p>
    <p v-else-if="items == undefined || categories == undefined">No data...</p>
    <div v-else class="flex flex-col">
      <div v-for="category in categories" class="pb-2">
        <MenuCategory :category="category['name']"></MenuCategory>
        <div v-for="item in items">
          <div v-if="item.category == category['id']" class="flex">
            <ItemStock :item="item"></ItemStock>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isLoading = ref(true);
const store = useInventoryStore();
const { items, categories } = storeToRefs(store);

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

onMounted(() => {
  fetchData();
});
</script>

<style></style>
