import React, { useState } from 'react'

import Calculator from './index'
import { calculatorHandlers } from '../../redux/slices/calculator'

function CalculatorHook() {
  const [op, setOp] = useState(null)
  const [result, setResult] = useState('')
  const [prevResult, setPrevResult] = useState('')
  const [prevType, setPrevType] = useState(null)

  const onClickHandler = (e, data) => {
    const {
      type,
    } = data
    let state = {
      op,
      result,
      prevResult,
      prevType,
    }
    let action = {
      payload: data
    }

    calculatorHandlers[type] && calculatorHandlers[type](state, action)

    if (state.op !== op) setOp(state.op)
    if (state.result !== result) setResult(state.result)
    if (state.prevResult !== prevResult) setPrevResult(state.prevResult)
    if (state.prevType !== prevType) setPrevType(state.prevType)
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
