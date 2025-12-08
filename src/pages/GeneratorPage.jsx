import { useState } from 'react';
import html2pdf from 'html2pdf.js';
import DataDiriForm from '../components/DataDiriForm';
import DetailCutiForm from '../components/DetailCutiForm';
import InformasiSuratForm from '../components/InformasiSuratForm';
import PreviewSurat from '../components/PreviewSurat';
import ActionButtons from '../components/ActionButtons';

const GeneratorPage = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    jabatan: '',
    alamat: '',
    pejabatPemberiCuti: '',
    lamaCuti: '',
    mulaiTanggal: '',
    selesaiTanggal: '',
    AlasanCuti: '',
    tempatSurat: '',
    tanggalSurat: ''
  });

  const [expandedSections, setExpandedSections] = useState({
    dataDiri: true,
    detailCuti: false,
    informasiSurat: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleBuatSurat = () => {
    const requiredFields = [
      'nama', 'email', 'jabatan', 'alamat',
      'pejabatPemberiCuti', 'lamaCuti', 'mulaiTanggal', 'selesaiTanggal',
      'AlasanCuti', 'tempatSurat', 'tanggalSurat'
    ];

    const emptyFields = requiredFields.filter(field => !formData[field]);

    if (emptyFields.length > 0) {
      alert('Mohon lengkapi semua field yang wajib diisi (*)');
      return;
    }

    alert('Surat berhasil dibuat! Silakan lihat preview di sebelah kanan.');
  };

  const handleHapus = () => {
    if (confirm('Apakah Anda yakin ingin menghapus semua data?')) {
      setFormData({
        nama: '',
        email: '',
        jabatan: '',
        alamat: '',
        pejabatPemberiCuti: '',
        lamaCuti: '',
        mulaiTanggal: '',
        selesaiTanggal: '',
        AlasanCuti: '',
        tempatSurat: '',
        tanggalSurat: ''
      });
    }
  };

  const handleDownloadPDF = async () => {
    const requiredFields = [
      'nama', 'email', 'jabatan', 'alamat',
      'pejabatPemberiCuti', 'lamaCuti', 'mulaiTanggal', 'selesaiTanggal', 
      'AlasanCuti', 'tempatSurat', 'tanggalSurat'
    ];

    const emptyFields = requiredFields.filter(field => !formData[field]);

    if (emptyFields.length > 0) {
      alert('Mohon lengkapi semua field sebelum download PDF!');
      return;
    }

    try {
      const element = document.querySelector('.surat-paper');
      const watermark = document.querySelector('.watermark');
      const previewHeader = document.querySelector('.preview-header');
      
      if (!element) {
        throw new Error('Element surat tidak ditemukan');
      }

      if (watermark) watermark.style.display = 'none';
      if (previewHeader) previewHeader.style.display = 'none';

      const fileName = `Surat_Cuti_${formData.nama.replace(/\s+/g, '_')}_${new Date().getTime()}.pdf`;

      const opt = {
        margin: [15, 15, 15, 15],
        filename: fileName,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          letterRendering: true,
          logging: false,
          scrollY: -window.scrollY,
          scrollX: 0
        },
        jsPDF: { 
          unit: 'mm', 
          format: 'a4', 
          orientation: 'portrait'
        },
        pagebreak: { mode: ['avoid-all', 'css'] }
      };

      await html2pdf().set(opt).from(element).save();

      if (watermark) watermark.style.display = 'block';
      if (previewHeader) previewHeader.style.display = 'flex';

      alert('PDF berhasil diunduh!');
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Terjadi kesalahan saat membuat PDF. Silakan coba lagi.');
      
      const watermark = document.querySelector('.watermark');
      const previewHeader = document.querySelector('.preview-header');
      if (watermark) watermark.style.display = 'block';
      if (previewHeader) previewHeader.style.display = 'flex';
    }
  };

  return (
    <div className="generator-page">
      <div className="generator-container">
        <div className="form-column">
          <DataDiriForm
            formData={formData}
            handleInputChange={handleInputChange}
            isExpanded={expandedSections.dataDiri}
            toggleSection={toggleSection}
          />
          
          <DetailCutiForm
            formData={formData}
            handleInputChange={handleInputChange}
            isExpanded={expandedSections.detailCuti}
            toggleSection={toggleSection}
          />
          
          <InformasiSuratForm
            formData={formData}
            handleInputChange={handleInputChange}
            isExpanded={expandedSections.informasiSurat}
            toggleSection={toggleSection}
          />
          
          <ActionButtons
            onBuatSurat={handleBuatSurat}
            onHapus={handleHapus}
          />
        </div>
        
        <div className="preview-column">
          <PreviewSurat 
            formData={formData}
            onDownloadPDF={handleDownloadPDF}
          />
        </div>
      </div>
    </div>
  );
};

export default GeneratorPage;