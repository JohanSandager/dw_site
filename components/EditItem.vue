<template>
  <div class="flex justify-between mt-2 p-2 border-[1px] rounded-md">
    <div class="flex">
      <div class="flex flex-col mr-1">
        <p v-if="item.weight > 1" @click="decrementWeight">⬆️</p>
        <p v-else class="opacity-45">⬆️</p>
        <p @click="incrementWeight">⬇️</p>
      </div>
      <div class="flex-col">
        <EditItemName :item="item"></EditItemName>
        <MenuItemDescription
          :description="item.description"
        ></MenuItemDescription>
      </div>
    </div>
    <div class="flex flex-col">
      <EditItemPrice :item="item"></EditItemPrice>
      <DeleteButton :item="item"></DeleteButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { MenuItem } from "~/types/menu";

const props = defineProps<{ item: MenuItem }>();
const store = useMenuDataStore();

const incrementWeight = () => {
  const item = props.item;
  store.incrementWeight(item.id, item.weight, item.category);
};

const decrementWeight = () => {
  const item = props.item;
  store.decrementWeight(item.id, item.weight, item.category);
};
</script>

<style></style>
