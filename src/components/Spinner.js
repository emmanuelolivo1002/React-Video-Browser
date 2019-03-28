import React from "react";
import "./Spinner.scss";

const Spinner = () => {
  return (
    <div class="ui segment spinner">
      <div class="ui active inverted dimmer">
        <div class="ui text big loader">Loading...</div>
      </div>
      <p />
    </div>
  );
};

export default Spinner;
