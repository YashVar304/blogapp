import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../store/authSlice"
const store = configureStore({
   reducer:AuthReducer 
})

export default store;