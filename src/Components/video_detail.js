import React from 'react'


const VideoDetail = ({video})  => {

  if (!video)
  {
    return <div> Loading </div> ;
  }

  const videoId = video.id.videoId
  const url = `https://www.youtube.com/embed/${videoId}`
  
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <iframe src={url} > </iframe>
            <span className="card-title">{video.snippet.title}</span>
          </div>
          <div className="card-action">
            {video.snippet.description}
          </div>
        </div>
      </div>
    </div>
  );
}


export default VideoDetail;
