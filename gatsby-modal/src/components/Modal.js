/* Modal code from: https://levelup.gitconnected.com/accessible-modals-in-gatsby-using-portals-1e80e33a8a2 */

import React, { useState, forwardRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import { ImCross } from 'react-icons/im';
import Portal from './Portal';

const PortalStyles = styled.div`
  height: 100vh;
  width: 100vw;
  top: 50%;
  left: 50%;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  transform: translate(-50%, -50%);
  z-index: 100;
  .modalContainer {
    max-width: 1050px;
    width: 95vw;
    max-height: 90vh;
    height: 90vh;
    top: 50%;
    left: 50%;
    position: fixed;
    color: black;
    background: repeating-linear-gradient(
      darkslategrey,
      slategrey,
      lightslategrey
    );
    text-align: center;
    transform: translate(-50%, -50%);
    z-index: 100;
    .contentContainer {
      height: 98%;
      background: white;
      margin: 0.5rem;
      overflow: scroll;
    }
    p {
      max-width: 750px;
      margin: 1rem auto;
    }
  }
  button {
    position: relative;
    background-color: transparent;
    font-family: 'Times New Roman', Times, serif;
    font-size: 2rem;
    box-shadow: none;
    float: right;
    z-index: 102;
  }

  @media only screen and (max-width: 800px) {
    .contentContainer {
      p {
        margin: 1rem 1.5rem;
        font-size: 1.5rem;
      }
    }
  }
  @media only screen and (max-width: 400px) {
    .contentContainer {
      p {
        margin: 1rem 0.5rem;
        font-size: 1.2rem;
      }
    }
  }
`;

const Modal = forwardRef((props, ref) => {
  Modal.displayName = 'Modal';
  const [display, setDisplay] = useState(false);

  const handleOpen = () => {
    setDisplay(true);
  };

  const handleClose = () => {
    setDisplay(false);
  };

  useImperativeHandle(ref, () => ({
    openModal: () => handleOpen(),
    closeModal: () => handleClose(),
  }));

  if (display) {
    return (
      <Portal>
        <PortalStyles>
          <div className="modalBackdrop" />
          <div className="modalContainer">
            <div className="contentContainer">
              <h2>Content Header</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
                mi bibendum neque egestas congue. Id cursus metus aliquam
                eleifend mi. Risus at ultrices mi tempus. Dui faucibus in ornare
                quam viverra. Integer feugiat scelerisque varius morbi enim.
                Nibh nisl condimentum id venenatis a condimentum. Mattis rhoncus
                urna neque viverra justo nec ultrices. Ut morbi tincidunt augue
                interdum. Quam elementum pulvinar etiam non quam lacus
                suspendisse faucibus interdum. Vitae sapien pellentesque
                habitant morbi tristique senectus et netus et. Sit amet
                venenatis urna cursus. Leo integer malesuada nunc vel. Magna
                eget est lorem ipsum dolor sit amet. Urna cursus eget nunc
                scelerisque viverra mauris in aliquam sem. Urna nunc id cursus
                metus aliquam eleifend mi.
              </p>
              <p>
                Purus sit amet volutpat consequat mauris nunc. Mauris vitae
                ultricies leo integer malesuada nunc vel risus. Sed viverra
                tellus in hac habitasse. Tellus mauris a diam maecenas sed enim.
                Velit dignissim sodales ut eu sem. At erat pellentesque
                adipiscing commodo elit at imperdiet dui. Justo laoreet sit amet
                cursus sit amet dictum. Augue mauris augue neque gravida in
                fermentum. Sit amet risus nullam eget felis eget nunc lobortis.
                Mi ipsum faucibus vitae aliquet nec. Facilisi cras fermentum
                odio eu feugiat pretium nibh. Aliquam ultrices sagittis orci a
                scelerisque purus semper eget duis. Est ante in nibh mauris
                cursus. At consectetur lorem donec massa sapien faucibus et
                molestie ac. Enim facilisis gravida neque convallis a. Et magnis
                dis parturient montes nascetur ridiculus mus mauris. Morbi quis
                commodo odio aenean sed adipiscing. Faucibus ornare suspendisse
                sed nisi lacus sed viverra. Eu volutpat odio facilisis mauris
                sit amet massa vitae.
              </p>
              <p>
                Proin gravida hendrerit lectus a. Sapien et ligula ullamcorper
                malesuada proin libero nunc. Integer feugiat scelerisque varius
                morbi enim nunc faucibus a. Tristique magna sit amet purus
                gravida quis blandit turpis cursus. A diam sollicitudin tempor
                id eu nisl nunc. Ornare suspendisse sed nisi lacus sed viverra
                tellus in. Dignissim sodales ut eu sem integer vitae justo.
                Aliquam purus sit amet luctus venenatis. Pellentesque adipiscing
                commodo elit at imperdiet dui accumsan. Dignissim diam quis enim
                lobortis scelerisque fermentum dui faucibus. Facilisi nullam
                vehicula ipsum a. Cursus vitae congue mauris rhoncus aenean vel.
                Velit aliquet sagittis id consectetur purus. Metus dictum at
                tempor commodo ullamcorper. Lorem donec massa sapien faucibus et
                molestie ac feugiat sed. Lobortis mattis aliquam faucibus purus
                in massa tempor nec feugiat. Dui ut ornare lectus sit.
              </p>
              <p>
                Viverra aliquet eget sit amet tellus cras adipiscing enim.
                Mattis pellentesque id nibh tortor id aliquet lectus proin nibh.
                Convallis tellus id interdum velit. Nisl suscipit adipiscing
                bibendum est ultricies. Nec feugiat nisl pretium fusce. Donec et
                odio pellentesque diam volutpat. Varius morbi enim nunc faucibus
                a pellentesque sit. Convallis convallis tellus id interdum velit
                laoreet id donec ultrices. Venenatis tellus in metus vulputate
                eu. Est placerat in egestas erat imperdiet. Lorem ipsum dolor
                sit amet. Vitae sapien pellentesque habitant morbi tristique
                senectus et. Vulputate enim nulla aliquet porttitor lacus luctus
                accumsan tortor. Quis enim lobortis scelerisque fermentum dui
                faucibus in ornare quam. Tellus cras adipiscing enim eu turpis
                egestas. Nibh sit amet commodo nulla facilisi nullam. Augue
                neque gravida in fermentum et sollicitudin ac orci phasellus.
                Pretium quam vulputate dignissim suspendisse in est ante. Nulla
                pellentesque dignissim enim sit. Sed elementum tempus egestas
                sed sed risus pretium quam vulputate.
              </p>
              <p>
                Vitae nunc sed velit dignissim. Mattis vulputate enim nulla
                aliquet porttitor lacus luctus accumsan. Vitae suscipit tellus
                mauris a diam maecenas sed. Sem viverra aliquet eget sit amet
                tellus cras. Mi proin sed libero enim sed faucibus turpis.
                Varius vel pharetra vel turpis. Vitae purus faucibus ornare
                suspendisse sed. Fames ac turpis egestas sed tempus urna et. In
                ornare quam viverra orci sagittis. Quisque sagittis purus sit
                amet volutpat consequat mauris nunc. Elementum tempus egestas
                sed sed risus pretium. Ultrices eros in cursus turpis massa
                tincidunt dui. Blandit turpis cursus in hac habitasse platea
                dictumst. Nulla pellentesque dignissim enim sit amet venenatis
                urna cursus.
              </p>
              {props.children}
            </div>
          </div>
          <button type="button" onClick={handleClose}>
            <ImCross />
          </button>
        </PortalStyles>
      </Portal>
    );
  }

  return null;
});

export default Modal;
