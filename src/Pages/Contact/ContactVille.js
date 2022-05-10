import React from "react";
import { Cadre, DescriptionDpt } from './ContactStyle';

class ContactVille extends React.Component{
    render(){
        return(
        <Cadre className='PyrA'>
        <img src={this.prop.image} alt="Pamiers"/>
        <DescriptionDpt>
        <i class="fa-solid fa-phone"></i>
        <p>{this.prop.telephone}</p>
        <i class="fa-solid fa-location-dot"></i>
        <p>{this.prop.adresse}</p>
        </DescriptionDpt>
        </Cadre>
        )
    }
}

export default ContactVille;