import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import './CalculatorBtn.scss'

function CalculatorBtn(props) {
  const {
    children,
    type,
    op,
    style,
    onClick,
  } = props
  const btnClassName = ClassNames(
    'cal-btn',
    {
      [`cal-btn__${type}`]: !!type
    },
  )

  const onClickHandler = useCallback((e) => {
    onClick(e,
      {
        type,
        op: op || children,
      }
    )
  }, [type, op, children, onClick])

  return children && (
    <button className={btnClassName} onClick={onClickHandler} style={style}>
      <div className="cal-btn__cnt">
        {children}
      </div>
    </button>
  );
}

CalculatorBtn.propTypes = {
  children: PropTypes.elementType,
  type: PropTypes.oneOf(['op', 'num']),
  op: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  style: PropTypes.object,
  onClick: PropTypes.func,
}

CalculatorBtn.defaultProps = {
  children: null,
}

export default CalculatorBtn