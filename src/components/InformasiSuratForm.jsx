import '../styles/FormSection.css';

const InformasiSuratForm = ({ formData, handleInputChange, isExpanded, toggleSection }) => {
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
                value={formData.tanggalSurat}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InformasiSuratForm;
