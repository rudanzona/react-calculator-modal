import React from 'react'

import CalculatorModal from './index'
import CalculatorHook from '../CalculatorHook'

const CalculatorHookModal = (props) => {
  const {
    modalIsOpen,
    closeModal,
  } = props

  return (
    <CalculatorModal
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
    >
      <CalculatorHook />
    </CalculatorModal>
  )
  
}

export default CalculatorHookModal
