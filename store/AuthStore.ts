import { create } from "zustand";

type userDetailsType = {
  name: string;
  email: string;
  profilePicture: any;
};

interface AuthState {
  authToken: string | null;
  userDetails: userDetailsType | null;
  changeAuthState: (auth: {
    authToken?: string | null;
    userDetails?: userDetailsType | null;
  }) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  authToken: null,
  userDetails: null,
  changeAuthState: (auth) =>
    set((state) => ({
      authToken:
        auth.authToken !== undefined ? auth.authToken : state.authToken,
      userDetails:
        auth.userDetails !== undefined ? auth.userDetails : state.userDetails,
    })),
}));
