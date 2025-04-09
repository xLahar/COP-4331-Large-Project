import React, { useState } from 'react';
import { Album } from '../App';

interface EditAlbumModalProps {
  album: Album;
  onClose: () => void;
  onSave: (album: Album) => void;
  onDelete: () => void;
}

const EditAlbumModal: React.FC<EditAlbumModalProps> = ({ 
  album,
  onClose, 
  onSave,
  onDelete 
}) => {
  const [title, setTitle] = useState(album.title);
  const [artist, setArtist] = useState(album.artist);
  const [year, setYear] = useState(album.year);
  const [favoriteTrack, setFavoriteTrack] = useState(album.favoriteTrack);
  const [rating, setRating] = useState(album.rating);
  const [coverUrl, setCoverUrl] = useState(album.coverUrl);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const updatedAlbum: Album = {
      ...album,
      title,
      artist,
      year,
      favoriteTrack,
      rating,
      coverUrl
    };
    
    onSave(updatedAlbum);
  };
  
  return (
    <div className="modal-overlay">
      <div className="edit-album-modal">
        <div className="modal-header">
          <h2>Edit Album</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="artist">Artist:</label>
            <input
              type="text"
              id="artist"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="year">Year:</label>
            <input
              type="text"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="favoriteTrack">Favorite Track:</label>
            <input
              type="text"
              id="favoriteTrack"
              value={favoriteTrack}
              onChange={(e) => setFavoriteTrack(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="rating">Rating (1-10):</label>
            <input
              type="number"
              id="rating"
              min="1"
              max="10"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="coverUrl">Album Cover URL:</label>
            <input
              type="url"
              id="coverUrl"
              value={coverUrl}
              onChange={(e) => setCoverUrl(e.target.value)}
              placeholder="https://example.com/album-cover.jpg"
            />
          </div>
          
          <div className="album-preview">
            <h3>Cover Preview:</h3>
            {coverUrl && (
              <img 
                src={coverUrl} 
                alt="Album cover preview" 
                className="cover-preview" 
                onError={(e) => e.currentTarget.src = '/default-album-cover.png'} 
              />
            )}
          </div>
          
          <div className="modal-actions">
            <button type="submit" className="save-btn">Save Changes</button>
            <button type="button" className="delete-btn" onClick={onDelete}>Delete Album</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAlbumModal;