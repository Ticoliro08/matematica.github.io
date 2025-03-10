import './blocos.css'
function blocos(props) {
    
    return (
        <>
        
        <article className="lista">
            <nav className="item">
                <img src ={props.imagem} alt="Logo" />
                <p>{props.texto}</p>
                
             <br />
                <h2>{props.titulo}</h2>

            </nav>
        </article>
        
        </>
    )
}

export default blocos