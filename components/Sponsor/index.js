import React, { Component } from 'react'
import { Header, SubHeader } from '../Core/Text'
import SponsorImage from './SponsorImage'
import styled from 'styled-components'
import { Container } from 'reactstrap'

const SponsorBg = styled.div`
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    padding-top: 53px;
`

const WrapLogo = styled.div`
    background-color: #c4c4c4;
    text-align: center;
    padding: 10px;
    margin-top: 94px;

    @media (min-width: 768px) {
        margin-top: 82px;
        padding: 40px 20px;
    }
    
    @media (min-width: 1024px) {
        margin-top: 124px;
        padding: 103px 68px;
    }
`
export default class Sponsor extends Component {
    state= {
        images: [
            { src: "/img/Sponsor/alibaba.png" },
            { src: "/img/Sponsor/thaibev.png" },
            { src: "/img/Sponsor/kohkae.png" },
            { src: "/img/Sponsor/stream.png" },
            { src: "/img/Sponsor/kfc.png" },
            { src: "/img/Sponsor/bangmod.png" },
            { src: "/img/Sponsor/pandt.png" },
            { src: "/img/Sponsor/Lnw.png" },
            { src: "/img/Sponsor/yip.png"  },
            { src: "/img/Sponsor/dekd.png" },
            { src: "/img/Sponsor/Lactasoy.png"  },
            { src: "/img/Sponsor/CPALL.png"  },
            { src: "/img/Sponsor/pantip.png" },
            { src: "/img/Sponsor/central.png"  }
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
