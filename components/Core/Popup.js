import React, { Component, Fragment, useState } from 'react'
import styled from 'styled-components'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const PopupImage = styled.img`
    width: 100%;
   
`

const StyledModalBody = styled(ModalBody)`
    padding: 0px;
`

const CloseIcon = styled.a`
    position: absolute;
    right: 32px;
    top: 32px;
    width: 32px;
    height: 32px;
    opacity: 0.3;
    cursor: pointer;

    :hover {
     opacity: 1;
    }

    :before, :after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: white;
    }

    :before {
        transform: rotate(45deg);
    }

    :after {
        transform: rotate(-45deg);
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
                    <PopupImage src="/img/Core/popupContent.png" />
                </StyledModalBody>

            </Modal>
        </Fragment>
    );
}

export default ModalExample;
