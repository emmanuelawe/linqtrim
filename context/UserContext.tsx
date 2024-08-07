'use client'

import { createContext, useContext } from "react";

interface UserContextType {
  user: any; // Replace with actual user type
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ user: any; children: React.ReactNode }> = ({ user, children }) => {
  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
