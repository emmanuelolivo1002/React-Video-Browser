import React, { Component } from "react";
import youtube from "./apis/youtube";

// Components
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: ""
  };

  // Get videos from youtube API and set the state when user submits search bar
  onTermSubmit = async term => {
    const res = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({ videos: res.data.items });
  };

  // Show the video details when a video from the list is clicked
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
