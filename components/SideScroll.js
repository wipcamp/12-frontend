import React, { Component } from 'react'
import { FaqsCard } from '../components/Card'
import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  overflow-x: scroll;
  
    width: 100%;
`

const cards = [
    { id: 1, srcFront: "/temp.jpg", srcBack: "/temp2.jpg" },
    { id: 2, srcFront: "/temp.jpg", srcBack: "/temp2.jpg" },
    { id: 3, srcFront: "/temp.jpg", srcBack: "/temp2.jpg" },
    { id: 4, srcFront: "/temp.jpg", srcBack: "/temp2.jpg" },
    { id: 5, srcFront: "/temp.jpg", srcBack: "/temp2.jpg" },
    { id: 6, srcFront: "/temp.jpg", srcBack: "/temp2.jpg" },
    { id: 7, srcFront: "/temp.jpg", srcBack: "/temp2.jpg" },
    { id: 8, srcFront: "/temp.jpg", srcBack: "/temp2.jpg" }
]

export default class SideScroll extends Component {
    render() {

        return (

            <Wrap>
                {/* <FaqsCard srcFront="/temp.jpg" srcBack= "/temp2.jpg" />
                <FaqsCard srcFront="/temp.jpg" srcBack= "/temp2.jpg" />
                <FaqsCard srcFront="/temp.jpg" srcBack= "/temp2.jpg" />
                <FaqsCard srcFront="/temp.jpg" srcBack= "/temp2.jpg" />
                <FaqsCard srcFront="/temp.jpg" srcBack= "/temp2.jpg" />
                <FaqsCard srcFront="/temp.jpg" srcBack= "/temp2.jpg" />
                <FaqsCard srcFront="/temp.jpg" srcBack= "/temp2.jpg" />
                <FaqsCard srcFront="/temp.jpg" srcBack= "/temp2.jpg" />
                <FaqsCard srcFront="/temp.jpg" srcBack= "/temp2.jpg" /> */}
                {cards.map(c => (
                    <FaqsCard
                        key={c.id}
                        srcFront={c.srcFront}
                        srcBack={c.srcBack}
                    />
                ))}
            </Wrap>
        )
    }
}
