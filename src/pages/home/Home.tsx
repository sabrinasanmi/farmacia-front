import { useState } from "react";

function Home() {
    const [hovered, setHovered] = useState(false);

    return (
        <>
            <div className="bg-black flex justify-center">
                <div className='container grid grid-cols-2 text-beige'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Olá! Que bom ter você aqui
                        </h2>
                        <p className='text-xl'>
                            Encontre aqui o produto desejado.
                        </p>

                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://ik.imagekit.io/sanmi/cientista-com-ilustracao-plana-de-prancheta-e-caneta-escrevendo-os-detalhes-do-experimento-documentando-e-descrevendo-mulher-com-jaleco-azul-isolado-personagem-de-desenho-animado-em-fundo-branco_15115.avif?updatedAt=1737992214956"
                            alt="Imagem de uma mulher vestindo jaleco segurando uma prancheta"
                            className={`w-2/3 ${hovered ? "grayscale-0" : "grayscale"} transition-filter duration-500`}
                            aria-label="Imagem de uma mulher vestindo jaleco segurando uma prancheta"
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(true)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
