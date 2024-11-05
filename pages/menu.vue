<template>
  <div class="page-background flex items-center flex-col">
    <h1 class="text-5xl font-bold text-primary mt-5 mb-5">Menu</h1>
    <p v-if="data == null">No Data</p>
    <div v-else class="flex flex-col w-96">
      <div v-for="category in data!['categories']" class="pb-2">
        <h2 class="text-3xl font-bold text-primary">{{ category["name"] }}</h2>
        <div v-for="item in data!['items']">
          <div
            v-if="item.category == category['id']"
            class="flex justify-between"
          >
            <div>
              <p class="text-lg">{{ item.name }}</p>
              <p class="text-xs max-w-72">{{ item.description }}</p>
            </div>
            <p>{{ item.price }} kr</p>
          </div>
        </div>
      </div>
    </div>
    <div class="h-[50vh]"></div>
  </div>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient();

const { data, status, error, refresh, clear } = useAsyncData(
  "items",
  async () => {
    const { data: items } = await supabase
      .from("items")
      .select("name, description, price, category");

    const { data: categories } = await supabase.from("categories").select();

    return {
      items: items,
      categories: categories,
    };
  }
);
</script>

<style></style>
