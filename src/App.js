import React, { useState } from "react";

// Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";

// Import Data
import data from "./data";

// Import Styles
import "./styles/app.scss";

function App() {
	// State
	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);

	return (
		<div>
			<Song currentSong={currentSong} />
			<Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Library songs={songs} setCurrentSong={setCurrentSong}/>
		</div>
	);
}

export default App;
