import { Link } from 'react-router-dom';
import allBeers from '../../assets/img/all-beers.jpg';
import randomBeers from '../../assets/img/random-beers.jpg';

const RandomBeers = (props) => {

    console.log(props.data)
    
    return <div className="home">

                <div className="container py-5">

                    <div className="beers">

                        Random Beeeeers

                    </div>

                </div>
           </div>
    }
  
export default RandomBeers;
