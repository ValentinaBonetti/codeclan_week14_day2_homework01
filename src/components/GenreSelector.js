import React from 'react';

const GenreSelector = (props) => {

  const options = props.songs.map((song,index) => {
    return (
      <option value={song.category.attributes.term} key={index}>{song.category.attributes.term}</option>
    )
  })

  // handle selection
  function handleChange(event) {
    props.onGenreSelected(event.target.value);
  }

  return (
    <select id="genre-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">select genre</option>
      {options}
    </select>
  )

}

export default GenreSelector;
