import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../contexts/FunctionContext";
import Navigator from "../navigation/Navigator";
import { CarritoProvider } from "../contexts/CarritoContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <CarritoProvider>
          <Navigator />
        </CarritoProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
