import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchComponent from './Components/search'
import YTSearch from 'youtube-api-search';
import VideoList from './Components/video_list.js'

const API_KEY = "AIzaSyDeHXoOBDAFaWiE8dgVwJW9L3WYu_0EM_Q"

class App extends Component {
  constructor(props){
    super(props);

    this.state = {videos: []};
    // yt search api
    YTSearch({key: API_KEY, term: 'bigboss'}, (videos) => {
       this.setState({videos})
    });
  }

  render() {
    return (
      <div className="App">
        <a className="waves-effect waves-light btn">Stuff</a>
        <SearchComponent/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
