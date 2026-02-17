import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "@/types";

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  isCheckingOut: boolean;
  checkoutError: string | null;
  addItem: (item: CartItem) => void;
  removeItem: (slug: string) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  setCheckingOut: (v: boolean) => void;
  setCheckoutError: (e: string | null) => void;
  total: () => number;
  count: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      isCheckingOut: false,
      checkoutError: null,

      addItem: (item) => {
        const exists = get().items.some((i) => i.slug === item.slug);
        if (!exists) {
          set((state) => ({ items: [...state.items, item] }));
        }
      },

      removeItem: (slug) => {
        set((state) => ({
          items: state.items.filter((i) => i.slug !== slug),
        }));
      },

      clearCart: () => set({ items: [] }),

      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      setCheckingOut: (v) => set({ isCheckingOut: v }),
      setCheckoutError: (e) => set({ checkoutError: e }),

      total: () => get().items.reduce((sum, item) => sum + item.price, 0),
      count: () => get().items.length,
    }),
    {
      name: "skillwire-cart",
      partialize: (state) => ({ items: state.items }),
    }
  )
);
