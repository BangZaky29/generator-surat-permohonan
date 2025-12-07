import React from 'react';
import '../styles/ActionButtons.css';

const ActionButtons = ({ onBuatSurat, onHapus }) => {
  return (
    <div className="action-buttons">
      <button 
        className="btn btn-secondary" 
        onClick={onHapus}
        type="button"
      >
        🗑️ HAPUS
      </button>
    </div>
  );
};

export default ActionButtons;