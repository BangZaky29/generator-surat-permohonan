import { useRef } from 'react';

const PreviewSurat = ({ formData, onDownloadPDF }) => {
  const previewRef = useRef(null);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
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
      
      <div className="preview-content" ref={previewRef} id="surat-content">
        <div className="surat-paper">
          {/* Header Surat - Penerima */}
          <div className="surat-header-info">
            <p className="text-left">
              Kepada
              Yth.<br />
              {formData.pejabatPemberiCuti || '___________'}<br />
              di<br />
              <span className="indent-small">Tempat</span>
            </p>
          </div>

          <div className="surat-body">
            <p className="surat-opening">
              Yang bertanda tangan dibawah ini:
            </p>

            <table className="surat-table">
              <tbody>
                <tr>
                  <td width="150">Nama</td>
                  <td width="20">:</td>
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
              Dengan ini mengajukan permohonan Cuti Tahunan selama{' '}
              <strong>{formData.lamaCuti || '___'}</strong>, terhitung mulai tanggal{' '}
              <strong>{formatDate(formData.mulaiTanggal) || '___________'}</strong> sampai dengan tanggal{' '}
              <strong>{formatDate(formData.selesaiTanggal) || '___________'}</strong>.
            </p>

            <p className="surat-content-text">
              Selama menjalankan cuti, alamat saya adalah:
            </p>

            <p className="surat-content-text">
              {formData.alamatSelamaCuti || '___________'}
            </p>

            <p className="surat-content-text">
              Demikian surat permohonan ini saya buat untuk dapat dipertimbangkan sebagaimana mestinya.
            </p>

            {/* Footer Surat - Tempat, Tanggal dan Tanda Tangan */}
            <div className="surat-signature">
              <p className="signature-place-date">
                {formData.tempatSurat || '___________'}, {formatDate(formData.tanggalSurat) || '___________'}
              </p>
              <p className="signature-closing">Hormat Saya,</p>
              <div className="signature-space"></div>
              <p className="signature-name">{formData.nama || '___________'}</p>
            </div>
          </div>
        </div>

        <div className="watermark">PREVIEW</div>
      </div>
    </div>
  );
};

export default PreviewSurat;