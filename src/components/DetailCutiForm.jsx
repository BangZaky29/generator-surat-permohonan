const DetailCutiForm = ({ formData, handleInputChange, isExpanded, toggleSection }) => {
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
                value={getDateValue(formData.mulaiTanggal)}
                onChange={handleDateChange}
                required
              />
              {formData.mulaiTanggal && (
                <small style={{ color: '#666', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                  Format: {formData.mulaiTanggal}
                </small>
              )}
            </div>
            
            <div className="form-group">
              <label htmlFor="selesaiTanggal">
                Selesai Tanggal <span className="required">*</span>
              </label>
              <input
                type="date"
                id="selesaiTanggal"
                name="selesaiTanggal"
                value={getDateValue(formData.selesaiTanggal)}
                onChange={handleDateChange}
                required
              />
              {formData.selesaiTanggal && (
                <small style={{ color: '#666', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                  Format: {formData.selesaiTanggal}
                </small>
              )}
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