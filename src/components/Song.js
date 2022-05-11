import React from "react";
import cover from "./../assets/cover.png";

const Song = props => {
	// destructuring props
  const { currentSong } = props;
  
	return (
		<div className="song-container">
			<img src={cover} alt={currentSong.name}></img>
			<h2>{currentSong.name}</h2>
			<h3>{currentSong.artist}</h3>
		</div>
	);
};

export default Song;
