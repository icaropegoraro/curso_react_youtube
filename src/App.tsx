import { BrowserRouter } from "react-router-dom";
import AppRoutes from './routes/index'; // sem { } porque você está usando export default

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
