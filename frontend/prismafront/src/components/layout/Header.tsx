// src/components/layout/Header.tsx
import React from 'react';
import type { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="flex justify-end items-center p-4 bg-white border-b h-16">
        <div className="font-semibold">
            Logado como: <span className="text-azul-eletrico">Gestor Público</span>
        </div>
    </header>
  );
};

export default Header;