import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import SpotifyPlayer from "react-spotify-web-playback"

export default function Player({trackUri}) {
  const [play, setPlay] = useState(false)
  const token = useSelector((store)=>store?.app?.token);

  useEffect(() => setPlay(true), [trackUri])

  if (!token) return null
  return (
    <SpotifyPlayer
      token={token}
      showSaveIcon
      callback={state => {
        if (!state.isPlaying) setPlay(false)
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
    />
  )
}