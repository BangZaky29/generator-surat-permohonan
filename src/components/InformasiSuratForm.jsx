import React from 'react';
import '../styles/FormSection.css';

const InformasiSuratForm = ({ formData, handleInputChange, isExpanded, toggleSection }) => {
  // Helper function untuk convert date dari input type="date" ke dd/mm/yyyy
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    if (value) {
      // Convert dari yyyy-mm-dd ke dd/mm/yyyy
      const [year, month, day] = value.split('-');
      const formattedDate = `${day}/${month}/${year}`;
      handleInputChange({ target: { name, value: formattedDate } });
    } else {
      handleInputChange(e);
    }
  };

  // Helper function untuk convert dd/mm/yyyy ke yyyy-mm-dd untuk input type="date"
  const getDateValue = (dateString) => {
    if (!dateString) return '';
    if (dateString.includes('/')) {
      const [day, month, year] = dateString.split('/');
      // Pastikan format 2 digit untuk day dan month
      const paddedDay = day.padStart(2, '0');
      const paddedMonth = month.padStart(2, '0');
      return `${year}-${paddedMonth}-${paddedDay}`;
    }
    return dateString;
  };

  return (
    <div className="form-section">
      <div 
        className={`section-header ${isExpanded ? 'active' : ''}`}
        onClick={() => toggleSection('informasiSurat')}
      >
        <span className="section-icon">ℹ️</span>
        <h3>INFORMASI SURAT</h3>
        <span className="toggle-icon">{isExpanded ? '▲' : '▼'}</span>
      </div>
      
      {isExpanded && (
        <div className="section-content">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="tempatSurat">
                Tempat Surat diterbitkan <span className="required">*</span>
              </label>
              <input
                type="text"
                id="tempatSurat"
                name="tempatSurat"
                value={formData.tempatSurat}
                onChange={handleInputChange}
                placeholder="Contoh: Jakarta"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="tanggalSurat">
                Tanggal Surat diterbitkan <span className="required">*</span>
              </label>
              <input
                type="date"
                id="tanggalSurat"
                name="tanggalSurat"
                value={getDateValue(formData.tanggalSurat)}
                onChange={handleDateChange}
                required
              />
              {formData.tanggalSurat && (
                <small style={{ color: '#666', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                  Format: {formData.tanggalSurat}
                </small>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InformasiSuratForm;