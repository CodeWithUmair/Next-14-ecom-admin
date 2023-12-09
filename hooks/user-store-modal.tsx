import { create } from "zustand";

type userStoreModalStore = {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void,
}

export const useStoreModal = create<userStoreModalStore>((set) => ({
    isOpen: false,
    onOpen: () => {set({isOpen: true})},
    onClose: () => {set({isOpen: false})},
}))