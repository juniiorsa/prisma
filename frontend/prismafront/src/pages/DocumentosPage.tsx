import React from 'react';
import type { FC } from 'react';

// Correção: Separamos a importação do VALOR da importação do TIPO.
import { mockDocumentos } from '../data/mock-documents';
import type { Documento } from '../data/mock-documents';

import { MoreHorizontal } from 'lucide-react';

// Componente pequeno para o 'badge' de status
const StatusBadge: FC<{ status: Documento['status'] }> = ({ status }) => {
  const colorClasses = {
    Finalizado: 'bg-green-100 text-green-800',
    'Em Elaboracao': 'bg-yellow-100 text-yellow-800',
    'Com Pendencia': 'bg-red-100 text-red-800',
  };
  return (
    <span className={`px-2 py-1 text-xs font-medium rounded-full ${colorClasses[status]}`}>
      {status}
    </span>
  );
};

const DocumentosPage: FC = () => {
  return (
    <div className="text-left">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Meus Documentos</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">Título</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">Status</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">Responsável</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">Última Atualização</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600 text-center">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockDocumentos.map((doc) => (
              <tr key={doc.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-800">{doc.titulo}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={doc.status} />
                </td>
                <td className="px-6 py-4 text-gray-600">{doc.responsavel}</td>
                <td className="px-6 py-4 text-gray-600">{doc.atualizadoEm}</td>
                <td className="px-6 py-4 text-center">
                  <button className="text-gray-500 hover:text-azul-eletrico p-1 rounded-full hover:bg-gray-200">
                    <MoreHorizontal size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentosPage;