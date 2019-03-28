import React from "react";
import Spinner from "./Spinner";

const VideoDetail = ({ video }) => {
  // If there is no video return loading div
  if (!video) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="ui embed">
        <iframe
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title="Video Player"
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
