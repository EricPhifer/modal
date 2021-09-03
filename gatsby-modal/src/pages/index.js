import React, { useRef } from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal';

const ModalStyles = styled.div`
  text-align: center;
  h3 {
    text-align: center;
    padding: 2rem 0;
  }
  p {
    max-width: 750px;
    margin: 0 auto 1rem auto;
  }
  button {
    background-color: slateblue;
    box-shadow: -2px -2px 5px black;
    max-width: 200px;
    margin: 2rem auto;
    &:hover {
      box-shadow: 2px 2px 5px black;
    }
  }
  @media only screen and (max-width: 400px) {
    p {
      font-size: 1.5rem;
      margin: 0 1.5rem;
    }
  }
`;

export default function ModalPage() {
  const modalRef = useRef();
  return (
    <>
      <ModalStyles>
        <div className="modalContainer">
          <h3 className="modalHeader">Header for Modal</h3>
          <p>Content for Modal. Open it below.</p>
          <button
            type="button"
            name="modalButton"
            onClick={() => modalRef.current.openModal()}
          >
            Open Modal
          </button>
        </div>
        <Modal ref={modalRef}>
          <div />
        </Modal>
      </ModalStyles>
    </>
  );
}
