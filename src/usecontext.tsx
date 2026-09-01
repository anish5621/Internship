import { createContext, useContext } from "react";
import type { ReactNode } from "react";

interface UserContextType {
  username: string;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

function useUser(): UserContextType {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
}

interface UserProviderProps {
  children: ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
  return (
    <UserContext.Provider value={{ username: "Anish" }}>
      {children}
    </UserContext.Provider>
  );
}

function App() {
  return (
    <UserProvider>
      <Home />
    </UserProvider>
  );
}

function Home() {
  return <Profile />;
}

function Profile() {
  return <Data />;
}

function Data() {
  const { username } = useUser();
  return <h1>Nepal {username}</h1>;
}

export default App;