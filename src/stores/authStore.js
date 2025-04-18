import { create } from 'zustand';

export const useAuthStore = create((set) => ({
    userName: null,
    avatar: null,
    actionToken: null,
    isLogged: false,
    login: (userName, avatar, actionToken) => set(() => ({
        userName,
        avatar,
        actionToken,
        isLogged: true,
    })),
    logout: () => set(() => ({
        userName: null,
        avatar: null,
        actionToken: null,
        isLogged: false,  
    })),
}));