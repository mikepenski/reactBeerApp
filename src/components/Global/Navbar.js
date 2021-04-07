import logo from '../../assets/img/Logo.svg';
import Container from 'react-bootstrap/Container';

import {
    Link
  } from "react-router-dom";

const Contact = (props) => {

    return <div className="mainNav navbar">

                <Container className="d-flex align-items-center justify-content-center">

                    <Link to="/" className="d-inline-block">
                    <img src={logo} alt="BeerApp Logo" width="57" height="57" />
                    </Link>

                </Container>
              
           </div>
           
    }
  
export default Contact;

