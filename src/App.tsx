import { FC as FunctionalComponent } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";

const App: FunctionalComponent = () => {
  const store = createStore(reducers);

  return <Provider store={store}>Hello World</Provider>;
};

export default App;
