
export default function Underline({ chute, oculta, numeroForca, palavraSorteada, contador }) {


    return (
        <>
            <p data-test="word" className={`${numeroForca === 6 ? "red" : ""} ${contador === palavraSorteada.length ? "green" : ""}`}>
                {chute.includes(oculta) || numeroForca === 6 ? oculta : "_"}
            </p>
        </>
    )
}
