import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userSlice from "./user";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

//wajib
const createNoopStorage = () => {
    return {
        getItem(_key) {
            return Promise.resolve(null);
        },
        setItem(_key, value) {
            return Promise.resolve(value);
        },
        removeItem(_key) {
            return Promise.resolve();
        },
    };
};

//storage configure
const storage =
    typeof window !== "undefined"
        ? createWebStorage("session")
        : createNoopStorage();

//name
const persistConfig = {
    key: "ngaos",
    storage,
};

// yg bener
const rootReducer = combineReducers({
    user: userSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    devTools: process.env.NODE_ENV !== "production",
    reducer: persistedReducer,
    middleware: [thunk],
});

export const persistor = persistStore(store);
