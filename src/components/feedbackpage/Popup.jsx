import React, { useState } from 'react';
import styles from './Popup.module.css';

const PopupWindow = ({ title, children, onClose }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className={styles.popupContainer}>
      <div className={`${styles.popupWindow} ${isMinimized ? 'minimized' : ''}`}>
        <div className={styles.popupHeader}>
          <div className={styles.popupTitle}>{title}</div>
          <div className={styles.popupControls}>
            <button 
              className={styles.popupButton} 
              onClick={() => setIsMinimized(!isMinimized)}
              aria-label={isMinimized ? 'Restore' : 'Minimize'}
            >
              {isMinimized ? '+' : '-'}
            </button>
            <button 
              className={`${styles.popupButton} ${styles.popupButtonClose}`} 
              onClick={onClose}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
        {!isMinimized && (
          <div className="popup-content">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default PopupWindow;