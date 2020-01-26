import React, { Component, Fragment } from 'react'
import Particles from 'react-particles-js';
import styled from 'styled-components';


const ParticleContainer = styled.div`
    /* background: rgb(9,10,15);
    background: linear-gradient(90deg, rgba(9,10,15,1) 0%, rgba(27,39,53,1) 50%, rgba(9,10,15,1) 100%); */
    /* overflow: hidden; */
    background-color: black;
`
const ParticleStyle = {
    position:'absolute',
}


export default class StarParticle extends Component {
    state={
        WindowHeight: '2000px'
    }
    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions)
        this.updateWindowDimensions()
    }
    updateWindowDimensions = () => {
        let Height = window.document.body.offsetHeight+"px"
        this.setState({
            WindowHeight: Height
        })
    }
    render() {
        return (

            <ParticleContainer>
            <Particles height={this.state.WindowHeight} style={ParticleStyle}
        params={{
            "particles": {
                "number": {
                    "value": 60,
                    "density": {
                        "enable": true,
                        "value_area": 1500
                    }
                },
                "line_linked": {
                    "enable": false,
                    "opacity": 0.02
                },
                "move": {
                    "direction": "right",
                    "speed": 0.05
                },
                "size": {
                    "value": 1
                },
                "opacity": {
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.05
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    }
                },
                "modes": {
                    "push": {
                        "particles_nb": 1
                    }
                }
            },
            "retina_detect": true
        }} />  
            {this.props.children}
             </ParticleContainer>
        )
    }
}

