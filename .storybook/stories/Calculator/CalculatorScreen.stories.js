import React from 'react'
import CalculatorScreen from '../../../src/components/Calculator/CalculatorScreen'

export default {
  title: 'CalculatorScreen',
  component: CalculatorScreen,
}

const Container = (props) => (
  <div style={{
    width: 120,
    backgroundColor: '#84baff',
  }}>
    {props.children}
  </div>
)

export const Empty = () => (
  <Container>
    <CalculatorScreen />
  </Container>
)


export const ShortNumber = () => (
  <Container>
    <CalculatorScreen result={100} />
  </Container>
)

export const MaxSafeInteger = () => (
  <Container>
    <CalculatorScreen result={Number.MAX_SAFE_INTEGER} />
  </Container>
)

export const LongDigitNumber = () => (
  <Container>
    <CalculatorScreen result={10/6} />
  </Container>
)