import { useEffect, useState } from 'react';
import Categoria from '../../models/Categoria';
import CategoriaService from '../../services/CategoriaService';

function Categorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    useEffect(() => {
        // Função para buscar as categorias
        const fetchCategorias = async () => {
            try {
                const response = await CategoriaService.listarCategorias();
                setCategorias(response);
            } catch (error) {
                console.error('Erro ao carregar as categorias:', error);
            }
        };
        
        fetchCategorias();
    }, []);

    return (
        <div className="container py-8">
            <h2 className="text-3xl font-bold mb-4">Categorias</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categorias.map((categoria) => (
                    <div key={categoria.id} className="border p-4 rounded-lg">
                        <h3 className="text-xl font-semibold">{categoria.nome}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categorias;
