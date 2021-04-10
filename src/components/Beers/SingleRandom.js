import {useEffect, useState } from "react";
import { getRandomBeer } from '../../API/BeerAPI';
import { useHistory } from "react-router-dom";
import SingleView from '../Beers/SingleView';

const RandomBeers = (props) => {

    let history = useHistory();

    const [randomPost, setRandomPost] = useState(null);

    useEffect(() => {
        getRandomBeer().then((data) => setRandomPost(data));
      }, []);

      if(randomPost) {

        document.body.classList.remove('loading');

        return <SingleView data={randomPost} view={"random"} />

    } else {

      document.body.classList.add('loading');

      return <div className="lds-roller">
           <div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>

      }

    
    }
  
export default RandomBeers;
