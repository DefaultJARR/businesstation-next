import { create } from 'zustand';

export type SidebarStatus = 'collapsed' | 'open';

export const SIDEBAR_COLLAPSED_WIDTH = '20px';
export const SIDEBAR_OPPENED_WIDTH = '250px';

export type SidebarStore = {
  status: SidebarStatus;
  width: string;
  isHovered: boolean;
  open: () => void;
  collapse: () => void;
  toggleStatus: () => void;
  toggleHover: () => void;
};

export const useSidebarStore = create<SidebarStore>((set) => ({
  status: 'collapsed',
  width: SIDEBAR_COLLAPSED_WIDTH,
  isHovered: false,
  open: () => set({ status: 'open', width: SIDEBAR_OPPENED_WIDTH }),
  collapse: () => set({ status: 'collapsed', width: SIDEBAR_COLLAPSED_WIDTH }),
  toggleStatus: () => {
    const state = useSidebarStore.getState();
    state.status === 'open' ? state.collapse() : state.open();
  },
  toggleHover: () =>
    set((state) => {
      if (state.status === 'open') return state;
      return {
        isHovered: !state.isHovered,
        width:
          state.status === 'collapsed' && !state.isHovered
            ? SIDEBAR_OPPENED_WIDTH
            : SIDEBAR_COLLAPSED_WIDTH,
      };
    }),
}));
