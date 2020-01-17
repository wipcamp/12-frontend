import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from 'reactstrap'
import Star from '../Core/Star'


const HomeContainer = styled.div`
    
    display: table;
    position: relative;
    height: 100vh;
    width: 100%;
    
`

const HomeContent = styled.div`
    text-align: center;
    display: table-cell;
    vertical-align: middle;
`

const WipLogoImg = styled.img`
    width: 467px;
    height: 175px;
    
`

const LogoImg = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    margin: 1%;
`

const StyledButton = styled(Button)`
    background-color: white;
    color: black !important;
    border-radius: 50px;
    padding: 15px 53px;
`
const Wippo = styled.img`
    position: absolute;
    bottom: -100px;
    right: 0;
    display:none;
    @media (min-width: 1024px) {
	  display: block;
  }
`


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noBg: 'rgba(255, 255, 255, 0.0)',
            defaultMobile: 'darkgrey',
            defaultDesktop: 'black',
            width: 0,
            height: 0,
            isDesktop: true
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }




    listenScrollEvent = e => {
        if (window.innerWidth >= 1080 && this.state.isDesktop) {
            if (window.scrollY > 200) {
                document.getElementById('navcolor').style.backgroundColor = this.state.defaultDesktop
                document.getElementById('navcolor').style.height = '50px'
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

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        if (window.innerWidth < 1080) {
            this.setState({ isDesktop: false})
            document.getElementById('navcolor').style.backgroundColor = this.state.defaultMobile
            document.getElementById('navcolor').style.height = ''
        }else if (window.innerWidth >= 1080) {
            this.setState({ isDesktop: true})
            document.getElementById('navcolor').style.backgroundColor = this.state.defaultDesktop
            document.getElementById('navcolor').style.height = '89px'
        } 
    }

    render() {
        return (
            // <HomeContainer>
            //     <Star>
            //         <Container>
            //             <Row>
            //                 <Col>
            //                 <ZodiacContainer>
            //                     <ZodiacRing/>
            //                     <LogoImg src='/img/Home/wiplogo.png' />
            //                 </ZodiacContainer>
            //                 </Col>
            //             </Row>
            //         </Container>
            //     </Star>
            // </HomeContainer>
            <Star>
                <HomeContainer>

                    <HomeContent>

                        <WipLogoImg src='/img/Home/wiplogo.png' />
                        <br />
                        <LogoImg src='/img/Home/logo-sit1.png' width="76.59px" height="67.91px" />
                        <LogoImg src='/img/Home/logo-sit2.png' width="148.58px" height="69.42px" />
                        <LogoImg src='/img/Home/LogoCana.png' width="142.46px" height="73.95px" />
                        <br />
                        <StyledButton>REGISTER</StyledButton>
                    </HomeContent>
                </HomeContainer>
                <Wippo src="/img/Who/Wippo.png" />
            </Star>
        )
    }
}
