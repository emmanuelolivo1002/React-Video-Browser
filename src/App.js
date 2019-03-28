import React, { Component } from "react";

// Components
import SearchBar from "./components/SearchBar";

class App extends Component {
  onTermSubmit = term => {};

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
