import React from 'react';

const SongRow = (props) => {

  return (
    <div className="song">
      <li>n.{props.chartPosition}: {props.title} by {props.author}</li>
    </div>
  )
}

export default SongRow;
