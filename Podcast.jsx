import React from 'react';

function Podcast({ season, episode, episodeTitle, genre }) {
  const podcastStyle = {
    border: '1px solid #007BFF',
    padding: '15px',
    margin: '10px 0',
    backgroundColor: '#e9f7ff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  };

  return (
    <div style={podcastStyle} className="podcast-card">
      <h3>{episodeTitle}</h3>
      <p>
        {season
          ? `Season ${season}, Episode ${episode}`
          : `Episode ${episode}`}
      </p>
      <p>Genre: {genre}</p>
    </div>
  );
}

export default Podcast;