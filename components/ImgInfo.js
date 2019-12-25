import React, { Component } from 'react'
import styled from 'styled-components'
import { Content } from './Text'

const Image = styled.img`
margin-right: 50px;
margin-top: 50px;
width: 30%;


`
export default class ImgInfo extends Component {
    render() {
        return (

            <div class="d-flex" style={{ margin: "0 0 20% 0" }}>
                <Image src={this.props.src} />
                <Content content={this.props.info || "Unknow"} color={this.props.color}/>
            </div>

        )
    }
}
