<template>
  <div v-if="!isEditing" class="flex">
    <MenuCategory :category="category.name" class="pr-4"></MenuCategory>
    <button @click="toggleEdit">Edit</button>
  </div>
  <div v-if="isEditing" class="flex">
    <input placeholder="New Title" v-model="newTitle" class="mr-4" />
    <button @click="saveEdit" class="mr-2">Save</button>
    <button @click="toggleEdit">Cancel</button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ category: { id: number; name: string } }>();

const isEditing = ref(false);
const newTitle = ref("");
const store = useMenuDataStore();

const toggleEdit = () => (isEditing.value = !isEditing.value);
const saveEdit = async () => {
  toggleEdit();
  await store.updateCategoryName(props.category.id, newTitle.value);
  newTitle.value = "";
};
</script>

<style></style>
