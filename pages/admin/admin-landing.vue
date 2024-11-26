<template>
  <div class="page-background flex items-center flex-col h-screen">
    <h1 class="text-5xl font-bold text-primary mt-5 mb-5">Bar Command</h1>
    <div class="flex flex-row justify-between gap-4">
      <NuxtLink
        class="drop-shadow-2xl bg-black text-secondary bg-primary active:bg-secondary active:text-primary active:border-primary active:border-2 border-transparent rounded-xl px-4 py-1"
        to="/admin/manage-menu"
        >Manage Menu</NuxtLink
      >
      <NuxtLink
        class="drop-shadow-2xl bg-black text-secondary bg-primary active:bg-secondary active:text-primary active:border-primary active:border-2 border-transparent rounded-xl px-4 py-1"
        to="/admin/taking-inventory"
        >Optælling</NuxtLink
      >
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
