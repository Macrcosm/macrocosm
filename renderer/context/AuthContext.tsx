import { useRouter } from "next/router";
import { FC, PropsWithChildren, createContext, useState } from "react";

export const AuthContext = createContext(
  {} as {
    authUser: object | null;
    loginUser: () => void;
    logoutUser: () => void;
  }
);

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const [authUser, setAuthUser] = useState<object | null>(() => ({}));

  const loginUser = () => {
    setAuthUser({
      name: "Alok Singh",
      username: "Alekoi",
    });
    router.replace("/");
  };

  const logoutUser = () => {
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        authUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
