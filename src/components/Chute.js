export default function Chute({ palavraOculta, adivinhar, setAdivinhar, setContador, setNumero, disabled }) {
    return (
        <div className="adivinhar">
            <h1>Já sei a palavra</h1>
            <input data-test="guess-input" disabled={!disabled} onChange={(e) => setAdivinhar(e.target.value)} value={adivinhar} />
            <button data-test="guess-button" disabled={!disabled} onClick={() => verificar(adivinhar, setAdivinhar, setContador, setNumero, palavraOculta)}>Chutar</button>
        </div>)
}



function verificar(adivinhar, setAdivinhar, setContador, setNumero, palavraOculta) {
    setAdivinhar("")
    const palavra = palavraOculta.join("")
    if (adivinhar === palavra) {
        setContador(palavraOculta.length)
    } else {
        setNumero(6)
    }
}