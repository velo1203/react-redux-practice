import { createSlice } from "@reduxjs/toolkit";

const initialvalue = { name: "", age: 0, email: "" };

export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialvalue },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = initialvalue;
        },
    },
});

export default userSlice.reducer;
export const { login, logout } = userSlice.actions;
