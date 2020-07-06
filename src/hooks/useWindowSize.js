import { useEffect, useState, createContext } from 'react'
import debounce from 'debounce'

const initSize = {
  width: 0,
  height: 0
}
export const WindowSizeContext = createContext(initSize)

function useWindowSize() {
  const [size, setSize] = useState(initSize)

  useEffect(() => {
    function updateSize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', debounce(updateSize), 500)
    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return {
    size,
    WindowSizeContext,
  }
}

export default useWindowSize
