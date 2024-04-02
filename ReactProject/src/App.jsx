
export function App({imagen, nombre, descripcion, enlace}){
    return(
        <div className="proyecto">
            <img src={imagen}></img>
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <a href={enlace}>Ver Proyecto</a>
        </div>
    )
}