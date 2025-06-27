import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import DocumentosPage from './pages/DocumentosPage';
import NovoTRPage from './pages/NovoTRPage';

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-cinza-claro font-sans">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/documentos" element={<DocumentosPage />} />
              <Route path="/documentos/novo" element={<NovoTRPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;