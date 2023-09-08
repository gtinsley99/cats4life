import {Background, Wrapper, Para, CloseButton} from "./Modal.styles";

const Modal = (props) => {
    
    const closeModal = () => {
        props.setShowModal(false);
    }

    return(
        <Background>
        <Wrapper>
            <Para>Thank you for your purchase!</Para>
            <CloseButton onClick={closeModal}>Close</CloseButton>
        </Wrapper>
        </Background>
    )
}

export default Modal;