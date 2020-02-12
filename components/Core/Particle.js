import React, { Component, Fragment } from 'react'
import Particles from 'react-particles-js';
import styled from 'styled-components';


const ParticleContainer = styled.div`
    background: rgb(9,10,15);
    background: linear-gradient(90deg, rgba(9,10,15,1) 0%, rgba(27,39,53,1) 50%, rgba(9,10,15,1) 100%);
    background-color: black;
`
const ParticleStyle = {
    position:'absolute',
}


export default class StarParticle extends Component {
    state={
        WindowHeight: '2000px',
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
        this.setState({
            WindowHeight: Height
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
                    "enable": true,
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
            "retina_detect": false
        }} />  
            {this.props.children}
             </ParticleContainer>
        )
    }else {
        return (

            <ParticleContainer>
            <Particles key="don't move" height={this.getHeight()} style={ParticleStyle}
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
                    "enable": true,
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
                        "enable": false,
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
            "retina_detect": false
        }} />  
            {this.props.children}
             </ParticleContainer>
        )
    }
    }
}

