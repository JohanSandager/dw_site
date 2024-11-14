<template>
  <div v-if="!isEditing" class="flex items-start">
    <MenuItemPrice :price="item.price" class="mr-4"></MenuItemPrice>
    <button @click="toggleEdit">Edit</button>
  </div>
  <div v-if="isEditing" class="flex">
    <input placeholder="New Price" v-model="newPrice" class="mr-4" />
    <button @click="saveEdit" class="mr-2">Save</button>
    <button @click="toggleEdit">Cancel</button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ item: { id: number; price: number } }>();

const isEditing = ref(false);
const newPrice = ref(props.item.price);
const store = useMenuDataStore();

const toggleEdit = () => (isEditing.value = !isEditing.value);
const saveEdit = async () => {
  toggleEdit();
  await store.updateItemPrice(props.item.id, newPrice.value);
  newPrice.value = props.item.price;
};
</script>

<style></style>
