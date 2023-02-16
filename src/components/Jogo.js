import Letras from "./letras";
import forca0 from "../assets/forca0.png"
import palavras from "./palavras";
import { useState } from "react";

export default function Jogo() {
    const [palavraSorteada, setPalavraSorteada] = useState()

    function sortearPalavra() {
        const sorteada = palavras[Math.floor(Math.random() * palavras.length)];
        const novaPalavra = sorteada.split('')
        setPalavraSorteada(novaPalavra)
        console.log(palavraSorteada)
    }



    return (
        <>
            <div className="container">
                <div className="inicio">
                    <img src={forca0} />
                    <div className="palavraForca">
                        <button onClick={sortearPalavra}>Escolher Palavra</button>
                        <div className="palavra">
                            {palavraSorteada ? palavraSorteada.map((s) => <Underline key={s} />) : console.log('espero')}
                        </div>
                    </div>
                </div>

                <Letras />

            </div>
        </>
    )

    function Underline() {
        return (
            <>
                <p>_</p>
            </>
        )
    }

}