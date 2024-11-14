<template>
  <div v-if="!isEditing" class="flex">
    <MenuItemName :name="item.name" class="mr-4"></MenuItemName>
    <button @click="toggleEdit">Edit</button>
  </div>

  <div v-if="isEditing" class="flex">
    <input placeholder="New Title" v-model="newTitle" class="mr-4" />
    <button @click="saveEdit" class="mr-2">Save</button>
    <button @click="toggleEdit">Cancel</button>
  </div>
</template>

<script lang="ts" setup>
import type { MenuItem } from "~/types/menu";

const props = defineProps<{ item: MenuItem }>();

const isEditing = ref(false);
const newTitle = ref("");
const store = useMenuDataStore();

const toggleEdit = () => (isEditing.value = !isEditing.value);
const saveEdit = async () => {
  toggleEdit();
  await store.updateItemName(props.item.id, newTitle.value);
  newTitle.value = "";
};
</script>

<style></style>
