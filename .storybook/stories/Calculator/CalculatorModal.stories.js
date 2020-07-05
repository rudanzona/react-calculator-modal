import React from 'react'
import ReactModal from 'react-modal'
import CalculatorModal from '../../../src/components/Calculator/CalculatorModal'
import useModal from '../../../src/hooks/useModal'

export default {
  title: 'CalculatorModal',
  component: CalculatorModal,
}

const Container = (props) => (
  <div>
    {props.children}
  </div>
)

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
      <CalculatorModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </Container>
  )
}
