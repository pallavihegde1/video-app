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
    // yt search api
    YTSearch({key: API_KEY, term: 'bigboss'}, (videos) => {
       this.setState({videos: videos, selected_video: videos[0]})
    });
  }

  render() {
    return (
      <div className="App">
        <a className="waves-effect waves-light btn">Stuff</a>
        <SearchComponent/>
        <VideoDetail video={this.state.selected_video }/>
        <VideoList videos={this.state.videos} onVideoSelect={(selectedVideo) => this.setState({selected_video: selectedVideo})}/>
      </div>
    );
  }
}

export default App;
