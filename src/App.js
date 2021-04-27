import Navbar from "./components/navbar/Navbar";
import Comment from "./components/comment/Comment";
import Player from "./components/player/Player";
import "./App.css";
import Recommendation from "./components/recommendation/Recommendation";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-container">
        <div className="yt-player-and-comment w-75 p-4">
          <Player />
          <Comment />
        </div>
        <div className="yt-video-reccomendation p-4">
          <Recommendation />
        </div>
      </div>
    </div>
  );
}

export default App;
