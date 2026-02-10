import './cards.css';
import PropTypes from 'prop-types';
import AcercaDe from './menuViews/AcercaDe';
import Contacto from './menuViews/Contacto';
import Galeria from './menuViews/Galeria';
import Productos from './menuViews/Productos';
import Sucursales from './menuViews/Sucursales'; 

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