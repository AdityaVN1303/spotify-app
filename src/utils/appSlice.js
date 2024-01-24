import { createSlice } from "@reduxjs/toolkit";


const appslice = createSlice({
    name : 'app',
    initialState : {
       user : null,
       playlist : [],
       playing : false, 
       item : null,
       token : null
    } ,
    reducers : {
        addUser : (state , action)=>{
            state.user = action.payload;
            },
        addToken : (state , action)=>{
            state.token = action.payload;
            },
        addPlaylist : (state , action)=>{
            state.playlist = action.payload;
            },
        }
    
})

export default appslice.reducer
export const {addUser , addToken , addPlaylist} = appslice.actions