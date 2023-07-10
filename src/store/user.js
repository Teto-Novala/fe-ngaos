"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    role: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setRole: (state, action) => {
            state.role = action.payload;
        },
    },
});

export const getRole = (state) => state.user.role;

export default userSlice.reducer;
