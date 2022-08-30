import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
/* não importa o nome que vai aqui,  esse aquivo é o counterSlice
   mas por convenção usamos o nome da feature + Reducer 
   ex: counterReducer, postReducer etc...

*/

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
