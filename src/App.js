import { Provider } from "react-redux";
import store from "./store";
import GameContainer from "./components/GameContainer";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GameContainer />
      </div>
    </Provider>
  );
}

export default App;
