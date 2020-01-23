import React, { Component } from 'react'
import { Header, SubHeader } from '../Core/Text'
import SponsorImage from './SponsorImage'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'

const SponsorBg = styled.div`
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    padding-top: 3em;

    @media (min-width: 768px) {
        padding-top: 5em;
    }

    @media (min-width: 1024px) {
        padding-top: 8em;
    }
`

const WrapLogo = styled.div`
    background-color: #c4c4c4;
    text-align: center;
    margin: 2em 2.25em 0;

    @media (min-width: 768px) {
        margin: 2em 3em 0;
    }
    
    @media (min-width: 1024px) {
        margin: 3em 0 0;
        padding: 2.5em;
    }
`
export default class Sponsor extends Component {
    state = {
        images: [
            { src: "/img/Sponsor/alibaba.png" },
            { src: "/img/Sponsor/thaibev.png" },
            { src: "/img/Sponsor/kohkae.png" },
            { src: "/img/Sponsor/stream.png" },
            { src: "/img/Sponsor/kfc.png" },
            { src: "/img/Sponsor/bangmod.png" },
            { src: "/img/Sponsor/pandt.png" },
            { src: "/img/Sponsor/Lnw.png" },
            { src: "/img/Sponsor/yip.png" },
            { src: "/img/Sponsor/dekd.png" },
            { src: "/img/Sponsor/Lactasoy.png" },
            { src: "/img/Sponsor/CPALL.png" },
            { src: "/img/Sponsor/pantip.png" },
            { src: "/img/Sponsor/central.png" }
        ]
    };
    render() {
        return (
            <SponsorBg>
                <div className="text-center">
                    <Header color="white" headerText="SPONSOR" />
                    <SubHeader color="white" subHeaderText="ผู้สนับสนุน" />
                </div>
                
                    <Container>
                            <WrapLogo>
                                {this.state.images.map((data, key) => (
                                    <SponsorImage key={key} src={data.src} width={data.width} height={data.height} />
                                ))}
                            </WrapLogo>
                            </Container>
                        

                
            </SponsorBg>
        )
    }
}
