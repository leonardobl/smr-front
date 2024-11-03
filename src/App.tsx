import { ThemeProvider } from "styled-components";
import { Theme } from "./Global/Theme";
import { ContextProvider } from "./Context/Context";
import { GlobalStyles } from "./Global/styles_global";
import { BrowserRouter, Routes } from "react-router-dom";
import { useProtectedRoutes } from "./Routes/ProtectedRouters/useProtected.routes";

function App() {
  const ProtectedRoutes = useProtectedRoutes();

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <ContextProvider>
          <BrowserRouter>
            <Routes>{ProtectedRoutes}</Routes>
          </BrowserRouter>
        </ContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
