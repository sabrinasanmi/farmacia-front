import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import './CadastrarCategoria.css';
import Categoria from '../../models/Categoria';
import CategoriaService from '../../services/CategoriaService';
function CadastrarCategoria() {
  const [nome, setNome] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const novaCategoria: Categoria = {
      id: 0,
      nome,
    };

    setIsLoading(true);

    try {
      await CategoriaService.cadastrarCategoria(novaCategoria);
      alert('Categoria cadastrada com sucesso!');
      navigate('/categorias');
    } catch (error) {
      console.error('Erro ao cadastrar categoria:', error);
      alert('Erro ao cadastrar categoria. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const retornar = () => {
    navigate('/categorias');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
      <div className="fundoCadastro hidden lg:block"></div>
      <form className="flex justify-center items-center flex-col w-2/3 gap-3" onSubmit={handleSubmit}>
        <h2 className="text-slate-900 text-5xl">Cadastrar Categoria</h2>

        <div className="flex flex-col w-full">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome da categoria"
            className="border-2 border-slate-700 rounded p-2"
            value={nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="flex justify-around w-full gap-8">
          <button
            className="rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2"
            onClick={retornar}
            type="button"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded text-white bg-indigo-400 hover:bg-indigo-900 w-1/2 py-2 flex justify-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="spinner"></div>
            ) : (
              <span>Cadastrar</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CadastrarCategoria;
