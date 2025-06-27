// src/components/layout/Sidebar.tsx
import React from 'react';
import type { FC } from 'react';
import { NavLink } from 'react-router-dom';

// Placeholder para ícones
const Icon = ({ name }: { name: string }) => <span className="mr-3 h-6 w-6">{name.charAt(0)}</span>;

const Sidebar: FC = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center px-4 py-2.5 rounded-lg transition-colors ${
      isActive
        ? 'bg-gray-200 text-gray-900 font-semibold'
        : 'text-gray-600 hover:bg-gray-100'
    }`;

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col flex-shrink-0">
      <div className="flex items-center justify-center p-6 border-b space-x-2">
        <span className="font-bold text-2xl">Prisma<span className="text-azul-eletrico">Gov</span></span>
      </div>
      <nav className="flex-1 px-4 py-4 space-y-2">
        <NavLink to="/" className={navLinkClass}><Icon name="Home" /> Início</NavLink>
        <NavLink to="/documentos" className={navLinkClass}><Icon name="Docs" /> Documentos</NavLink>
        <NavLink to="/documentos/novo" className={navLinkClass}><Icon name="New" /> Novo TR</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;