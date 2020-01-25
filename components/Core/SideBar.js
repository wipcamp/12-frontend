import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import './sidebar.css'
import styled from 'styled-components'

const CustomLink = styled.a`
 text-decoration: none !important;
 font-family: 'Prompt-medium', sans-serif;
 font-size: 2em;
 border-bottom: 2px solid grey;
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
      
            <CustomLink className="menu-item" href="#who">
              WHO
            </CustomLink>
      
            <CustomLink className="menu-item" href="#when">
              WHEN
            </CustomLink>
            <CustomLink className="menu-item" href="#faqs">
              FAQS
            </CustomLink>
          </Menu>
        )
    }
}
