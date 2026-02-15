import './body.css';
import Mapa from './mapa/mapa';
import MapaGeolocalizacion from './ubicacion/mapaGeolocalizacion';
import MapaRuta from './ubicacion/mapaRuta';

function Body(props) {
    let user=props;
    console.info(user);
    if (user.name!=""){

const COORDENADAS_DESTINO = {
    lat: 19.174415234169793,
    lng: -98.16241396274386
};

        return (
        <div className="bodyDiv">
            <div className='glassContainer'>
            <h1>WelCUM</h1>
            <p>Your one-stop solution for all your needs.</p>
            
            <Mapa lat={19.174415234169793}  
            lng={-98.16241396274386}
            nombre="Un Macdonals"/>

            <h1>TU UBICACIÓN</h1>
            <MapaGeolocalizacion/>

            <MapaRuta 
                destinoLat={COORDENADAS_DESTINO.lat}
                destinoLng={COORDENADAS_DESTINO.lng}
                />

            
            </div>  
        </div>
    );

    }
    return(
        <div className='bodyDiv'>
            <div className='glassContainer'>
            <h1>NO HAY NADA VV</h1>
            </div>
            </div>
)
}

export default Body;
