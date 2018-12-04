import React from 'react';

const GenreSelector = (props) => {

// create unique array of genres

const genres = props.songs.map(song => song.category.attributes.term);

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
//

 const uniqueGenres = genres.filter( onlyUnique );
 console.log({uniqueGenres});

  // old version:
  // const options = props.songs.map((song,index) => {
  //   return (
  //     <option value={song.category.attributes.term} key={index}>{song.category.attributes.term}</option>
  //   )
  // })

  const options = uniqueGenres.map((genre,index) => {
    return (
      <option value={genre} key={index}>{genre}</option>
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
