import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CalculatorBtn from '../../../../components/Calculator/CalculatorBtn'

describe('Component - CalculatorBtn', () => {
  test('Should render noting when no children', () => {
    const { queryByRole } = render(<CalculatorBtn />)

    expect(queryByRole('button')).not.toBeInTheDocument()
  })

  test('Should render 0 when children is zero', () => {
    const { getByRole, getByText } = render(<CalculatorBtn type="num">0</CalculatorBtn>)
    const btn = getByRole('button')

    expect(btn).toBeInTheDocument()
    expect(getByText('0')).toBeInTheDocument()
  })

  test('Should render number when children is number', () => {
    const mockCallback = jest.fn();
    const { getByRole, getByText } = render(<CalculatorBtn type="num" onClick={mockCallback}>1</CalculatorBtn>)
    const btn = getByRole('button')

    expect(btn).toBeInTheDocument()
    expect(getByText('1')).toBeInTheDocument()
    
    fireEvent.click(btn)
    expect(mockCallback.mock.calls.length).toBe(1)

    const { type, op } = mockCallback.mock.calls[0][1]
    expect(type).toBe('num')
    expect(op).toBe('1')
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
})
