import './perfil.css'

const Perfil = ({titulo, icone}) => {

    return (
        <div>            
            <img className="perfil-icone" src={icone} />
            <h3 className="perfil-titulo">{titulo}</h3>
        </div>
    )
}

export default Perfil