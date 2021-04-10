import {
    useParams,
  } from "react-router-dom";

import { useHistory } from "react-router-dom";
import arrowLeftImage from '../../assets/img/arrowLeft.svg';

const SingleView = (props) => {

    let post = props.data;

    let history = useHistory();
    const { id } = useParams();

    console.log(props.view);

    let button;

    if (props.view !== "single") {
        button =  "d-none";
      }

  
    if(typeof post !== "undefined"){

        const { name, image_url, tagline, description } = post;

        return <div className="singleBeer">

                <div className="container py-5">

                    <div className={"beer" + id }>

                        <div className="image-container p-4">
                            <img src={image_url} alt={"Image" + name} height="191" />
                        </div>

                        <h1 className="title d-block">{name}</h1>

                        <h2 className="tagline">{tagline}</h2>

                        <p className="description">{description}</p>

                        <div onClick={() => {
                                if (history.action !== 'POP') history.goBack();
                            }}
                            className={button + " go-back"}
                            disabled={history.action === 'POP'}
                            >
                            <img src={arrowLeftImage} alt="Beer Image" />
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
  
export default SingleView;
