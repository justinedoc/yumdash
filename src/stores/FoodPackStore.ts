import { create } from "zustand";

interface FoodPack {
  id: string;
  name: string;
  quantity: number;
}

interface FoodPackActions {
  addFood: (food: FoodPack) => void;
  removeFood: (id: string) => void;
}

interface FoodPackStore {
  food: FoodPack[];
  actions: FoodPackActions;
}

const usePackStore = create<FoodPackStore>((set) => ({
  food: [],
  actions: {
    addFood: (food) => set((state) => ({ food: [...state.food, food] })),
    removeFood: (id) =>
      set((state) => ({ food: state.food.filter((item) => item.id !== id) })),
  },
}));

export const useFoods = () => usePackStore((state) => state.food);
export const useFoodActions = () => usePackStore((state) => state.actions);
