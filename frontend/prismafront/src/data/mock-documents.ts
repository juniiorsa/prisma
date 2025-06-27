// Caminho: src/data/mock-documents.ts

export interface Documento {
  id: string;
  titulo: string;
  status: 'Finalizado' | 'Em Elaboracao' | 'Com Pendencia';
  responsavel: string;
  atualizadoEm: string;
}

export const mockDocumentos: Documento[] = [
  {
    id: 'd1',
    titulo: 'TR - Contratação de Software de Gestão',
    status: 'Finalizado',
    responsavel: 'Júnior Almeida',
    atualizadoEm: '25/06/2025',
  },
  {
    id: 'd2',
    titulo: 'ETP - Aquisição de Notebooks para Secretaria',
    status: 'Em Elaboracao',
    responsavel: 'Ana Silva',
    atualizadoEm: '27/06/2025',
  },
  {
    id: 'd3',
    titulo: 'TR - Manutenção de Ar-condicionado',
    status: 'Com Pendencia',
    responsavel: 'Carlos Pereira',
    atualizadoEm: '18/06/2025',
  },
  {
    id: 'd4',
    titulo: 'ETP - Reforma da Biblioteca Municipal',
    status: 'Finalizado',
    responsavel: 'Júnior Almeida',
    atualizadoEm: '15/05/2025',
  },
];