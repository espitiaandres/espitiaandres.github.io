import { useState, useMemo, createContext } from "react";

export const DarkModeContext = createContext<{
  isDarkMode: boolean;
  setIsDarkMode: (theme: boolean) => void;
}>({
  isDarkMode: false,
  setIsDarkMode: () => {},
});

export default function DarkModeProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const defaultDarkMode = useMemo(() => {
    return JSON.parse(localStorage?.getItem("theme") || "false");
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(defaultDarkMode);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
