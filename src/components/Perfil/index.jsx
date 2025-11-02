import './perfil.css'

const Perfil = () => {
    const usuario = {
        nome: "Aang",
        avatar: 'https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg'
    }

    return (
        <div>
            <img className="perfil-avatar" src={usuario.avatar} />
            <h3 className="perfil-titulo">{usuario.nome}</h3>
        </div>
    )
}

export default Perfil