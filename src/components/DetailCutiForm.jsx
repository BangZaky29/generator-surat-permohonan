const DetailCutiForm = ({ formData, handleInputChange, isExpanded, toggleSection }) => {
  return (
    <div className="form-section">
      <div 
        className={`section-header ${isExpanded ? 'active' : ''}`}
        onClick={() => toggleSection('detailCuti')}
      >
        <span className="section-icon">📅</span>
        <h3>DETAIL PERMOHONAN</h3>
        <span className="toggle-icon">{isExpanded ? '▲' : '▼'}</span>
      </div>
      
      {isExpanded && (
        <div className="section-content">
          <div className="form-group full-width">
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

          <div className="form-group full-width">
            <label htmlFor="Perihal">
              Perihal Permohonan <span className="required">*</span>
            </label>
            <textarea
              id="Perihal"
              name="Perihal"
              value={formData.Perihal}
              onChange={handleInputChange}
              placeholder="Tulis perihal permohonan Anda secara lengkap (paragraf pertama)"
              rows="5"
              required
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="AlasanCuti">
              Alasan Cuti <span className="required">*</span>
            </label>
            <textarea
              id="AlasanCuti"
              name="AlasanCuti"
              value={formData.AlasanCuti}
              onChange={handleInputChange}
              placeholder="Tulis alasan cuti Anda secara lengkap (paragraf kedua)"
              rows="5"
              required
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailCutiForm;