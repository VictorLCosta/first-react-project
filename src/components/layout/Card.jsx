import React from "react";
import './Card.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons' 
import { faPhone } from '@fortawesome/free-solid-svg-icons' 
import { faExpand } from '@fortawesome/free-solid-svg-icons' 
import { faBed } from '@fortawesome/free-solid-svg-icons' 
import { faBath} from '@fortawesome/free-solid-svg-icons' 

const Card = (props) => {

    var { src, price, name, address } = props

    return (
        <div className="box">
            <div className="box-img">
                <img src={src} alt={name} />
                <div className="info">
                    <h3>3 days ago</h3>
                    <h3>for rent</h3>
                </div>
                <div className="icons">

                </div>
            </div>

            <div className="box-content">
                <div className="price">
                    <h3>{price}</h3>
                    <a href="#"><FontAwesomeIcon icon={faHeart}/></a>
                    <a href="#"><FontAwesomeIcon icon={faEnvelope}/></a>
                    <a href="#"><FontAwesomeIcon icon={faPhone}/></a>
                </div>

                <div className="locations">
                    <h3>{ name }</h3>
                    <p>{ address }</p>
                </div>

                <div className="details">
                    <h3><FontAwesomeIcon icon={faExpand} /> 3500 sqft</h3>
                    <h3><FontAwesomeIcon icon={faBed} /> 2 beds</h3>
                    <h3><FontAwesomeIcon icon={faBath} /> 3 baths</h3>
                </div>

                <div className="actions">
                    <a href="#" className="btn-action">Request Info</a>
                    <a href="#" className="btn-action">View Details</a>
                </div>
            </div>
        </div>
    )
}

export default Card