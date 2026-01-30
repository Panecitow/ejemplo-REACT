import '/src/cards.css';

import imgCard1 from './assets/cardsIcons/miku-card01.jpg';
import imgCard2 from './assets/cardsIcons/teto-card.jpg';
import imgCard3 from './assets/cardsIcons/neru-card.jpg';    

function Cards(){
    return(
        <div className='cardsDiv'> 
            <div className='card' id='card1'>
                <img src={imgCard1} alt="Miku" />
                <h1>Miku Epsilon</h1>   
                </div>

            <div className='card' id='card2'>
                <img src={imgCard2} alt="Teto" />
                <h1>Kasane Cateto</h1>
            </div>

            <div className='card' id='card3'>
                <img src={imgCard3} alt="Neru" />
                <h1>📞📞📞</h1>
            </div>
        </div>
    )
}

export default Cards;