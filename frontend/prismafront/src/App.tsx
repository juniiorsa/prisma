// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-cinza-claro font-sans">
        {/* Barra Lateral Fixa */}
        <Sidebar />

        {/* Área de Conteúdo Principal */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Cabeçalho Superior */}
          <Header />

          {/* Conteúdo da Página que irá rolar */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* Futuramente, adicionaremos mais rotas aqui */}
              {/* <Route path="/documentos" element={<DocumentsPage />} /> */}
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;