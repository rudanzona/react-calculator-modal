import React from 'react'
import ReactModal from 'react-modal'

import useModal from './hooks/useModal'
import CalculatorModal from './components/Calculator/CalculatorModal'
import logo from './logo.svg'
import './App.scss'

ReactModal.setAppElement('#root')
function App() {
  const {
    modalIsOpen,
    openModal,
    closeModal,
  } = useModal()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <button onClick={openModal}>Trigger Modal</button>
      </header>
        <CalculatorModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  )
}

export default App
