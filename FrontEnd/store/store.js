import { configureStore } from "@reduxjs/toolkit";
import { searchSlice, userSlice } from "./slices.js";
import { MovieSlice } from "./slices.js";
const store=configureStore({
    reducer:{
        addUser:userSlice.reducer,
        movie:MovieSlice.reducer,
        search:searchSlice.reducer
    } 
})
export {store}  
