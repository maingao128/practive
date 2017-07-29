import React from "react";
import ReactDOM from "react-dom";
import Index from "./components";
import createStores from "../../mods/stateManager";
import reducers from "./mods/reducers";

// just for example
const state = {
	tab1: [],
	tab2: [],
	infos: []
};

const App = createStores(reducers, state)(Index);

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
