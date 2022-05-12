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
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});

	// Refs
	const audioRef = React.useRef(null);

	// Event Handlers
	const timeUpdateHandler = e => {
		const currentTime = e.target.currentTime;
		const duration = e.target.duration;

		setSongInfo({ ...songInfo, currentTime, duration });
	};

	return (
		<div>
			<Song currentSong={currentSong} />
			<Player
				audioRef={audioRef}
				currentSong={currentSong}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				songInfo={songInfo}
				setSongInfo={setSongInfo}
			/>
			<Library
				audioRef={audioRef}
				songs={songs}
				setSongs={setSongs}
				setCurrentSong={setCurrentSong}
				isPlaying={isPlaying}
			/>

			<audio
				ref={audioRef}
				onLoadedMetadata={timeUpdateHandler}
				onTimeUpdate={timeUpdateHandler}
				src={currentSong.audio}
			></audio>
		</div>
	);
}

export default App;
