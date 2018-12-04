import React from 'react';

const SongRow = (props) => {

  return (
    <div className="song">
      <h4>{props.chartPosition} {props.title} </h4>
    </div>
  )
}

export default SongRow;
