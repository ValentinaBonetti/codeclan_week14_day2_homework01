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

  }

  componentDidMount() {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
     .then(response => response.json())
     .then(data => this.setState({songs: data.feed.entry}))
  }

  render() {
    return (
      <div>
        <h1>top 20</h1>
        <SongsList songs={this.state.songs}/>
      </div>
    )
  }

}


export default SongsContainer;
