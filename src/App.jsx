import Formulario from "./components/Formulario"
import Perfil from "./components/Perfil"

function App() {
    return(
      <>
        <Perfil titulo="Calcule seu IMC" icone="https://img.elo7.com.br/product/zoom/4E1B9EA/matriz-de-bordado-simbolo-nutricao-matriz-de-bordado.jpg" />
        <Formulario />
      </>
    )
}

export default App