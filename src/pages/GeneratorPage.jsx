import React, { useState } from 'react';
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
    alamatSelamaCuti: '',
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
    // Validasi form
    const requiredFields = [
      'nama', 'email', 'jabatan', 'alamat',
      'pejabatPemberiCuti', 'lamaCuti', 'mulaiTanggal', 'selesaiTanggal',
      'alamatSelamaCuti', 'tempatSurat', 'tanggalSurat'
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
        alamatSelamaCuti: '',
        tempatSurat: '',
        tanggalSurat: ''
      });
    }
  };

  const handleDownloadPDF = () => {
    // Implementasi download PDF menggunakan window.print()
    // Atau bisa menggunakan library seperti jsPDF atau html2pdf
    const printContent = document.getElementById('surat-content');
    const watermark = printContent.querySelector('.watermark');
    
    // Sembunyikan watermark saat print
    if (watermark) watermark.style.display = 'none';
    
    window.print();
    
    // Tampilkan kembali watermark setelah print
    if (watermark) watermark.style.display = 'block';
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