import { Link } from 'react-router-dom';
import allBeers from '../../assets/img/all-beers.jpg';
import randomBeers from '../../assets/img/random-beers.jpg';

const navitems = [

    {
        'name' : 'All Beers',
        'link' : '/all-beers',
        'image' : allBeers
    }, 

    {
        'name' : 'Random Beer',
        'link' : '/random-beer',
        'image' : randomBeers
    }

]

const Home = (props) => {
    
    return <div className="home">

                <div className="container py-2">

                    <div className="categories">

                        {navitems.map((item, index) => {

                            return <div className="cat item mb-4" key={index + "item"}>

                                <div className="image-container">

                                    <Link to={navitems[index].link} className="full-link" />

                                    <img src={navitems[index].image} alt={"Image" + navitems[index].name} className="w-100" />

                                    <Link to={navitems[index].link} className="cat-link"><span>{navitems[index].name}</span></Link>

                                    </div>

                                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>

                                </div>
                        }

                        )}

                    </div>

                </div>
           </div>
    }
  
export default Home;
