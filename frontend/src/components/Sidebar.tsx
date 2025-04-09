import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      {/* Album/Home Icon */}
      <div 
        className="sidebar-icon active"
        title="View Albums"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L20 9V21H15V14H9V21H4V9L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      {/* Divider between Home and Create */}
      <div className="sidebar-divider"></div>
      
      {/* Add Album Icon */}
      <div 
        className="sidebar-icon"
        title="Create Album"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      {/* Divider between Create and Favorites */}
      <div className="sidebar-divider"></div>
      
      {/* Favorite Albums Icon */}
      <div 
        className="sidebar-icon"
        title="Favorite Albums"
      >
        <span className="star-icon">★</span>
      </div>
    </div>
  );
};

export default Sidebar;