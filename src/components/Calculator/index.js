import React from 'react'
import PropTypes from 'prop-types'

import configs from './configs'
import CalculatorBtn from './CalculatorBtn'
import CalculatorScreen from './CalculatorScreen'
import './Calculator.scss'

function Calculator(props) {
  const btnConfigs = configs.btns
  const {
    op,
    result,
    onClick,
  } = props

  return (
    <div className="cal">
      <CalculatorScreen
        result={result}
      />
      <ul className="cal-btns">
        {btnConfigs.map((btnConfig) => (
          <li className={`cal-btns__item cal-btn__${btnConfig.type}-${btnConfig.op}`} key={`cal-btns__item-${btnConfig.type}-${btnConfig.op}`}>
            <CalculatorBtn {...btnConfig} currentOp={op} onClick={onClick}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

Calculator.propTypes = {
  op: PropTypes.string,
  result: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onClick: PropTypes.func,
}

Calculator.defaultProps = {
  op: null,
  result: '',
  onClick: () => {}
}

export default Calculator