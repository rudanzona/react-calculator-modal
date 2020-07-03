import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CalculatorBtn from '../../../../components/Calculator/CalculatorBtn'

describe('Component - CalculatorBtn', () => {
  test('Should render noting when no children', () => {
    expect(render(<CalculatorBtn />)).toBeNull
  })

  test('Should render 0 when children is zero', () => {
    const { getByRole, getByText } = render(<CalculatorBtn type="num" op={0} />)
    const btn = getByRole('button')

    expect(btn).toBeInTheDocument()
    expect(getByText('0')).toBeInTheDocument()
  })

  test('Should render number when children is number', () => {
    const mockCallback = jest.fn();
    const { getByRole, getByText } = render(<CalculatorBtn type="num" onClick={mockCallback} op={1} />)
    const btn = getByRole('button')

    expect(btn).toBeInTheDocument()
    expect(getByText('1')).toBeInTheDocument()
    
    fireEvent.click(btn)
    expect(mockCallback.mock.calls.length).toBe(1)

    const { type, op } = mockCallback.mock.calls[0][1]
    expect(type).toBe('num')
    expect(op).toBe(1)
  })

  test('Should render an operator when children is text and type is op', () => {
    const mockCallback = jest.fn();
    const { getByRole, getByText } = render(<CalculatorBtn type="op" op="clear" onClick={mockCallback}>AC</CalculatorBtn>)
    const btn = getByRole('button')

    expect(btn).toBeInTheDocument()
    expect(getByText('AC')).toBeInTheDocument()
    
    fireEvent.click(btn)
    expect(mockCallback.mock.calls.length).toBe(1)

    const { type, op } = mockCallback.mock.calls[0][1]
    expect(type).toBe('op')
    expect(op).toBe('clear')
  })

  test('Should render a selected operator when currentOp matches op', () => {
    const { container } = render(<CalculatorBtn type="op" op="clear" currentOp="clear">AC</CalculatorBtn>)

    expect(container.querySelector('.cal-btn__op-selected')).toBeInTheDocument()
  })
})
