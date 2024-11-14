<template>
  <div class="page-background flex items-center flex-col">
    <NuxtLink
      class="text-5xl font-bold text-primary mt-5 mb-5"
      to="/manage-menu"
      >Menu</NuxtLink
    >
    <p v-if="isLoading">Loading...</p>
    <p v-else-if="items == undefined || categories == undefined">No data...</p>
    <div v-else class="flex flex-col max-w-96">
      <div v-for="category in categories" class="pb-2">
        <MenuCategory :category="category['name']"></MenuCategory>
        <div v-for="item in items">
          <div
            v-if="item.category == category['id']"
            class="flex justify-between"
          >
            <div>
              <MenuItemName :name="item.name"></MenuItemName>
              <MenuItemDescription
                :description="item.description"
              ></MenuItemDescription>
            </div>
            <MenuItemPrice :price="item.price"></MenuItemPrice>
          </div>
        </div>
      </div>
    </div>
    <div class="h-[10vh]"></div>
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
