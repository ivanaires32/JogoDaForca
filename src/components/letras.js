
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
export default function Letras() {
    return (
        <div className="letrasForca">
            {alfabeto.map((l) => <LetrasAlfabeto letra={l} key={l} />)}
        </div>
    )
}

function LetrasAlfabeto(props) {
    return (

        <button disabled><p>{props.letra}</p></button>

    )
}


