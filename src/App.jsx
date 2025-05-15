import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../contexts/FunctionContext";
import Navigator from "../navigation/Navigator";
import { Provider } from 'react-redux';
import { store } from "../redux/store";


function App() {
  return ( 
    <Provider store={store}>
    <AuthProvider>
    
      <BrowserRouter>
        <Navigator />
      </BrowserRouter>
     
    </AuthProvider>
    </Provider>
  );
}

export default App;
