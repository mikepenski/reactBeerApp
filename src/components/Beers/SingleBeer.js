import {
    useParams,
  } from "react-router-dom";

import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container'

const SingleBeer = (props) => {

    let history = useHistory();
    const { id } = useParams();
    
    let post = props.getPost(id);
    post = post[0];

    console.log(post);

    if(typeof post !== "undefined"){

        const { name, image_url } = post;

        return <div className="home">

                <div className="container py-5">

                    <div className={"beer" + id }>

                        <div className="row">

                            <div className="col-6">

                                <img src={image_url} alt={"Image" + name} height="191" />

                            </div>

                            <div className="col-6">

                              <div className="title d-block">{name}</div>
                                
                            </div>

                        </div>
                    
                    </div>

                </div>
                
           </div>

        
    } else {
        return <div className="post">
             Loading
     </div>

    }

    
    }
  
export default SingleBeer;
