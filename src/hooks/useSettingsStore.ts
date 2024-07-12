import { create } from "zustand";

interface SettingsStore {
	showHeaderInfo: boolean;
	setShowHeaderInfo: (showHeaderInfo: boolean) => void;
}

export const useSettingsStore = create<SettingsStore>((set) => ({
	showHeaderInfo: false,
	setShowHeaderInfo: (showHeaderInfo) => set({ showHeaderInfo }),
}));
