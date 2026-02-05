import './body.css';
import bodyWallpaper from './assets/bodyImages/bodyWallpaper.png';


function Body(props) {
    let user=props;
    console.info(user);
    if (user.name!=""){
        return (
        <div className="bodyDiv">
            <div className='glassContainer'>
            <h1>Welcome to Panecitow</h1>
            <p>Your one-stop solution for all your needs.</p>
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
