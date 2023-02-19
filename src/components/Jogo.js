import Letras from "./letras";
import Underline from "./Comparar";
import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";
import palavrasParaSortear from "./palavras";
import { useState } from "react";
const vidasDisponiveis = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
let palavraOculta;
export default function Jogo() {
    const [palavraSorteada, setPalavraSorteada] = useState([])
    const [palavraEscolhida, setPalavraEscolhida] = useState(false)
    const [chute, setChute] = useState([])
    const [numeroForca, setNumero] = useState(0)
    const [contador, setContador] = useState(0)
    return (
        <>
            <div className="container">
                <div className="inicio">
                    <img data-test="game-image" src={vidasDisponiveis[numeroForca]} />
                    <div className="palavraForca">
                        <SortearPalavra key={palavraSorteada} setPalavraSorteada={setPalavraSorteada}
                            setPalavraEscolhida={setPalavraEscolhida} />
                        <div className="palavraSorteada">
                            {palavraSorteada.map((l, i) =>
                                <Underline chute={chute} oculta={l} numeroForca={numeroForca} palavraSorteada={palavraSorteada}
                                    index={i} contador={contador}
                                />)}
                        </div>
                    </div>
                </div>

                <Letras
                    palavraEscolhida={palavraEscolhida} chute={chute} setChute={setChute} palavraOculta={palavraOculta}
                    setNumero={setNumero} numeroForca={numeroForca} contador={contador} setContador={setContador} />

            </div>
        </>
    )
}

function SortearPalavra({ setPalavraSorteada, setPalavraEscolhida }) {
    return (
        <>
            <button data-test="choose-word" onClick={() => {
                const palavraAleatoria = palavrasParaSortear[Math.floor(Math.random() * palavrasParaSortear.length)]
                palavraOculta = palavraAleatoria.split('')
                setPalavraSorteada(palavraOculta)
                setPalavraEscolhida(true)
            }
            }>Escolher Palavra</button>
        </>
    )
}




