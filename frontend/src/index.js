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
import { ModalProvider } from "styled-react-modal";
// import { persistStore } from 'redux-persist'
// import { createLogger } from "redux-logger";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
// const middlewares = [sagaMiddleware];

// sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(store)

// const notLogged = ["persist/PERSIST", "persist/REHYDRATE"];

// const logger = createLogger({
//   predicate: (getState, action) => !notLogged.includes(action.type),
// });

// if (process.env.NODE_ENV === "development") {
//   middlewares.push(logger);
// }

function loadUser() {
  const user = localStorage.getItem("USER");
  try {
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
    <BrowserRouter>
      <ModalProvider>
        <DndProvider backend={HTML5Backend}>
          <App />
        </DndProvider>
      </ModalProvider>
      </BrowserRouter>
  </Provider>
);
