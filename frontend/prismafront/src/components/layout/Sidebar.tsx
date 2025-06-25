import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white shadow-md flex-shrink-0">
      <div className="p-6 border-b">
        <h1 className="text-xl font-bold">PrismaGov</h1>
      </div>
      <nav className="p-4">
        <p>Menu de Navegação</p>
      </nav>
    </aside>
  );
};

export default Sidebar;