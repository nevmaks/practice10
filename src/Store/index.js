import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from "../Reducer";
import thunk from "redux-thunk";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});
