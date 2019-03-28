import React, { Component } from "react";
import youtube from "./apis/youtube";

// Components
import SearchBar from "./components/SearchBar";

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

  render() {
    const { videos } = this.state;
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        Found {videos.length} videos.
      </div>
    );
  }
}

export default App;
