import { useState } from "react";
import Letras from "./letras";
import Underline from "./Comparar";
import Chute from "./Chute";
import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";
import palavras from "../palavras";

const vidasDisponiveis = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
let palavraOculta;
let tamanhoDaPalavra
export default function Jogo() {
    const [palavraSorteada, setPalavraSorteada] = useState([])
    const [palavraEscolhida, setPalavraEscolhida] = useState(false)
    const [chute, setChute] = useState([])
    const [numeroForca, setNumero] = useState(0)
    const [contador, setContador] = useState(0)
    const [disabled, setDisabled] = useState(false)
    const [adivinhar, setAdivinhar] = useState("")
    return (
        <>
            <div className="container">
                <div className="inicio">
                    <img data-test="game-image" src={vidasDisponiveis[numeroForca]} />
                    <div className="palavraForca">
                        <SortearPalavra key={palavraSorteada} setPalavraSorteada={setPalavraSorteada}
                            setPalavraEscolhida={setPalavraEscolhida}
                            disabled={disabled} setDisabled={setDisabled} numeroForca={numeroForca}
                            setNumero={setNumero} setContador={setContador} setChute={setChute}
                            contador={contador} />
                        <div className="palavraSorteada" data-test="word">
                            {palavraSorteada.map((l) =>
                                <Underline palavraEscolhida={palavraEscolhida} chute={chute} oculta={l} numeroForca={numeroForca} palavraSorteada={palavraSorteada}
                                    contador={contador}
                                />)}
                        </div>
                    </div>
                </div>

                <Letras
                    chute={chute} setChute={setChute} palavraOculta={palavraOculta}
                    setNumero={setNumero} numeroForca={numeroForca} disabled={disabled}
                    contador={contador} setContador={setContador} />

                <Chute palavraOculta={palavraOculta} adivinhar={adivinhar} setContador={setContador} setAdivinhar={setAdivinhar} setNumero={setNumero} disabled={disabled} />
            </div>
        </>
    )
}

function SortearPalavra({ setPalavraSorteada, setPalavraEscolhida, disabled,
    setDisabled, numeroForca, contador, setContador, setNumero, setChute }) {
    if (numeroForca === 6 || contador === tamanhoDaPalavra) {
        setDisabled(false)
    }

    return (
        <>
            <button data-test="choose-word" disabled={disabled} onClick={() => {
                if (numeroForca === 6 || contador === tamanhoDaPalavra) {
                    setNumero(0)
                    setContador(0)
                    setChute([])
                }

                const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)]
                palavraOculta = palavraAleatoria.split('')
                console.log(palavraOculta)
                setPalavraSorteada(palavraOculta)
                setPalavraEscolhida(true)
                setDisabled("disabled")
                tamanhoDaPalavra = palavraOculta.length

            }
            }>Escolher Palavra</button>
        </>
    )
}


