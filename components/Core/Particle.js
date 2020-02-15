import React, { Component, Fragment } from 'react'
import Particles from 'react-particles-js';
import styled from 'styled-components';


const ParticleContainer = styled.div`
    background: rgb(9,10,15);
    background: linear-gradient(90deg, rgba(9,10,15,1) 0%, rgba(27,39,53,1) 50%, rgba(9,10,15,1) 100%);
    background-color: black;
    height: 100%;
    width: 100%;
`
const ParticleStyle = {
    position:'absolute'
}
const ParticleStyleMobile = {
    position:'fixed'
}



export default class StarParticle extends Component {
    state={
        WindowHeight: '2000px',
        innerHeight: '1000px',
        move: true
    }
    
    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions)
        this.updateWindowDimensions()
        this.moveCheck()
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions)
    }
    updateWindowDimensions = () => {
        let Height = window.document.body.offsetHeight+"px"     
        let inHeight = window.document.body.clientHeight+"px" 
        this.setState({
            WindowHeight: Height,
            innerHeight: inHeight
        })
        this.moveCheck()
    }

    moveCheck = () => {
        if (window.innerWidth < 768){
            this.setState({
                move: false
            })   
        }else{
            this.setState({
                move: true
            })  
        }
    }

    
    getMove = () => {
        return this.state.move
    }

    getHeight = () => {
        return this.state.WindowHeight
    }
    render() {
        if (this.getMove()){
        return (

            <ParticleContainer>
            <Particles key="move" height={this.getHeight()} style={ParticleStyle}
        params={{
            "particles": {
                "number": {
                    "value": 50,
                    "density": {
                        "enable": true,
                        "value_area": 1000
                    }
                },
                "line_linked": {
                    "enable": false,
                    "opacity": 0.02
                },
                "move": {
                    "enable": false,
                    "direction": "right",
                    "speed": 0
                },
                "size": {
                    "value": 2,
                    "random": true
                },
                "opacity": {
                    'value': 1,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0
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
    }else {
        return (

            <ParticleContainer>
            <Particles key="don't move" height={this.state.innerHeight} style={ParticleStyleMobile}
        params={{
            "particles": {
                "number": {
                    "value": 120,
                    "density": {
                        "enable": true,
                        "value_area": 1000
                    }
                },
                "line_linked": {
                    "enable": false,
                    "opacity": 0.02
                },
                "move": {
                    "enable": true,
                    "direction": "none",
                    "speed": 0.125
                },
                "size": {
                    "value": 2,
                    "random": true
                },
                "opacity": {
                    'value': 0.8,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0
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
}

