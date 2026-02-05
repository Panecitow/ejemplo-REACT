import './cards.css';
import PropTypes from 'prop-types'; 

import imgCard1 from './assets/cardsIcons/miku-card01.jpg';
import imgCard2 from './assets/cardsIcons/teto-card.jpg';
import imgCard3 from './assets/cardsIcons/neru-card.jpg';     


function Target(props){
    return(
        <div className='card'>
            <img src={props.imagen} alt={props.name} />
            <h1>{props.name}</h1>
            <p>{props.descripcion}</p>
            <a href="#">Leer más</a>
            {props.saludarFunc && <button onClick={props.saludarFunc}>Saludar</button>}
        </div>
    )
}

function Inicio(){
    return <h2>Bienvenido a la página de Inicio</h2>;
}

function AcercaDe(){
    return <h2>Acerca De Nosotros</h2>;
}

function Productos(){
    return(
        <h2>Lista de Productos</h2>
    );
}

function Galeria(){
    return(
        <div className='cardsDiv'> 
            <Target 
                name='Miku Epsilon' 
                descripcion='Card numero 1' 
                imagen={imgCard1} 
            />
            <Target 
                name='Kasane Cateto' 
                descripcion='Card numero 2' 
                imagen={imgCard2} 
            />
            <Target 
                name='📞📞📞' 
                descripcion='Card numero 3' 
                imagen={imgCard3} 
            />
        </div>
    );
}

function Sucursales(){
    return <h2>Nuestras Sucursales</h2>;
}

function Contacto(){
    return <h2>Formulario de Contacto</h2>;
}

function ContenedorCards({ vista }){
    
    const vistas = {
        'Inicio': <Inicio/>,
        'AcercaDe': <AcercaDe/>,
        'Productos': <Productos/>, 
        'Galeria': <Galeria/>,
        'Sucursales': <Sucursales/>,
        'Contacto': <Contacto/>
    };

    return(
        <div className="main-container"> 
            { vistas[vista] || <Inicio/> }
        </div>
    )
}

ContenedorCards.propTypes = {
    vista: PropTypes.string.isRequired
}
export default ContenedorCards;