import React, { useState } from 'react'
// import PropTypes from 'prop-types'
// import ClassNames from 'classnames'

import configs from './configs'
import CalculatorBtn from './CalculatorBtn'
import CalculatorScreen from './CalculatorScreen'
import './Calculator.scss'

const operations = {
  'add': (prev, next) => Number.parseFloat(prev) + Number.parseFloat(next),
  'subtract': (prev, next) => Number.parseFloat(prev) - Number.parseFloat(next),
  'multiply': (prev, next) => Number.parseFloat(prev) * Number.parseFloat(next),
  'divide': (prev, next) => Number.parseFloat(prev) / Number.parseFloat(next),
  'percentage': (curr) => Number.parseFloat(curr) / 100,
}

function Calculator(props) {
  const btnConfigs = configs.btns

  const [op, setOp] = useState(null)
  const [result, setResult] = useState('')
  const [prevResult, setPrevResult] = useState('')
  const [prevType, setPrevType] = useState(null)

  const onClickHandler = (e, data) => {
    const {
      type,
      op: btnOp,
    } = data
    
    switch(type) {
      case 'num': {
        let prev = result
        let next = btnOp

        if (prevType === 'op') {
          prev = ''
        }

        if (btnOp === 'dot') {
          if (result.indexOf('.') === -1) next = '.'
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
          default:
            setOp(btnOp)
            setPrevResult(result)
        }
        break
    }
    setPrevType(type)
  }

  return (
    <div className="cal">
      <CalculatorScreen
        result={result}
      />
      <ul className="cal-btns">
        {btnConfigs.map((btnConfig) => (
          <li className={`cal-btns__item cal-btn__${btnConfig.type}-${btnConfig.op}`} key={`cal-btns__item-${btnConfig.type}-${btnConfig.op}`}>
            <CalculatorBtn {...btnConfig} onClick={onClickHandler}/>
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