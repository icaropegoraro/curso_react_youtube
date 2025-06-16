import { BrowserRouter } from "react-router-dom";
import AppRoutes from './routes/index'; // sem { } porque você está usando export default
import { ThemeProvider } from "@mui/material"
import { DarkTheme } from "./shared/themes";

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
