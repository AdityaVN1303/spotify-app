import React from 'react'
import TrackList from './TrackList'
import ArtistList from './ArtistList'
import { useSelector } from 'react-redux'
import DefaultList from './DefaultList'

const ListComponent = () => {

  const tracks = useSelector((store)=> store?.app?.tracks);


  return (
    <>
    {
      tracks.length !== 0 ? 
      <>
      <ArtistList/>
      <TrackList/>
      </> : 
      <DefaultList/>
    }
    </>
  )
}

export default ListComponent