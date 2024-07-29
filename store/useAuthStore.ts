import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  authStatus: boolean;
  token: string | null;
  _id: string;
  addAuth: (token: string, _id: string) => void;
  removeAuth: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      authStatus: false,
      token: null,
      _id: "",
      addAuth: (token, _id) =>
        set({
          authStatus: true,
          token: token,
          _id: _id,
        }),
      removeAuth: () =>
        set({
          authStatus: false,
          token: null,
          _id: "",
        }),
    }),
    { name: "auth-storage" }
  )
);

export { useAuthStore };
