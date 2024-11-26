<template>
  <div v-if="!isEditing" class="flex">
    <MenuItemName :name="item.name" class="mr-4"></MenuItemName>
    <button @click="toggleEdit">Edit</button>
  </div>

  <div
    v-if="isEditing"
    class="flex flex-col border border-dashed rounded-md p-1"
  >
    <input
      id="newTitle"
      placeholder="New Title"
      v-model="newTitle"
      class="border-b-[1px] border-dashed bg-secondary p-1 pl-2 focus:outline-none focus:shadow-md"
    />
    <div class="flex flex-row justify-evenly">
      <button @click="saveEdit">Save</button>
      <button @click="toggleEdit">Cancel</button>
    </div>
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
