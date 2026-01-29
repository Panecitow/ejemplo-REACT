import logoMiku  from './assets/logo-miku.jpg';
import iconoFacebook from './assets/redes/facebook.png';
import iconoInstagram from './assets/redes/instagram.png';
import iconoTwitter from './assets/redes/twitter.png';
import iconoYoutube from './assets/redes/youtube.png';
import iconoTikTok from './assets/redes/tik-tok.png';

import './encabezado.css';

function Encabezado() {
    return (
        <div className='encabezadoDiv'>
            <Logo />
            <Menu/>
            <RedesSociales/>
        </div>
    );
}

function Logo() {
    return(
        <div className='logoDiv'>
            <img src={logoMiku} alt="main-logo" />
        </div>
    );
}

function Menu(){
    return(
        <div className='menuDiv'>
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Productos</li>
                <li>Contacto</li>
                <li>Sucursales</li>
            </ul>
        </div>
    )
}

function RedesSociales(){
    return(
        <div className='redesDiv'>
            <ul>
                <li><img src={iconoFacebook} alt="Facebook" /></li>
                <li><img src={iconoInstagram} alt="Instagram" /></li>
                <li><img src={iconoTwitter} alt="Twitter" /></li>
                <li><img src={iconoYoutube} alt="YouTube" /></li>
                <li><img src={iconoTikTok} alt="TikTok" /></li>
            </ul>
        </div>
    )
}

export default Encabezado