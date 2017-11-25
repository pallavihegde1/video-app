import React, {Component} from 'react';
import VideoListItem from './video_list_item'

class VideoList extends Component {
  render(){
     const VideoList = this.props.videos.map((video,index) => (
       <li  key={index}> <VideoListItem video={video}/> </li>
    ))
    return(
      <div>
        <span> Total Number of videos: {this.props.videos.length}</span>
        <ul className="collection">
            {VideoList}
        </ul>
      </div>
    );
  }
}

export default VideoList
