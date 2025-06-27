import React from 'react';
import type { FC } from 'react';

// Importando nossos novos componentes de UI
import Label from '../components/ui/Label';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const NovoTRPage: FC = () => {
  return (
    <div className="text-left max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Criar Novo Termo de Referência</h1>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
        <h2 className="text-xl font-semibold text-gray-700 border-b pb-4">Informações Gerais</h2>

        {/* Campo Título do Documento */}
        <div>
          <Label htmlFor="titulo">Título do Documento</Label>
          <Input
            type="text"
            id="titulo"
            placeholder="Ex: Contratação de serviço de desenvolvimento de software"
          />
        </div>

        {/* Campo Responsável */}
        <div>
          <Label htmlFor="responsavel">Responsável pela Elaboração</Label>
          <Input
            type="text"
            id="responsavel"
            defaultValue="Júnior Almeida" // Valor de exemplo
            readOnly
            className="bg-gray-100 cursor-not-allowed"
          />
        </div>

        <div className="flex justify-end pt-4">
          <Button type="submit">
            Iniciar Elaboração
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NovoTRPage;