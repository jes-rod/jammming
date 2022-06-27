
import React from "react";
import './App.css';
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../PlayList/PlayList";
import Spotify from "../../util/Spotify.js";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: "",
      playlistTracks: []
    };
    
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track){
    let newPlaylist = this.state.playlistTracks
    if (this.state.playlistTracks.find(thisTrack => thisTrack.id === track.id)){
      return;
    }
    else{
      newPlaylist.push(track);
      this.setState({playlistTracks: newPlaylist});
      console.log(this.state.playlistTracks);
    }
  };

  removeTrack(track){
    let newPlaylistTracks = this.state.playlistTracks.filter((value,index,arr) => {
      return value.id !== track.id ;
    })
    this.setState({playlistTracks: newPlaylistTracks});
  };

  updatePlaylistName(name){
    this.setState({playlistName: name});
  };

 async savePlaylist(){
    let trackURIs = this.state.playlistTracks.map(track => {
      return track.uri;
    })
    let playlistName = this.state.playlistName;
    await Spotify.savePlaylist(playlistName, trackURIs);
    this.setState({
      playlistName: "New Playlist",
      playlistTracks: []
    });
  };

 async search(term){
    var results = await Spotify.search(term);
    this.setState({searchResults: results});
  };

   check(){
    Spotify.check();
  }

  
  
  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} onCheck={this.check}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
