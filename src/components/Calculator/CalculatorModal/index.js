import PropTypes from 'prop-types'
import ReactModal from 'react-modal'
import Draggable from 'react-draggable'

import Calculator from '../index'
import './CalculatorModal.scss'

const CalculatorModal = (props) => {
  const {
    modalIsOpen,
    closeModal,
  } = props

  const handleModalClose = (e) => {
    if (e.target.className !== 'calculator-draggable-container') return

    closeModal()
  }

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
        <Draggable bounds="parent">
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
