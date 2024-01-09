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
  },
});

export const { setUserSignUp } = signUpSlice.actions;
export default signUpSlice.reducer;