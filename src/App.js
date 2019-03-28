import React, { Component } from "react";
import youtube from "./apis/youtube";

// Components
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";

class App extends Component {
  state = {
    videos: []
  };

  // Get videos from youtube API and set the state when user submits search bar
  onTermSubmit = async term => {
    const res = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    console.log(res.data.items);
    this.setState({ videos: res.data.items });
  };

  // Show the video details when a video from the list is clicked
  onVideoSelect = video => {
    console.log("From App.js:", video);
  };

  render() {
    const { videos } = this.state;
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
      </div>
    );
  }
}

export default App;
