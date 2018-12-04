import React from 'react';
import SongRow from './SongRow';

const SongsList = (props) => {

  var songNodes = [];

  if(props.genre==null){

    songNodes = props.songs.map((song,index) => {
      return (
        <SongRow chartPosition={index+1}
                 key={index}
                 title={song["im:name"].label}
                 author={song["im:artist"].label}></SongRow>
      );
    });

    }else{

      const filteredSongNodes = props.songs.filter(song => song.category.attributes.term == props.genre);
      songNodes = filteredSongNodes.map((song,index) => {
        return (
          <SongRow chartPosition={index+1}
                   key={index}
                   title={song["im:name"].label}
                   author={song["im:artist"].label}></SongRow>
        );
      })
    }





  return (
    <div className="songs-list">
    <ul>
      {songNodes}
    </ul>
    </div>
  )
}

export default SongsList;
