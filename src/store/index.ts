import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import productApi from "../features/productSlice";

/* não importa o nome que vai aqui,  esse aquivo é o counterSlice
   mas por convenção usamos o nome da feature + Reducer 
   ex: counterReducer, postReducer etc...
DEPENDE
*/

const store = configureStore({
  reducer: {
    counter: counterReducer,
    [productApi.reducerPath]: productApi.reducer, //importação do reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
