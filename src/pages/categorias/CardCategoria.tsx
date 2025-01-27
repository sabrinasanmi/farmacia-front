import Categoria from "../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="border p-4">
      <h3>{categoria.nome}</h3>
      <button>Editar</button>
      <button>Deletar</button>
    </div>
  );
}

export default CardCategoria;
