import React, { useState, useEffect } from 'react';
import Song from './Song.jsx';
import Podcast from './Podcast.jsx';
import './Playlist.css';

function Playlist() {
  const [shuffledPlaylist, setShuffledPlaylist] = useState([]);

  const songs = [
    { title: 'Kesariya', artist: 'Arjit Singh', genre: 'Romantic', year: 2022 },
    { title: 'Brown Rang', artist: 'Honey Singh', genre: 'Disco-Pop', year: 2005 },
    { title: 'Mahal', artist: 'Lata Mangeshkar', genre: 'Patriotic ', year: 1949 },
  ];

  const podcasts = [
    { season: 1, episode: 1, episodeTitle: 'The Ranveer Show', genre: 'Education' },
    { episode: 2, episodeTitle: 'Echoes Of India: A History Podcast', genre: 'History' },
    { season: 2, episode: 1, episodeTitle: 'Season Premiere', genre: 'Business' },
  ];

  // Shuffle playlist on load
  useEffect(() => {
    const combined = [...songs, ...podcasts];
    const shuffled = combined.sort(() => Math.random() - 0.5);
    setShuffledPlaylist(shuffled);
  }, []);

  return (
    <div className="playlist-container">
      <header className="header">
        <h1>VANSHIKA's PLAYLIST</h1>
        <p>My favorite music and podcasts in one place</p>
      </header>
      <div className="content">
        {shuffledPlaylist.map((item, index) =>
          item.title ? (
            <Song
              key={index}
              title={item.title}
              artist={item.artist}
              genre={item.genre}
              year={item.year}
            />
          ) : (
            <Podcast
              key={index}
              season={item.season}
              episode={item.episode}
              episodeTitle={item.episodeTitle}
              genre={item.genre}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Playlist;