import React from 'react'
import { action } from '@storybook/addon-actions'
import Calculator from '../../../src/components/Calculator'

export default {
  title: 'Calculator',
  component: Calculator,
}

const Container = (props) => (
  <div>
    {props.children}
  </div>
)

export const CalculatorDemo = () => (
  <Container>
    <Calculator />
  </Container>
)
