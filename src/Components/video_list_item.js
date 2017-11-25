import React, {Component} from 'react';

class VideoListItem extends Component {
  render(){
    const imageUrl = this.props.video.snippet.thumbnails.default.url;
    const Title = this.props.video.snippet.title;
    console.log(Title);
    console.log(this.props)
    return(
      <div className="row" onClick={()=> this.props.onVideoSelect(this.props.video) }>
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image">
              <img src={imageUrl} />
              <span className="card-title">{Title}</span>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoListItem
