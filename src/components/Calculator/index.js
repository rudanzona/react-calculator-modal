import React, { useCallback } from 'react'
// import PropTypes from 'prop-types'
// import ClassNames from 'classnames'

import configs from './configs'
import CalculatorBtn from './CalculatorBtn'
import CalculatorScreen from './CalculatorScreen'
import './Calculator.scss'

function Calculator(props) {
  const btnConfigs = configs.btns

  return (
    <div className="cal">
      <CalculatorScreen
        result={111234}
      />
      <ul className="cal-btns">
        {btnConfigs.map((btnConfig) => (
          <li className={`cal-btns__item cal-btn__${btnConfig.type}-${btnConfig.op}`} key={`cal-btns__item-${btnConfig.type}-${btnConfig.op}`}>
            <CalculatorBtn {...btnConfig} />
          </li>
        ))}
      </ul>
    </div>
  );
}

Calculator.propTypes = {
  
}

Calculator.defaultProps = {

}

export default Calculator