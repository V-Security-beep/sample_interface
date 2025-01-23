import React from 'react';

function Song({ title, artist, genre, year }) {
  const songStyle = {
    border: '1px solid #ccc',
    padding: '15px',
    margin: '10px 0',
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  };

  return (
    <div style={songStyle} className="song-card">
      <h3>{title}</h3>
      <p>Artist: {artist}</p>
      <p>Genre: {genre}</p>
      <p>Year: {year}</p>
    </div>
  );
}

export default Song;