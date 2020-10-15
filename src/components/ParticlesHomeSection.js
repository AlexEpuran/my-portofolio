import React from 'react'
import './ParticlesHomeSection.css'
import Particles from 'react-particles-js';



function ParticlesHomeSection() {
    return (
       <Particles
     params={{
	    "particles": {
	        "number": {
	            "value": 30
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}}  /> 
    );
}


export default ParticlesHomeSection;