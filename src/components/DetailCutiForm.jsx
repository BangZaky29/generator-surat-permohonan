import React from 'react';
import '../styles/FormSection.css';

const DetailCutiForm = ({ formData, handleInputChange, isExpanded, toggleSection }) => {
  return (
    <div className="form-section">
      <div 
        className={`section-header ${isExpanded ? 'active' : ''}`}
        onClick={() => toggleSection('detailCuti')}
      >
        <span className="section-icon">📅</span>
        <h3>DETAIL CUTI TAHUNAN</h3>
        <span className="toggle-icon">{isExpanded ? '▲' : '▼'}</span>
      </div>
      
      {isExpanded && (
        <div className="section-content">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="pejabatPemberiCuti">
                Pejabat yang berwenang memberi cuti <span className="required">*</span>
              </label>
              <input
                type="text"
                id="pejabatPemberiCuti"
                name="pejabatPemberiCuti"
                value={formData.pejabatPemberiCuti}
                onChange={handleInputChange}
                placeholder="Nama pejabat"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="lamaCuti">
                Lama Cuti <span className="required">*</span>
              </label>
              <input
                type="text"
                id="lamaCuti"
                name="lamaCuti"
                value={formData.lamaCuti}
                onChange={handleInputChange}
                placeholder="Contoh: 5 hari"
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="mulaiTanggal">
                Mulai Tanggal <span className="required">*</span>
              </label>
              <input
                type="date"
                id="mulaiTanggal"
                name="mulaiTanggal"
                value={formData.mulaiTanggal}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="selesaiTanggal">
                Selesai Tanggal <span className="required">*</span>
              </label>
              <input
                type="date"
                id="selesaiTanggal"
                name="selesaiTanggal"
                value={formData.selesaiTanggal}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          
          <div className="form-group full-width">
            <label htmlFor="alamatSelamaCuti">
              Selama menjalankan cuti, alamat saya adalah: <span className="required">*</span>
            </label>
            <textarea
              id="alamatSelamaCuti"
              name="alamatSelamaCuti"
              value={formData.alamatSelamaCuti}
              onChange={handleInputChange}
              placeholder="Alamat yang dapat dihubungi selama cuti"
              rows="4"
              required
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailCutiForm;