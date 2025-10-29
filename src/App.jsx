function App() {
    const nome = "QA Tester"

    function retornaNome(){
      return nome
    }

    const pessoa = {
      nome: "QA Tester"      
    }

    let estaTrabalhando = false

    return(
      <>
        <h1>Meu nome é {pessoa.nome}</h1>
        <h2>Meu nome ao contrário é {retornaNome().split('').reverse().join('')}</h2>
        {estaTrabalhando ? <h3>Existem atividades a serem executadas</h3> : <h3>Aproveite seu descanso!</h3>}
      </>
    )
}

export default App
