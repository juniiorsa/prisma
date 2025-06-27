// src/pages/HomePage.tsx
import React from 'react';
import type { FC } from 'react';

const HomePage: FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800">
        Bem-vindo(a) ao PrismaGov!
      </h1>
      <p className="mt-2 text-gray-600">
        Seu dashboard central para uma gestão de contratações mais inteligente.
      </p>
    </div>
  );
};

export default HomePage;
