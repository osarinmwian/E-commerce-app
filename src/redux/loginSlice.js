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
   logoutUser: () => {
     return loginInitState;
   },
   reset: state => loginInitState,
 },
});

export const { setUserLogin, logoutUser } = loginSlice.actions;

export const rootReducer = (state, action) => {
 if (action.type === 'userLogin/logoutUser') {
   state = undefined;
 }
 return loginSlice.reducer(state, action);
};

