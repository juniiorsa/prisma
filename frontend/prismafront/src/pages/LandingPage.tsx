import React from 'react';
import type { FC } from 'react';

// Renomeando o componente para refletir o nome do arquivo
const LandingPage: FC = () => {
  return (
    <main>
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Transforme a Complexidade Jurídica em <span className="gradient-text">Estratégia Inteligente.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            A plataforma de IA que automatiza a análise e criação de documentos técnicos para o setor público, garantindo compliance, agilidade e decisões baseadas em dados.
          </p>
          <div className="mt-10">
            <a href="#" className="bg-azul-eletrico text-white font-bold px-8 py-4 rounded-lg cta-button text-lg">
              Solicite uma Demonstração
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;