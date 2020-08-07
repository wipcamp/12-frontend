import React, { Component, Fragment, useState } from 'react'
import styled from 'styled-components'
import { Modal, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const DesktopPopupImage = styled.img`
    width: 100%;

    @media (min-width: 320px) {
        display: none;
    }
    
    @media (min-width: 1024px){
        display: block;
    }
   
`

const MobilePopupImage = styled.img`
    width: 100%;

    @media (min-width: 320px) {
        display: block;
    }

    @media (min-width: 1024px){
        display: none;
    }
`

const StyledModalBody = styled(ModalBody)`
    padding: 0px;
    border-width: 0 !important;
    border-radius: 0 !important;
`

const CloseIcon = styled.a`
    position: absolute;
    right: 32px;
    top: 15px;
    width: 16px;
    height: 16px;
    opacity: 0.3;
    cursor: pointer;

    :hover {
     opacity: 1;
    }

    :before, :after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 24px;
        width: 2px;
        background-color: white;
    }

    :before {
        transform: rotate(45deg);
    }

    :after {
        transform: rotate(-45deg);
    }

    @media (min-width: 768px) {
        top: 24px;
        
        :before, :after {
            height: 30px;
        }
    }
    
`

const ModalExample = (props) => {

    const [modal, setModal] = useState(true);

    const toggle = () => setModal(!modal);
    return (
        <Fragment>

            <Modal isOpen={modal} className="modal-dialog-centered modal-xl">

                <StyledModalBody>
                    <CloseIcon onClick={toggle} />
                    <DesktopPopupImage src="/img/Core/popupContent.png" />
                    <MobilePopupImage src="/img/Core/mobileAnnounce.png" />
                </StyledModalBody>

            </Modal>
        </Fragment>
    );
}

export default ModalExample;
