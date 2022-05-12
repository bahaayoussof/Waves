import React from "react";
import LibrarySong from "./LibrarySong";

const Library = props => {
	const { songs, setSongs, setCurrentSong, audioRef, isPlaying } = props;
	return (
		<div className="library">
			<h2>Library</h2>

			<div className="library-songs">
				{songs.length &&
					songs.map(song => (
						<LibrarySong
							audioRef={audioRef}
							song={song}
							songs={songs}
							setSongs={setSongs}
							setCurrentSong={setCurrentSong}
							id={song.id}
							key={song.id}
							isPlaying={isPlaying}
						/>
					))}
			</div>
		</div>
	);
};

export default Library;
