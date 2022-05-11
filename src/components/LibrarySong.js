import React from "react";

const LibrarySong = props => {
	const { song, songs, setCurrentSong, id } = props;

	const songSelectHandler = () => {
		// const selectedSong = songs.find(song => song.id === id);
		// setCurrentSong(prevSong => selectedSong);
		setCurrentSong(prevSong => song);
	};

	return (
		<div onClick={songSelectHandler} className="library-song">
			<img src={song.cover} alt={song.name} />

			<div className="song-description">
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
};

export default LibrarySong;
