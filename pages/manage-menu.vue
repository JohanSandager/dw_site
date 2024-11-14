<template>
  <div class="page-background flex items-center flex-col">
    <div v-if="isLoading">
      <h1>Loading...</h1>
    </div>
    <div v-else class="flex flex-col max-w-96">
      <h1>Manage Menu</h1>
      <div v-for="category in categories" class="pb-2">
        <EditCategory :category="category"></EditCategory>
        <div v-for="item in items">
          <div v-if="item.category == category['id']">
            <EditItem :item="item"></EditItem>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isLoading = ref(true);
const store = useMenuDataStore();
const { items, categories } = storeToRefs(store);

const fetchData = async () => {
  isLoading.value = true;
  try {
    await store.fetchMenuData();
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
