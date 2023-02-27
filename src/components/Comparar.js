
export default function Underline({ chute, oculta, numeroForca, palavraSorteada, contador }) {


    return (
        <div>
            <p className={`${numeroForca === 6 ? "red" : ""} ${contador === palavraSorteada.length ? "green" : ""}`}>
                {chute.includes(oculta) || numeroForca === 6 || contador === palavraSorteada.length ? oculta : "_"}
            </p>
        </div>
    )
}
