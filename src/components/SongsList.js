import React from 'react';
import SongRow from './SongRow';

const SongsList = (props) => {

  const songNodes = props.songs.map((song,index) => {
    return (
      <SongRow chartPosition={index+1}
               key={index}
               title={song.title.label}></SongRow>
    );
  });

  return (
    <div className="songs-list">
      {songNodes}
    </div>
  )
}

export default SongsList;
