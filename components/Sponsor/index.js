import React, { Component, Fragment } from 'react'
import { Header, SubHeader } from '../Core/Text'
import SponsorImage from './SponsorImage'
import styled from 'styled-components'
import { Container } from 'reactstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SponsorBg = styled.div`
    position: relative;
    padding-top: 3em;
    padding-bottom: 3em;

    @media (min-width: 768px) {
        padding-top: 5em;
    }

    @media (min-width: 1024px) {
        padding-top: 8em;
    }
`

const WrapLogo = styled.div`
    
    
    text-align: center;
    margin: 2em 2.25em 0;

    @media (min-width: 768px) {
        margin: 2em 3em 0;
    }
    
    @media (min-width: 1024px) {
        border: 50px solid transparent;
        border-image: url(/img/Sponsor/Frame.png) 80 stretch;
        margin: -1.5em;
        padding: 2.5em;
    }
`

const Frame = styled.div`
background-color: #FAFAFA;
margin: 3em 0 0;

`

const Star1 = styled.img`
    position: absolute;
    top: 2vh;
    left: -8vw;
    width: 15vw;
`

const Star2 = styled(Star1)`
    top: 90vh;
    width: 15vw;

    @media (min-width: 1366px) {
        left: 92vw;
    }

    @media (min-width: 1535px) {
        left: 91vw;
    }

`

const Zodiac1 = styled.img`
    position: absolute;
    width: 8vw;
    top: 60vh;
    left: 90vw;
`

const Zodiac2 = styled(Zodiac1)`
    top: 85vh;
    width: 3vw;

    @media (min-width: 1366px) {
        left: 92vw;
    }

    @media (min-width: 1535px) {
        left: 91vw;
    }
`

const Zodiac3 = styled(Zodiac1)`
    top : 50vh;
    width: 5vw;
    left: 2vw;
`

const Zodiac4 = styled(Zodiac1)`
    top : 70vh;
    width: 5vw;
    left: 2vw;
`

const GroupOfStar = () => {
    return (
        <Fragment>
            <Star1 src="/img/Sponsor/star1.png" data-aos="fade-down-right" />
            <Zodiac1 src="/img/Core/zodiac2.png" data-aos="fade-down-left" />
            <Zodiac2 src="/img/Core/zodiac1.png" data-aos="fade-down-left" />
            <Zodiac3 src="/img/Sponsor/zodiac3.png" data-aos="fade-down-right" />
            <Zodiac4 src="/img/Sponsor/zodiac4.png" data-aos="fade-down-right" />
        </Fragment>
    )
}
export default class Sponsor extends Component {
    state = {
        isMobile: true,
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

    componentDidMount = () => {
        window.addEventListener('resize', this.updateDimensions)
        this.updateDimensions()
        AOS.init({
            duration: 3000
        })
    }

    updateDimensions = () => {
        if (window.innerWidth < 1366) {
            this.setState({
                isMobile: true
            })
        } else {
            this.setState({
                isMobile: false
            })
        }
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    getType = () => {
        return this.state.isMobile
    }

    render() {
        return (
            <SponsorBg>
                {
                    (this.getType()) ?
                        <Fragment></Fragment>
                        : <GroupOfStar />
                }
                <div className="text-center">
                    <Header color="white" headerText="SPONSORS" />
                    <SubHeader color="white" subHeaderText="ผู้สนับสนุน" />
                </div>
                <Container>
                    <Frame>
                        <WrapLogo>
                            {this.state.images.map((data, key) => (
                                <SponsorImage key={key} src={data.src} width={data.width} height={data.height} />
                            ))}
                        </WrapLogo>
                    </Frame>
                </Container>
            </SponsorBg>
        )
    }
}
