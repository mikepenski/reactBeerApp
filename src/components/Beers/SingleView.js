import { useHistory } from "react-router-dom";
import arrowLeft from '../../assets/img/arrowLeft.svg';
import reloadIcon from '../../assets/img/reload.svg';

const SingleView = (props) => {

    let post = props.data;
    let history = useHistory();

   /*  let button;

    if (props.view !== "single") {
        button =  "d-none";
      } */

    if(typeof post !== "undefined"){

        const { _id, name, image_url, tagline, description } = post;

        console.log(post)

        return <div className="singleBeer">

                <div className="container py-5">

                    <div className={"beer-" + _id }>

                        {props.view !== "single" && <strong>Your random beer:</strong> }

                        <div className="image-container p-4">
                            <img src={image_url} alt={"Image" + name} height="191" />
                        </div>

                        <h1 className="title d-block">{name}</h1>

                        <h2 className="tagline">{tagline}</h2>

                        <p className="description">{description}</p>

                        {props.view !== "single" ?

                        <div onClick={() => {
                            window.location.reload();
                        }}
                        className="refresh-page"
                        >
                        <img src={reloadIcon} alt="Reload Icon" />
                        </div>

                        :

                        <div onClick={() => {
                            if (history.action !== 'POP') history.goBack();
                        }}
                        className={history.action === 'POP' ? "go-back disabled" : "go-back"}
                        >
                        <img src={arrowLeft} alt="Go back icon" />
                        </div>
                    
                        }

                        {/*

                        <div onClick={() => {
                                if (history.action !== 'POP') history.goBack();
                            }}
                            className={button + " go-back"}
                            disabled={history.action === 'POP'}
                            >
                            <img src={arrowLeft} alt="Beer Single" />
                        </div>
                        
                        */}
                    
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
