
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
export default

    function Letras({ palavraEscolhida, chute, setChute, palavraOculta, setNumero, numeroForca, contador, setContador }) {

    return (
        <div className="letrasForca">
            <AddLetras
                palavraEscolhida={palavraEscolhida} chute={chute} setChute={setChute}
                palavraOculta={palavraOculta} setNumero={setNumero} numeroForca={numeroForca} contador={contador} setContador={setContador} />
        </div>
    )
}


function AddLetras({ palavraEscolhida, chute, setChute, palavraOculta, setNumero, numeroForca, contador, setContador }) {

    function tentativas(letra) {
        const letrasJaUsadas = [...chute, letra]
        setChute(letrasJaUsadas)
        if (!palavraOculta.includes(letra)) {
            setNumero(numeroForca + 1)
        } else if (palavraOculta.includes(letra)) {
            for (let i = 0; i < palavraOculta.length; i++) {
                if (letra === palavraOculta[i]) {
                    setContador(contador + 1)
                }
            }
        }
    }

    return (
        <>
            {alfabeto.map((l) =>
                <button data-test="letter" key={l} onClick={() => tentativas(l)}
                    disabled={palavraEscolhida !== true || chute.includes(l) || numeroForca === 6 || contador === palavraOculta.length ? "disabled" : false}
                >
                    <BlocoLetra letra={l} />
                </button>
            )}
        </>
    )
}



function BlocoLetra({ letra }) {

    return (
        <>
            <p>{letra}</p>
        </>
    )
}


