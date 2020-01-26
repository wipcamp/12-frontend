import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import './sidebar.css'
import styled from 'styled-components'

const CustomLink = styled.a`
 text-decoration: none !important;
 font-family: 'Prompt-Medium', sans-serif;
 font-size: 16px;
 border-bottom: 1px solid white;
 @media (min-width: 768px) {
  font-size: 24px; 
 }
` 
  
export default class SideBar extends Component {
    render() {
        return (
            <Menu customBurgerIcon={ <img src="img/menu.svg" /> } disableAutoFocus width={ '60%' }>
            <CustomLink className="menu-item" href="#home">
              HOME
            </CustomLink>
      
            <CustomLink className="menu-item" href="#what">
              WHAT
            </CustomLink>
      
            <CustomLink className="menu-item" href="#when">
              WHEN
            </CustomLink>
      
            <CustomLink className="menu-item" href="#when">
              TRACK
            </CustomLink>
            <CustomLink className="menu-item" href="#faqs">
              FAQS
            </CustomLink>
          </Menu>
        )
    }
}
