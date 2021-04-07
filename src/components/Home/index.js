import { Link } from 'react-router-dom';
import allBeers from '../../assets/img/all-beers.jpg';
import randomBeers from '../../assets/img/random-beers.jpg';

const Home = (props) => {
    
    return <div className="home">

                <div className="container py-2">

                    <div className="categories">

                        <div className="cat item mb-4">

                            <div className="image-container">

                            <Link to="/all-beers" className="full-link" />

                            <img src={allBeers} alt="Cat all beers" />

                            <Link to="/all-beers" className="cat-link"><span>All Beers</span></Link>

                            </div>

                            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>

                        </div>

                        <div className="cat item">

                            <div className="image-container">

                            <Link to="/random-beers" className="full-link" />

                            <img src={randomBeers} alt="Cat all beers" />

                            <Link to="/random-beers" className="cat-link"><span>Random Beers</span></Link>

                            </div>

                            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>

                        </div>

                    </div>

                </div>
           </div>
    }
  
export default Home;
