import {
    Link
  } from "react-router-dom";

const Card = (props) => {

    const { _id, name, image_url } = props.data;
    const id = _id;

    return <div className="card h-100 border-0" id={"beer-" + id}>

                <div className="card-body">

                  <div className="row">

                    <div className="col-6">

                      <div className="img-container">
                        <Link to={"/beer/" + id} key={name}>
                              <img src={image_url} className="img" alt="Beer" height="191" loading="lazy" />
                        </Link>
                      </div>

                    </div>

                    <div className="col-6">

                      <h5 className="title my-2 font-weight-bold">
                        {name}
                      </h5>

                      <Link
                      to={{
                          pathname: "/beer/" + id,
                          state: props.data // your data array of objects
                      }}
                      className="btn btn-primary text-white details px-3"
                      >
                      Details
                      </Link>

                    </div>

                  </div>

                </div>
             
           </div>
           
    }
    
  
export default Card;

