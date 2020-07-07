import React from 'react'
import ReactModal from 'react-modal'
import CalculatorHookModal from '../../../src/components/Calculator/CalculatorModal/CalculatorHookModal'
import useModal from '../../../src/hooks/useModal'
import useWindowSize, { WindowSizeContext } from '../../../src/hooks/useWindowSize'

export default {
  title: 'CalculatorHookModal',
  component: CalculatorHookModal,
}

const Container = (props) => {
  const { size } = useWindowSize()

  return (
    <WindowSizeContext.Provider value={size}>
      {props.children}
    </WindowSizeContext.Provider>
  )
}

ReactModal.setAppElement('#root')
export const CalculatorModalDemo = () => {
  const {
    modalIsOpen,
    openModal,
    closeModal,
  } = useModal()

  return (
    <Container>
      <button onClick={openModal}>Trigger Modal</button>
      <CalculatorHookModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </Container>
  )
}
