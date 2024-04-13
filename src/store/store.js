import React from "react";
import userReducer from "./user";
import { configureStore } from "@reduxjs/toolkit";
export default configureStore({
    reducer: {
        user: userReducer,
    },
});
