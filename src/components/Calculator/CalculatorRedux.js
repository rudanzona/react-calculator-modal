import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Calculator from './index'
import {
  calculatorActions,
  selectCalculator,
} from '../../redux/slices/calculator'

function CalculatorRedux() {
  const {
    result,
    op,
  } = useSelector(selectCalculator)
  const dispatch = useDispatch()

  const onClickHandler = (e, data) => {
    const {
      type,
    } = data
    const action = calculatorActions[type]

    dispatch(action && action(data))
  }

  return (
    <Calculator
      result={result}
      op={op}
      onClick={onClickHandler}
    />
  )
}

export default CalculatorRedux
