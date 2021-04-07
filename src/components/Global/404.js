import {
    Link
  } from "react-router-dom";


const TheNotFoundPage = (props) => {


    return <div className="card h-100 border-0">

                <div className="card-body ">

                    <h1>404 Error</h1>

                    <Link to="/" className="btn btn-outline-primary read-more">Return to homepage</Link>

                </div>
             
           </div>
           
    }
  
export default TheNotFoundPage;

