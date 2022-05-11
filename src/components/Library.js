import React from "react";
import LibrarySong from "./LibrarySong";

const Library = props => {
	const { songs, setCurrentSong } = props;
	return (
		<div className="library">
			<h2>Library</h2>

			<div className="library-songs">
				{songs.length &&
					songs.map(song => (
						<LibrarySong
							song={song}
							songs={songs}
							setCurrentSong={setCurrentSong}
							id={song.id}
							key={song.id}
						/>
					))}
			</div>
		</div>
	);
};

export default Library;
