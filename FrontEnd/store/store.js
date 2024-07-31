import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices.js";
const store=configureStore({
    reducer:{
        addUser:userSlice.reducer
    } 
})
export {store}  
