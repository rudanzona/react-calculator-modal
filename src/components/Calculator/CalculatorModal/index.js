import React, { useContext, useCallback } from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'
import Draggable from 'react-draggable'

import { WindowSizeContext } from '../../../hooks/useWindowSize'
import Calculator from '../index'
import './CalculatorModal.scss'

const CalculatorModal = (props) => {
  const { width } = useContext(WindowSizeContext)
  const isDisableDraggable = width <= 768
  const dragContainerPosition = isDisableDraggable ? { x: 0, y:0 } : null
  const {
    modalIsOpen,
    closeModal,
  } = props

  const handleModalClose = useCallback((e) => {
    if (e.target.className !== 'calculator-draggable-container') return

    closeModal()
  }, [closeModal])

  return (
    <ReactModal
      isOpen={modalIsOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={closeModal}
      contentLabel="Calculator Modal"
      className="calculator-content"
      overlayClassName="calculator-overlay"
    >
      <div className="calculator-draggable-container"
        onClick={handleModalClose}
        >
        <Draggable
          bounds="parent"
          disabled={isDisableDraggable}
          position={dragContainerPosition}
        >
          <div>
            <Calculator />
          </div>
        </Draggable>
      </div>
    </ReactModal>
  )
}

CalculatorModal.propTypes = {
  modalIsOpen: PropTypes.bool,
}

CalculatorModal.defaultProps = {
  modalIsOpen: false,
  closeModal: () => {},
}

export default CalculatorModal
