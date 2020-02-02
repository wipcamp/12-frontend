import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from '../Core/Text'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';

const GameContainer = styled.div`
    padding-top: 3em;
    position: relative;
    
    @media (min-width: 768px) {
        padding-top: 5em;
    }

    @media (min-width: 1024px) {
        padding-top: 8em;
    }
`

const Wrap = styled.div`
    background: url(/img/Game/gamebg.png) center no-repeat;
    position: relative;
    display: table;
    width: 100%;
    height: auto;
    transition: background-size 0.8s ease-in-out, filter 0.8s ease-in-out;
    background-size: 90%;
    filter: grayscale(0);
    pointer-events: none;
    @media (min-width: 768px) {
        height: 771px;   
    }

    @media (min-width: 1024px) {
        height: 500px;  
        :hover{
        background-size: 100%;
        filter: grayscale(0);
    }
        filter: grayscale(50%);  
    }
`

const VerticalAlign = styled.div`
    display: table-cell;
    text-align: center;
    vertical-align: middle;
`

const Content = styled.div`
    margin-top: 41px;
    margin: 2em 2.25em 0; 

    @media (min-width: 768px) {
        margin: 2em 3em 0;
    }

    @media (min-width: 1024px) {
        margin: 3em 0 0;
    }
`

const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    pointer-events: auto;
    transition: transform 0.5s ease-in-out, filter 0.5s ease-in-out;
    &:hover {
        transform: scale(0.9);
        /* filter: drop-shadow(0 0 0.5em #535CA9) */
    }

`
const Play = styled.img`
    width: 30vw;
    height: auto;
    padding-top: 20vh;
    padding-bottom: 20vh;

    @media (min-width: 768px) {
        width: 40vw;
    }

    @media (min-width: 1024px) {
        width: 15vw;
    }
`
const Star1 = styled.img`
    position: absolute;
    top: 5vh;
    left: -8vw;
    width: 20vw;
    display: none;

    @media (min-width: 1024px) {
        display: block;
    }
`

const Star2 = styled(Star1)`
    top: 8vh;
    left: 85vw;
    width: 10vw;
`

export default class Game extends Component {
    componentDidMount = () => {
        AOS.init({
            duration: 3000
        })
    }
    render() {
        return (
            <GameContainer>
                
                    <Star1 src="/img/Game/star1.png" data-aos="fade-down-right"/>
                    <Star2 src="/img/Game/star2.png" data-aos="fade-down-left"/>
                        <Container className="text-center">
                            <Header color="#ffffff" headerText="GAME" />
                            <Content>
                                <Wrap>
                                    <VerticalAlign>
                                        <StyledButton>
                                        <Link href="/Game">
                                            <Play src="/img/Game/play.png" />
                                        </Link>
                                        </StyledButton>
                                    </VerticalAlign>
                                </Wrap>
                            </Content>
                        </Container>
                    
            </GameContainer>
        )
    }
}
