import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserLocationState {
  addresses: string[];
  activeAddress: string;
  setAddress: (addr: string) => void;
  setActiveAddress: (addr: string) => void;
  removeAddress: (addr: string) => void;
  editAddress: (oldAddr: string, newAddr: string) => void;
}

export const useLocationStore = create<UserLocationState>()(
  persist(
    (set) => ({
      addresses: [],
      activeAddress: "",

      setAddress: (addr: string) =>
        set((state) => {
          if (
            state.addresses.some((a) => a.toLowerCase() === addr.toLowerCase())
          )
            return {};
          const newAddresses = [addr, ...state.addresses];
          return {
            addresses: newAddresses,
            activeAddress: addr,
          };
        }),

      setActiveAddress: (addr: string) => set(() => ({ activeAddress: addr })),

      removeAddress: (addr: string) =>
        set((state) => {
          const filtered = state.addresses.filter((a) => a !== addr);
          const isActiveRemoved = state.activeAddress === addr;
          return {
            addresses: filtered,
            activeAddress: isActiveRemoved
              ? filtered[0] || ""
              : state.activeAddress,
          };
        }),

      editAddress: (oldAddr: string, newAddr: string) =>
        set((state) => {
          if (
            !state.addresses.includes(oldAddr) ||
            state.addresses.some(
              (a) => a.toLowerCase() === newAddr.toLowerCase(),
            )
          ) {
            return {};
          }
          const newAddresses = state.addresses.map((a) =>
            a === oldAddr ? newAddr : a,
          );
          return {
            addresses: newAddresses,
            activeAddress:
              state.activeAddress === oldAddr ? newAddr : state.activeAddress,
          };
        }),
    }),
    {
      name: "location-store",
      partialize: (state) => ({
        addresses: state.addresses,
        activeAddress: state.activeAddress,
      }),
      // getStorage: () => sessionStorage,
    },
  ),
);

// Selectors / hooks
export const useAddresses = () => useLocationStore((s) => s.addresses);
export const useActiveAddress = () => useLocationStore((s) => s.activeAddress);
export const useSetAddress = () => useLocationStore((s) => s.setAddress);
export const useSetActiveAddress = () =>
  useLocationStore((s) => s.setActiveAddress);
export const useRemoveAddress = () => useLocationStore((s) => s.removeAddress);
export const useEditAddress = () => useLocationStore((s) => s.editAddress);
