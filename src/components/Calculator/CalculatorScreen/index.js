import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import './CalculatorScreen.scss'

function CalculatorScreen(props) {
  const {
    result,
  } = props

  return (
    <div className="cal-screen">
      <div className="cal-screen__result">{result}</div>
    </div>
  );
}

CalculatorScreen.propTypes = {
  result: PropTypes.number,
}

CalculatorScreen.defaultProps = {
  result: null
}

export default CalculatorScreen