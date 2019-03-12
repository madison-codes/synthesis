import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Theme from "./theme/ThemeWrapper";
import rootReducer from "./reducers";
import App from "./App";
import ReduxThunk from "redux-thunk";

function getMiddleware() {
  const middleware = [ReduxThunk];
  return middleware;
}

const store = createStore(
  rootReducer as any,
  applyMiddleware(...getMiddleware())
);

ReactDOM.render(
  <Provider store={store}>
    <Theme>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Theme>
  </Provider>,
  document.getElementById("root")
);
