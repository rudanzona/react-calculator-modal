import React from 'react'
import ReactModal from 'react-modal'

import useWindowSize, { WindowSizeContext } from './hooks/useWindowSize'
import useModal from './hooks/useModal'
import CalculatorModal from './components/Calculator/CalculatorModal'
import logo from './logo.svg'
import './App.scss'

ReactModal.setAppElement('#root')
function App() {
  const { size } = useWindowSize()
  const {
    modalIsOpen,
    openModal,
    closeModal,
  } = useModal()

  return (
    <WindowSizeContext.Provider value={size}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={openModal}>Trigger Modal</button>
        </header>
        <CalculatorModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      </div>
    </WindowSizeContext.Provider>
  )
}

export default App
