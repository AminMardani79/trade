import React, { useCallback, useState } from "react";
// components
import { AppBarComponent } from "./components";
// mui
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
const App: React.FC = (): JSX.Element => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");
  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
    typography: {
      fontSize: 14,
    },
  });
  const handelDrawerToggle = useCallback(() => {}, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBarComponent handelDrawerToggle={handelDrawerToggle} />
    </ThemeProvider>
  );
};
export default App;
