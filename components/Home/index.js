import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from 'reactstrap'
import Star from '../Core/Star'


const HomeContainer = styled.div`
    display: table;
    position: relative;
    height: 100vh;
    width: 100%;
    background: rgb(9,10,15);
    background: linear-gradient(90deg, rgba(9,10,15,1) 0%, rgba(27,39,53,1) 50%, rgba(9,10,15,1) 100%);
    
`

const HomeContent = styled.div`
    text-align: center;
    display: table-cell;
    vertical-align: middle;
`

const WipLogoImg = styled.img`
    width: 16em;
    
    @media (min-width: 768px) {
        width: 30em;
    }

    @media (min-width: 1024px) {
        width: 38.5em;
        
    }
`

const LogoImg = styled.img`
    width: 138.77px;
    height: 30.94px;

    @media (min-width: 768px) {
        width: 314.99px;
        height: 70.24px;
    }

    @media (min-width: 1024px) {
        width: 18.3125em;
    }
`

const WrapLogoCana = styled.div`
    margin-top: 9.02px;
    margin-bottom: 17.52px;

    @media (min-width: 768px) {
        margin-top: 21px;
        margin-bottom: 44.76px;
    }

    @media (min-width: 1024px) {
        margin-top: 12px;
        margin-bottom: 47px;
    }
`

const StyledButton = styled(Button)`
    background-color: #F4693D;
    border: none;
    font-family: "Prompt-regular";
    font-size: 12px;
    color: white !important;
    border-radius: 50px;
    padding: 0.5em 1em;

    :hover {
        background-color: white;
        color: #F4693D !important;
    }

    @media (min-width: 768px) {
        font-size: 24px;
        padding: 1.375em 2.625em;
    }

    @media (min-width: 1024px) {
        padding: 0.75em 2.5em;
    }
`

const Wippo = styled.img`
    position: absolute;
    bottom: -5rem;
    right: 0;
    display:none;
    width: 20vw;
    @media (min-width: 1024px) {
	  display: block;
  }
`


export default class Home extends Component {
    state = {
            noBg: 'rgba(255, 255, 255, 0.0)',
            defaultMobile: 'darkgrey',
            defaultDesktop: 'black',
            width: 0,
            height: 0,
            isDesktop: true
        }

    listenScrollEvent = e => {
        if (window.innerWidth >= 1024 && this.state.isDesktop) {
            if (window.scrollY > 200) {
                document.getElementById('navcolor').style.backgroundColor = this.state.defaultDesktop
                document.getElementById('navcolor').style.height = '65px'
                document.getElementById('navcolor').style.lineHeight = '50px'
            } else {
                document.getElementById('navcolor').style.backgroundColor = this.state.noBg
                document.getElementById('navcolor').style.height = '89px'
                document.getElementById('navcolor').style.lineHeight = '70px'
            }
        }
    }


    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions)
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        if (window.innerWidth < 1024) {
            this.setState({ isDesktop: false})
            document.getElementById('navcolor').style.backgroundColor = this.state.defaultMobile
            document.getElementById('navcolor').style.height = ''
        }else if (window.innerWidth >= 1024) {
            this.setState({ isDesktop: true})
            document.getElementById('navcolor').style.backgroundColor = this.state.defaultDesktop
            document.getElementById('navcolor').style.height = '89px'
        } 
    }

    render() {
        return (
                <HomeContainer>
                    <HomeContent>
                        <WipLogoImg src='/img/Home/logo.png' />
                        <WrapLogoCana>
                            <LogoImg src='/img/Home/LogoCana.png' />
                        </WrapLogoCana>
                        <StyledButton>REGISTER</StyledButton>
                    </HomeContent>
                    <Wippo src="/img/Who/Wippo.png" />
                </HomeContainer>
        )
    }
}
