import video from "../data/video.js";

import React from "react"
import VideoDetails from "./VideoDetails"

import vi from "date-fns/esm/locale/vi/index.js";

function App() {
  console.log("Here's your data:", video);

  return (

    <>
      <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      </div>
      <VideoDetails 
      title={video.title} 
      views={video.views} 
      createdAt={video.createdAt}
      upvotes={video.upvotes}
      downvotes={video.downvotes}
      comments={video.comments}
      />

      {/* <Comments /> */}
    </>
  );
}

export default App;
