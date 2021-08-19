import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import { createLogger } from "redux-logger";
import createSagaMiddleware from 'redux-saga';
import thunk from "redux-thunk";
import rootSaga from "../sagas/rootSaga"

const persistConfig = {
  key: "root",
  storage,
};

let persistedReducer = persistReducer(persistConfig, rootReducer);
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const configStore = () => {
  // let store = createStore(rootReducer);
  // return store;

  let store = createStore(
    persistedReducer,
    applyMiddleware(createLogger(), thunk,sagaMiddleware)
  );

    // then run the saga
  sagaMiddleware.run(rootSaga)

  let persistedStore = persistStore(store);
  return { store, persistedStore };
};

export default configStore;
