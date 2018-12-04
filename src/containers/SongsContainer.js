import React, {Component} from 'react';
import SongsList from '../components/SongsList';
import GenreSelector from '../components/GenreSelector';

class SongsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      currentGenre: null
    };
    // bindings:
    this.handleGenreSelected = this.handleGenreSelected.bind(this);

  }

  componentDidMount() {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
     .then(response => response.json())
     .then(data => this.setState({songs: data.feed.entry}))
  }

  handleGenreSelected(genre) {
    this.setState({currentGenre: genre})
  }

  render() {
    return (
      <div>
        <h1>top 20</h1>
        <GenreSelector songs={this.state.songs}
                       onGenreSelected={this.handleGenreSelected}/>
        <SongsList songs={this.state.songs} genre={this.state.currentGenre}/>
      </div>
    )
  }

}


export default SongsContainer;
