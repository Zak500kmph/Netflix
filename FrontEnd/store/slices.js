import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"User",
    initialState:{
        user:null
    },
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload

        }
    }
})
const MovieSlice=createSlice({
    name:"movie"
    ,initialState:{
        favMovie:[],
        popular:[],
        topRated:[],
        airingToday:[]
    },
    reducers:{
        addFavMovie:(state,action)=>{
            state.favMovie=action.payload
        },
        addAiringToday:(state,action)=>{
            state.airingToday=action.payload
        },
        addPopular:(state,action)=>{
            state.popular=action.payload
        },
        addTopRated:(state,action)=>{
            state.topRated=action.payload
        }

    }
})
const searchSlice=createSlice({
    name:"Search",
    initialState:{
        search:false,
        display:null,
        trailer:null
    },
    reducers:{
        toggle:(state)=>{
           state.search=!(state.search)
        },
        display:(state,action)=>{
            state.display=action.payload
        },
        trailer:(state,action)=>{
            state.trailer=action.payload
        }

    }
})
export const userAction = userSlice.actions
const movieAction=MovieSlice.actions 
export const SearchAction=searchSlice.actions
export {movieAction}

export {userSlice,MovieSlice,searchSlice}