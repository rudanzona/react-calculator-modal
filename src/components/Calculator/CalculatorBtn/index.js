import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import './CalculatorBtn.scss'

function CalculatorBtn(props) {
  const {
    children,
    type,
    op,
    currentOp,
    style,
    onClick,
  } = props
  const content = children || op
  const btnClassName = ClassNames(
    'cal-btn',
    {
      [`cal-btn__${type}`]: !!type,
      'cal-btn__op-selected': currentOp === op,
    },
  )

  const onClickHandler = useCallback((e) => {
    e.preventDefault()
    onClick(e,
      {
        type,
        op,
      }
    )
  }, [type, op, onClick])

  return (content !== null) && (
    <button className={btnClassName} onMouseUp={onClickHandler} onTouchEnd={onClickHandler} style={style}>
      <div className="cal-btn__cnt">
        {content}
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
  currentOp: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
}

CalculatorBtn.defaultProps = {
  children: null,
  onClick: () => {},
}

export default CalculatorBtn