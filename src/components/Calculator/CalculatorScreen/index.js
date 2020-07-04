import React from 'react'
import PropTypes from 'prop-types'
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
  result: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])
}

CalculatorScreen.defaultProps = {
  result: null
}

export default CalculatorScreen