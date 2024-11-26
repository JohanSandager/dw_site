import { defineStore } from "pinia";
import type { InventoryItem } from "~/types/inventoryItem";

export const useInventoryStore = defineStore({
  id: "inventoryStore",
  state: () => ({
    categories: [],
    items: [] as InventoryItem[],
  }),
  actions: {
    async getInventoryData() {
      await this.fetchItems();
      await this.fetchCategories();
    },
    async fetchItems() {
      const supabase = useSupabaseClient();

      const response = await supabase
        .from("inventory")
        .select()
        .order("id", { ascending: true });
      if (response.error) throw response.error;

      const items = response.data;
      this.items = items;
    },

    async fetchCategories() {
      const supabase = useSupabaseClient();

      const response = await supabase
        .from("inventory_categories")
        .select()
        .order("weight", { ascending: true });

      if (response.error) throw response.error;

      this.categories = response.data;
      console.log(this.categories);
    },
    async updateCurrentCount(item: InventoryItem, newValue: number) {
      const supabase = useSupabaseClient();
      const response = await supabase
        .from("inventory")
        .update({ current_count: newValue })
        .eq("id", item.id);
      this.fetchItems();
    },
  },
});
