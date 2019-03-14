import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Redux from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ReduxThunk from "redux-thunk";
import Theme from "./theme/ThemeWrapper";
import rootReducer from "./reducers";
import App from "./App";

const store = Redux.createStore(
  rootReducer,
  Redux.applyMiddleware(ReduxThunk as Redux.Middleware)
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
