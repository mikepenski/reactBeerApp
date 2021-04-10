import {
    useParams,
  } from "react-router-dom";

import SingleView from '../Beers/SingleView';

const SingleBeer = (props) => {

    const { id } = useParams();
    
    let post = props.getPost(id);
    post = post[0];

    if(typeof post !== "undefined"){

        document.body.classList.remove('loading');

        return <SingleView data={post} view={"single"} />
        
    } else {

        document.body.classList.add('loading');

        return <div className="lds-roller">
             <div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>

    }

    
    }
  
export default SingleBeer;
