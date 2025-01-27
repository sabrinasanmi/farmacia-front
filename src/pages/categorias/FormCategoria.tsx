import { useState } from "react";
import CategoriaService from "../../services/CategoriaService";
import Categoria from "../../models/Categoria";

function FormCategoria() {
  const [nome, setNome] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const novaCategoria: Categoria = { id: 0, nome };
    try {
      await CategoriaService.cadastrarCategoria(novaCategoria);
      alert("Categoria cadastrada com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar categoria:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome da Categoria"
      />
      <button type="submit">Cadastrar Categoria</button>
    </form>
  );
}

export default FormCategoria;
