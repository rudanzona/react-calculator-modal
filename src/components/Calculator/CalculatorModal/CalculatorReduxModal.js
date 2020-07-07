import React from 'react'

import CalculatorModal from './index'
import CalculatorRedux from '../CalculatorRedux'

const CalculatorReduxModal = (props) => {
  const {
    modalIsOpen,
    closeModal,
  } = props

  return (
    <CalculatorModal
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
    >
      <CalculatorRedux />
    </CalculatorModal>
  )
  
}

export default CalculatorReduxModal
