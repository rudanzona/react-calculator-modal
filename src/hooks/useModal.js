import { useState, useCallback } from 'react'

function useModal(initState = false) {
  const [modalIsOpen, setIsOpen] = useState(initState)

  const openModal = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  return {
    modalIsOpen,
    openModal,
    closeModal,
    setIsOpen,
  }
}

export default useModal
