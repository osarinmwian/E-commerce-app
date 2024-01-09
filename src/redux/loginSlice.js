import { createSlice, configureStore } from "@reduxjs/toolkit";

const loginInitState = {
 userName: "",
 email: "",
 location: "",
 password: "",
}

const loginSlice = createSlice({
 name: "userLogin",
 initialState: loginInitState,
 reducers: {
   setUserLogin: (state, action) => {
     return { ...state, ...action.payload };
   },
 },
});

export const { setUserLogin, } = loginSlice.actions;
export default loginSlice.reducer;


