import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import './styles.css'
import styled from 'styled-components'

  
export default class SideBar extends Component {
    render() {
        return (
            <Menu customBurgerIcon={ <img src="img/menu.svg" /> } customCrossIcon={false} disableAutoFocus width={ '60%' }>
            <a className="menu-item" href="#home">
              HOME
            </a>
      
            <a className="menu-item" href="#what">
              WHAT
            </a>
      
            <a className="menu-item" href="#who">
              WHO
            </a>
      
            <a className="menu-item" href="#when">
              WHEN
            </a>
            <a className="menu-item" href="#faqs">
              FAQS
            </a>
          </Menu>
        )
    }
}
