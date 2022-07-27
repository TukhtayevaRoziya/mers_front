import React from "react";
import ReactPlayer from "react-player";
import "./Videos.scss";
function Videos() {
  return (
    <div className="Videos container">
      <div className="wrapper">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=0uCzpRL0KHw"
          controls
        />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=nY1H9-FI4qs"
          controls
        />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ImrF81SNv7w"
          controls
        />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=tD47PK-o6Og"
          controls
        />
      </div>
    </div>
  );
}

export default Videos;
