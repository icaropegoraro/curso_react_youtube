import { BrowserRouter } from "react-router-dom";
import AppRoutes from './routes/index'; // sem { } porque você está usando export default
import { ThemeProvider } from "@mui/material"
import { LightTheme } from "./shared/themes";

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
