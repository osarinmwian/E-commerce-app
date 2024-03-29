import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/slice";
import { useDispatch, useSelector } from "react-redux";
import signUpSlice from "../redux/signUpSlice";
import  loginSlice, { rootReducer } from "../redux/loginSlice";


export const store = configureStore({
  reducer: {
    products: productReducer, 
    signup: signUpSlice,
    login: loginSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(),
});
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;