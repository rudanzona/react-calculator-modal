import React from 'react'
import ReactModal from 'react-modal'
import Calculator from '../index'
import './CalculatorModal.scss'

const CalculatorModal = (props) => {
  const {
    modalIsOpen,
    closeModal,
  } = props

  return (
    <ReactModal
      isOpen={modalIsOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={closeModal}
      contentLabel="Calculator Modal"
      className="CalculatorContent"
      overlayClassName="CalculatorOverlay"
    >
      <Calculator />
    </ReactModal>
  )
}

export default CalculatorModal
