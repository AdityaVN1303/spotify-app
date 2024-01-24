import Login from "./Login";
import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux';
import spotifyWebApi from 'spotify-web-api-js'
import Player from "./Player";
import {addToken , addUser , addPlaylist} from '../utils/appSlice'


const Body = ()=> {

  const [token, setToken] = useState(null);
  const dispatch = useDispatch();

  const spotify = new spotifyWebApi();

  useEffect(() => {
    const hash = window.location.hash;
    const tokenVal = window.location.hash && hash.substring(1).split('&').find((elem)=>elem.startsWith("access_token")).split('=')[1];
    // console.log(tokenVal);
    window.location.hash = "";

    if(tokenVal){
      setToken(tokenVal);
      dispatch(addToken(tokenVal));
      spotify.setAccessToken(tokenVal);
      spotify.getMe().then(
        function (userItem) {
        dispatch(addUser(userItem));
        }
      )
      spotify.getUserPlaylists().then(
        function (userItem) {
        dispatch(addPlaylist(userItem));
        }
      )
    }

  }, [])

  return (
    <div className="App">
      {
        token ? <Player/> :
     <Login/>
      }
    </div>
  );
}

export default Body;
