import React, { useState } from 'react'

import Calculator from './index'

const operations = {
  add: (prev, next) => Number.parseFloat(prev) + Number.parseFloat(next),
  subtract: (prev, next) => Number.parseFloat(prev) - Number.parseFloat(next),
  multiply: (prev, next) => Number.parseFloat(prev) * Number.parseFloat(next),
  divide: (prev, next) => Number.parseFloat(prev) / Number.parseFloat(next),
  percentage: (curr) => Number.parseFloat(curr) / 100,
}

function CalculatorHook() {
  const [op, setOp] = useState(null)
  const [result, setResult] = useState('')
  const [prevResult, setPrevResult] = useState('')
  const [prevType, setPrevType] = useState(null)

  const onClickHandler = (e, data) => {
    const {
      type,
      op: btnOp,
    } = data
    let newType = type
    
    switch(type) {
      case 'num': {
        let prev = result
        let next = btnOp

        if (prevType === 'op') {
          prev = ''
        }

        if(btnOp === 'dot') {
          prev = result
          next = ''
          if (result.indexOf('.') === -1) {
            next = '.'
          }
          if (!result) { 
            prev = '0'
            next = '.'
          }
        }

        if (result === '0') {
          prev = ''
        }

        setResult(`${prev}${next}`)
        break
      }

      case 'op':
        switch(btnOp) {
          case 'percentage': {
            if (!result) break
            const final = operations.percentage(result)
            setOp(null)
            setResult(final.toString())
            break
          }
          case 'equal': {
            if (!op) break
            let final = operations[op] ? operations[op](prevResult, result) : ''
            final = final.toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 10
            })
            setOp(null)
            setResult(final)
            setPrevResult(final)
            break
          }
          case 'clear':
            setOp(null)
            setResult('')
            setPrevResult('')
            break
          case 'sign':
            setOp(null)
            setResult(result.indexOf('-') === 0 ? result.replace('-', '') : `-${result}`)
            newType = 'num'
            break
          default:
            if (!result) {
              setOp(null)
              setPrevResult('')
              setResult('')
            } else {
              setOp(btnOp)
              setPrevResult(result)
            }
        }
        break
    }
    setPrevType(newType)
  }

  return (
    <Calculator
      result={result}
      op={op}
      onClick={onClickHandler}
    />
  )
}

export default CalculatorHook
