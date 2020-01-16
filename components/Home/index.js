import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ZodiacRing from './ZodiacRing'
import styled from 'styled-components'
import { Button } from 'reactstrap'
import Star from '../Core/Star'


const HomeContainer = styled.div`
    background: url(/img/Home/Home-nav1.png) no-repeat center center;
    display: table;
    height: 80vh;
    position: relative;
    width: 100%;
    background-size: cover;
`

const HomeContent = styled.div`
    display: table-cell;
    text-align: center;
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


export default class Home extends Component {
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
            <HomeContainer>
                <HomeContent>
                    <WipLogoImg src='/img/Home/wiplogo.png' />
                    <br />
                    <LogoImg src='/img/Home/logo-sit1.png'  width="76.59px" height="67.91px" />
                    <LogoImg src='/img/Home/logo-sit2.png'  width="148.58px" height="69.42px" />
                    <LogoImg src='/img/Home/LogoCana.png'   width="142.46px" height="73.95px" />
                    <br />
                    <StyledButton>REGISTER</StyledButton>
                </HomeContent>
            </HomeContainer>

        )
    }
}
