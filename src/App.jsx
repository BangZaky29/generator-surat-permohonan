
// Import Components
import Header from './components/Header';
import Footer from './components/Footer';
import GeneratorPage from './pages/GeneratorPage';

// Import Styles
import './styles/App.css';
import './styles/Header.css';
import './styles/Footer.css';
import './styles/FormSection.css';
import './styles/PreviewSurat.css';
import './styles/ActionButtons.css';
import './styles/GeneratorPage.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <GeneratorPage />
      </main>
      <Footer />
    </div>
  );
};

export default App;