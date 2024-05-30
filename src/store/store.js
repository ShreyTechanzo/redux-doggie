import { configureStore } from "@reduxjs/toolkit";
import petReducer from "./pet/petStore"

const store = configureStore({
    reducer: {
        pet: petReducer
    },
});

export default store;