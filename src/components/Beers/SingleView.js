import {useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import arrowLeft from '../../assets/img/arrowLeft.svg';
import reloadIcon from '../../assets/img/reload.svg';

import Button from 'react-bootstrap/Button'
import { Nav, Accordion, useAccordionToggle } from 'react-bootstrap'

const SingleView = (props) => {

    let post = props.data;
    let history = useHistory();

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
      setActive(!isActive);
    };

    const [panelIndex, setPanelIndex] = useState(0)
    const [activeClass, setActiveClass] = useState()

    const CustomToggle = ({ children, eventKey }) => {

        const customOnClick = useAccordionToggle(eventKey, (e) => {

            let target = e.target.parentNode;

            setPanelIndex( eventKey === panelIndex ? null : eventKey )

        })

       /*

        let customClass;

        if(eventKey != 0){
            customClass = (eventKey === panelIndex) ? "active" : "";
        } else {
            customClass = (eventKey === panelIndex) ? "" : "active";
        }
        

       */

        let customClass = (eventKey === panelIndex) ? "active" : "";

        return (
        <Nav.Link className={ customClass } onClick={ customOnClick}>
            { children }
        </Nav.Link>
        )

    }


   /*  let button;

    if (props.view !== "single") {
        button =  "d-none";
      } */

    if(typeof post !== "undefined"){

        const { _id, name, image_url, tagline, description, first_brewed, attenuation_level, ingredients, contributed_by, food_pairing, volume } = post;
        const { malt, hops, yeast } = ingredients;

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

                        <div className="additional-info mb-2">

                            <div className="row">
                                <div className="col-6">
                                    First brewed: 
                                </div>
                                <div className="col-6 text-right">
                                    {first_brewed}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    Attenuation level: 
                                </div>
                                <div className="col-6 text-right">
                                    {attenuation_level}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                  Volume: 
                                </div>
                                <div className="col-6 text-right">
                                {volume.value}  {volume.unit}
                                </div>
                            </div>

                        </div>
                        
                        <p className="description mb-4">
                            {description}
                        </p>

                        {ingredients && 

                            <div className="ingredients">

                                <h4>Ingredients</h4>

                                <Accordion>
                                                
                                    <div class="accordion-item">
                                        <CustomToggle eventKey="0" class="active">
                                           <strong>Malt:</strong>
                                        </CustomToggle>
      
                                        <Accordion.Collapse eventKey="0">
                                            <ul>
                                                {malt && malt.map((item, index) => {
                                                    return  <li key={index + "col"}>
                                                        {item.amount.value}  {item.amount.unit}  {item.name} <br />
                                                    </li>
                                                })}
                                            </ul>
                                        </Accordion.Collapse>
                                    </div>
        
                                    <div class="accordion-item">
                                    <CustomToggle eventKey="1" class="active">
                                         <strong>Hops:</strong>
                                    </CustomToggle>
        
                                        <Accordion.Collapse eventKey="1">
                                            <ul>
                                                {hops && hops.map((item, index) => {
                                                    return  <li key={index + "col"}>
                                                            {item.amount.value}  {item.amount.unit} {item.attribute} {item.name} <br />
                                                    </li>
                                                })}
                                            </ul>
                                            </Accordion.Collapse>
                                        </div>  

                                        <div class="accordion-item">
                                            <CustomToggle eventKey="2" class="active">
                                                  <strong>Yeast:</strong>
                                            </CustomToggle>

                                            <Accordion.Collapse eventKey="2">
                                                <span>
                                                    {yeast}
                                                </span>
                                            </Accordion.Collapse>
                                        </div>
                    
                                    </Accordion>

                            </div>

                        }

                      
                        <div className="mb-4">
                            Contributed by: <br />
                            {contributed_by}
                        </div>
                        
                        
                        {props.view !== "single" ?

                        <div onClick={() => {
                            window.location.reload();
                        }}
                        className="refresh-page"
                        >
                        <img src={reloadIcon} alt="Refresh Icon" />
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
