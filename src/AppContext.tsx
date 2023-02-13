import { createContext, useState } from "react";

/* export interface IappContext {
  theme: string;
  currency: string;
  toggleTheme?: () => void;
  setCurrency?: React.Dispatch<React.SetStateAction<string>>;
} */

const defaultState = {
  theme: "light",
  currency: "USD",
};

const AppContext = createContext<any>(defaultState);

const AppProvider = (props: any) => {
  const [theme, setTheme] = useState("light");
  const [currency, setCurrency] = useState("USD");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const value = {
    theme,
    currency,
    toggleTheme,
    setCurrency,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider, defaultState };
