import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import BurgerContainer from "./components/BurgerContainer";
import BurgersContainer from "./components/BurgersContainer";
import ItemContainer from "./components/ItemContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <ItemContainer cake />
        <ItemContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <BurgerContainer />
        <BurgersContainer />
      </div>
    </Provider>
  );
}

export default App;
