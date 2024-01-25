import { createSlice } from "@reduxjs/toolkit";


const appslice = createSlice({
    name : 'app',
    initialState : {
       user : null,
       playlist : [],
       playing : false, 
       tracks : [],
       token : null,
       artists : [],
       current : ""
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
        addTracks : (state , action)=>{
            state.tracks = action.payload;
        },
        addArtists : (state , action)=>{
            state.artists = action.payload;
        },
        setCurrent : (state , action)=>{
            state.current = action.payload;
        },
        }
    
})

export default appslice.reducer
export const {addUser , addToken , addTracks , addPlaylist , addArtists , setCurrent} = appslice.actions