import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchComponent from './Components/search'
import YTSearch from 'youtube-api-search';
import VideoList from './Components/video_list.js'
import VideoDetail from './Components/video_detail.js'

const API_KEY = "AIzaSyDeHXoOBDAFaWiE8dgVwJW9L3WYu_0EM_Q"

class App extends Component {
  constructor(props){
    super(props);

    this.state = {videos: [], selected_video: null};
    this.videoSearch('surfboards');
    // yt search api
  }

  videoSearch = (term) => {
    YTSearch({key: API_KEY, term: term}, (videos) => {
       this.setState({videos: videos, selected_video: videos[0]})
    });
  }

  render() {
    return (
      <div className="App">
        <a className="waves-effect waves-light btn">Stuff</a>
        <SearchComponent OnSearchChange={(term) => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selected_video }/>
        <VideoList videos={this.state.videos} onVideoSelect={(selectedVideo) => this.setState({selected_video: selectedVideo})}/>
      </div>
    );
  }
}

export default App;
