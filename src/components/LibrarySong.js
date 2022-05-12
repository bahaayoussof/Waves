import React from "react";

const LibrarySong = props => {
	const { song, songs, setSongs, setCurrentSong, id, audioRef, isPlaying } = props;

	const songSelectHandler = () => {
		// const selectedSong = songs.find(song => song.id === id);
		// setCurrentSong(prevSong => selectedSong);
		setCurrentSong(prevSong => song);
		audioRef.current.play();

		// Add Active state to selected song
		const newSongs = songs.map(song => {
			if (song.id === id) return { ...song, active: true };
			else return { ...song, active: false };
		});
		setSongs(newSongs);

		if (isPlaying) {
			const playPromise = audioRef.current.play();
			if (playPromise !== undefined) {
				playPromise.then(audio => {
					audioRef.current.play();
				});
			}
		}
	};

	return (
		<div
			onClick={songSelectHandler}
			className={`library-song ${song.active ? "selected" : ""}`}
		>
			<img src={song.cover} alt={song.name} />

			<div className="song-description">
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
};

export default LibrarySong;
