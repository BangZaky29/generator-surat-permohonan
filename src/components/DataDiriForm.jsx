import React from 'react';
import '../styles/FormSection.css';

const DataDiriForm = ({ formData, handleInputChange, isExpanded, toggleSection }) => {
  return (
    <div className="form-section">
      <div 
        className={`section-header ${isExpanded ? 'active' : ''}`}
        onClick={() => toggleSection('dataDiri')}
      >
        <span className="section-icon">👤</span>
        <h3>DATA DIRI</h3>
        <span className="toggle-icon">{isExpanded ? '▲' : '▼'}</span>
      </div>
      
      {isExpanded && (
        <div className="section-content">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nama">
                Nama <span className="required">*</span>
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                value={formData.nama}
                onChange={handleInputChange}
                placeholder="Masukkan nama lengkap"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="contoh@email.com"
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="jabatan">
                Jabatan <span className="required">*</span>
              </label>
              <select
                id="jabatan"
                name="jabatan"
                value={formData.jabatan}
                onChange={handleInputChange}
                required
              >
                <option value="">-- Pilih Jabatan --</option>
                <option value="Staff">Staff</option>
                <option value="Supervisor">Supervisor</option>
                <option value="Manager">Manager</option>
                <option value="Director">Director</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="alamat">
                Alamat <span className="required">*</span>
              </label>
              <textarea
                id="alamat"
                name="alamat"
                value={formData.alamat}
                onChange={handleInputChange}
                placeholder="Masukkan alamat lengkap"
                rows="3"
                required
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataDiriForm;