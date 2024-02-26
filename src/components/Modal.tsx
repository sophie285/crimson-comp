import { useState } from 'react';
import { createPortal } from 'react-dom'

const modalRoot = document.getElementById('modal')

export default function Modal() {
  // access modal root element with
  // this is where the modal should be rendered and destroyed

  // State to track whether the modal is open
  const [isOpen, setIsOpen] = useState(false);
  // Wasn't totally sure what the button was supposed to do so it currently
  // changes the color, but other functionality could be implemented
  const [buttonClicked, setButtonClicked] = useState(false);

  // handle open and close buttons
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setButtonClicked(false);
  };

  return (
    <>
      {
        // handle button click to change state
      }
      <button onClick={openModal}>Open</button>
      <button onClick={closeModal}>Close</button>

      {
        // conditionally show modal based on open state
      }
      {isOpen && createPortal(
        <div style={{
          position: 'fixed', // Use fixed positioning to overlay content
          top: '50%', // Center vertically
          left: '50%', // Center horizontally
          transform: 'translate(-50%, -50%)',
          width: '20rem',
          height: '20rem',
          backgroundColor: buttonClicked ? 'rgb(1, 3, 115)' : 'rgb(115, 3, 1)',
          zIndex: 1050, // Ensure it appears above other content
          textAlign: 'center',
        }}>
        <button
            style={{
              backgroundColor: 'white',
              color: 'black',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={() => {
              // Toggle button clicked state
              setButtonClicked(!buttonClicked);
            }}
          >
            Click Me!
          </button>
        </div>,
        modalRoot as Element,
      )}
    </>
  )
}
