import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../contexts/FunctionContext";
import Navigator from "../navigation/Navigator";
import Footer from "../components/Footer";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigator />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
