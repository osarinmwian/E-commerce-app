import { createSlice } from "@reduxjs/toolkit";



 const signupInitState =
  {
userName: "",
email: "",
location: "",
password:"",

  }
 
const signUpSlice = createSlice({
  name: "userSignup",
  initialState: signupInitState,
  reducers: {
    setUserSignUp: (state, action) => {
        return { ...state, ...action.payload };
    },
    resetSignUpData: (state) => {
      return {};
     },
  },
});

export const { setUserSignUp, resetSignUpData} = signUpSlice.actions;
export default signUpSlice.reducer;