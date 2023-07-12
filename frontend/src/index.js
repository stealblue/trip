import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducer, { rootSaga } from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import App from "./App";
import { tempSetUser, check } from "./modules/auth/UserMod";
import { ModalProvider } from 'styled-react-modal'
// import { CookiesProvider } from "react-cookie";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

function loadUser() {
  try {
    const user = localStorage.getItem("USER");
    if (!user) return;
    store.dispatch(tempSetUser(JSON.parse(user)));
    store.dispatch(check());
  } catch (e) {
    console.log("localStorage is not working");
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

const rootNode = document.getElementById("root");

ReactDOM.createRoot(rootNode).render(
  <Provider store={store}>
		{/* <CookiesProvider> */}
    <BrowserRouter>
      <ModalProvider>
      <App />
      </ModalProvider>
    </BrowserRouter>
    {/* </CookiesProvider> */}
    </Provider>
);
