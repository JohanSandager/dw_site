import type { MenuItem } from "~/types/menu";

export const useMenuDataStore = defineStore({
  id: "menuDataStore",
  state: () => ({
    categories: [],
    items: [] as MenuItem[],
  }),
  actions: {
    async fetchMenuData() {
      await this.fetchItems();
      await this.fetchCategories();
    },

    async fetchItems() {
      const supabase = useSupabaseClient();

      const response = await supabase
        .from("items")
        .select()
        .order("weight", { ascending: true });

      if (response.error) throw response.error;

      const items = response.data;
      this.items = items;
    },

    async fetchCategories() {
      const supabase = useSupabaseClient();

      const response = await supabase
        .from("categories")
        .select()
        .order("weight", { ascending: true });

      if (response.error) throw response.error;

      this.categories = response.data;
      console.log("Finished fetching Categories!");
    },

    async updateCategoryName(id: number, newName: string) {
      const supabase = useSupabaseClient();

      await supabase.from("categories").update({ name: newName }).eq("id", id);

      this.fetchCategories();
    },

    async updateItemName(id: number, newName: string) {
      const supabase = useSupabaseClient();

      await supabase.from("items").update({ name: newName }).eq("id", id);

      this.fetchItems();
    },
    async updateItemPrice(id: number, newPrice: number) {
      const supabase = useSupabaseClient();

      await supabase.from("items").update({ price: newPrice }).eq("id", id);

      this.fetchItems();
    },
    async incrementWeight(id: number, weight: number, category: number) {
      const supabase = useSupabaseClient();
      await supabase
        .from("items")
        .update({ weight: weight })
        .eq("category", category)
        .eq("weight", weight + 1);
      await supabase
        .from("items")
        .update({ weight: weight + 1 })
        .eq("id", id);

      this.fetchItems();
    },
    async decrementWeight(id: number, weight: number, category: number) {
      const supabase = useSupabaseClient();
      await supabase
        .from("items")
        .update({ weight: weight })
        .eq("category", category)
        .eq("weight", weight - 1);
      await supabase
        .from("items")
        .update({ weight: weight - 1 })
        .eq("id", id);

      this.fetchItems();
    },
    async newItem(item: MenuItem) {
      const supabase = useSupabaseClient();

      var count = await this.getCount(item.category);

      await supabase.from("items").insert({
        name: item.name,
        description: item.description,
        price: item.price,
        category: item.category,
        weight: count + 1,
      });

      this.fetchItems();
    },
    async deleteItem(item: MenuItem) {
      const supabase = useSupabaseClient();

      await supabase.from("items").delete().eq("id", item.id);

      this.fetchItems();
    },
    async getCount(category: number) {
      const supabase = useSupabaseClient();
      console.log("Category: ", category);
      var response = await supabase
        .from("items")
        .select()
        .eq("category", category);
      var count = response.data?.length;
      console.log("Count: " + count);

      return count;
    },
  },
});
