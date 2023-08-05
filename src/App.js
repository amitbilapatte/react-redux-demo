import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import BurgerContainer from "./components/BurgerContainer";
import BurgersContainer from "./components/BurgersContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <BurgerContainer />
        <BurgersContainer />
      </div>
    </Provider>
  );
}

export default App;
