import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className='w-full bg-beige text-dark flex justify-center py-4'>
    <div className="container flex justify-between text-lg">
        <Link to='/home' className="text-2xl font-bold hover:font-normal hover:text-blue">
            Farmácia
        </Link>

        <div className='flex gap-4'>
            <Link to='/produtos' className='font-bold hover:font-normal hover:text-pink'>
                Produtos
            </Link>
            <Link to='/categorias' className='font-bold hover:font-normal hover:text-pink'>
                Categorias
            </Link>
            <Link to='/cadastrarcategoria' className='font-bold hover:font-normal hover:text-pink'>
                Cadastrar categorias
            </Link>
        </div>
    </div>
</div>
        </>
    )
}

export default Navbar;
