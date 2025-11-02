import { useState } from "react"

const Formulario = () => {
    let [altura, setAltura] = useState(0)
    let [peso, setPeso] = useState(0)    

    const renderizaResultado = () => {
        let imc = peso / ((altura / 100) * (altura / 100))
        
        if (imc < 18.5) {
            return <p>Seu IMC é {imc.toFixed(2)} (Abaixo do peso)</p>
        } else if (imc >= 18.5 && imc < 24.9) {
            return <p>Seu IMC é {imc.toFixed(2)} (Peso normal)</p>
        } else if (imc >= 25 && imc < 29.9) {
            return <p>Seu IMC é {imc.toFixed(2)} (Sobrepeso)</p>
        } else {
            return <p>Seu IMC é {imc.toFixed(2)} (Obesidade)</p>
        }
    }

    return (
        <form>
            <input type="number" placeholder="Digite sua altura em centímetros" onChange={evento => setAltura(evento.target.value)} />
            <input type="number" placeholder="Digite seu peso em quilos" onChange={evento => setPeso(evento.target.value)} />
            {altura > 0 && peso > 0 && renderizaResultado()}
        </form>
    )
}

export default Formulario