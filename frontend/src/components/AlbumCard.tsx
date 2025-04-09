import React from 'react';
import { Album } from '../App';

interface AlbumCardProps {
  album: Album;
  toggleFavorite: () => void;
  onEdit?: () => void;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album, toggleFavorite, onEdit }) => {
  const { title, artist, year, favoriteTrack, rating, isFavorite, coverUrl } = album;
  
  // Handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/default-album-cover.png'; // Fallback to default image
  };
  
  return (
    <div className="album-card">
      <div className="album-cover">
        {coverUrl ? (
          <img 
            src={coverUrl} 
            alt={`${title} by ${artist}`} 
            className="album-image"
            onError={handleImageError}
          />
        ) : (
          <div className="album-placeholder">Album Cover</div>
        )}
        <button 
          className={`favorite-btn ${isFavorite ? 'is-favorite' : 'not-favorite'}`}
          onClick={toggleFavorite}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <span>★</span>
        </button>
        
        {/* Edit button */}
        <button 
          className="edit-btn"
          onClick={onEdit}
          aria-label="Edit album"
        >
          <span>✏️</span>
        </button>
      </div>
      <div className="album-info">
        <div className="title">
          <span>Title:</span> {title}
        </div>
        <div className="artist">
          <span>Artist:</span> {artist}
        </div>
        <div className="year">
          <span>Year:</span> {year}
        </div>
        <div className="favorite-track">
          <span>Favorite track:</span> {favoriteTrack}
        </div>
        <div className="rating">
          <span>Rating:</span> {rating}/10
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
