import {
    Link
  } from "react-router-dom";

const Card = (props) => {

    const { _id, name, image_url, tagline } = props.data;
    const id = _id;

    //console.log(props.data);

    return <div className="card h-100 border-0" id={"beer-" + id}>

                <div className="card-body">

                  <div className="row">

                    <div className="col-5">

                      <div className="img-container">
                        <Link to={"/beer/" + id} key={name}>
                              <img src={image_url} className="img" alt="Beer" height="191" loading="lazy" />
                        </Link>
                      </div>

                    </div>

                    <div className="col-7">

                      <h1 className="title">
                        {name}
                      </h1>

                      <h2 className="tagline">
                        {tagline}
                      </h2>

                      <p className="created">Created by: {name}</p>

                      <Link
                      to={{
                          pathname: "/beer/" + id,
                          state: props.data // your data array of objects
                      }}
                      className="btn btn-primary text-white details"
                      >
                      Details
                      </Link>

                    </div>

                  </div>

                </div>
             
           </div>
           
    }
    
export default Card;

