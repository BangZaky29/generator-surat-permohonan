import { useRef } from 'react';

const PreviewSurat = ({ formData, onDownloadPDF }) => {
  const previewRef = useRef(null);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    
    if (dateString.includes('/')) {
      const [day, month, year] = dateString.split('/');
      const monthNames = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
      ];
      const monthIndex = parseInt(month) - 1;
      return `${parseInt(day)} ${monthNames[monthIndex]} ${year}`;
    }
    
    return dateString;
  };

  return (
    <div className="preview-container">
      <div className="preview-header">
        <h2>📄 PREVIEW</h2>
        <button 
          className="btn-download-pdf" 
          onClick={onDownloadPDF}
          title="Download sebagai PDF"
        >
          📥 Download PDF
        </button>
      </div>
      
      <div className="preview-content" ref={previewRef}>
        <div className="surat-paper">
          <div className="surat-header-info">
            <p>
              Kepada<br />
              Yth.<br />
              {formData.pejabatPemberiCuti || '___________'}<br />
              di<br />
              <span style={{ marginLeft: '20px' }}>Tempat</span>
            </p>
          </div>

          <div className="surat-body">
            <p className="surat-opening">
              Yang bertanda tangan dibawah ini:
            </p>

            <table className="surat-table">
              <tbody>
                <tr>
                  <td style={{ width: '120px' }}>Nama</td>
                  <td style={{ width: '20px' }}>:</td>
                  <td>{formData.nama || '___________'}</td>
                </tr>
                <tr>
                  <td>Jabatan</td>
                  <td>:</td>
                  <td>{formData.jabatan || '___________'}</td>
                </tr>
                <tr>
                  <td>Alamat</td>
                  <td>:</td>
                  <td>{formData.alamat || '___________'}</td>
                </tr>
              </tbody>
            </table>

            <p className="surat-content-text">
              Dengan ini mengajukan permohonan {formData.Perihal || '___________'}, 
              <strong> selama {formData.lamaCuti || '___'}</strong>, terhitung mulai tanggal{' '}
              <strong>{formatDate(formData.mulaiTanggal) || '___________'}</strong> sampai dengan tanggal{' '}
              <strong>{formatDate(formData.selesaiTanggal) || '___________'}</strong>.
            </p>

            <p className="surat-content-text" style={{ textIndent: 0, marginTop: '0', marginBottom: '12px' }}>
              Saya tidak bisa masuk untuk bekerja seperti biasanya, dikarenakan {formData.AlasanCuti || '___________'}
            </p>

            <p className="surat-content-text">
              Demikian surat permohonan ini saya buat untuk dapat dipertimbangkan sebagaimana mestinya.
            </p>

            {/* Dual Signature Section */}
            <div className="dual-signature-wrapper">
              {/* Left Signature - Pemohon */}
              <div className="signature-box signature-left">
                <p className="signature-place-hidden">
                  {formData.tempatSurat || '___________'}, {formatDate(formData.tanggalSurat) || '___________'}
                </p>
                <p className="signature-closing">Hormat Saya,</p>
                <div className="signature-space"></div>
                <p className="signature-name">{formData.nama || '___________'}</p>
              </div>

              {/* Right Signature - Pejabat */}
              <div className="signature-box signature-right">
                <p className="signature-place-date">
                  {formData.tempatSurat || '___________'}, {formatDate(formData.tanggalSurat) || '___________'}
                </p>
                <p className="signature-closing">Menyetujui,</p>
                <div className="signature-space"></div>
                <p className="signature-name">{formData.pejabatPemberiCuti || '___________'}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="watermark">PREVIEW</div>
      </div>
    </div>
  );
};

export default PreviewSurat;