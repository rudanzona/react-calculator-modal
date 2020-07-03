import React from 'react';
import { action } from '@storybook/addon-actions';
import CalculatorBtn from '../../../src/components/Calculator/CalculatorBtn';

export default {
  title: 'CalculatorBtn',
  component: CalculatorBtn,
};

const style = {
  fontSize: '2rem'
}

const Container = (props) => (
  <div style={{
    width: 100,
  }}>
    {props.children}
  </div>
)

export const Operator = () => (
  <Container>
    <CalculatorBtn
      onClick={action('clicked')}
      type="op"
      op="multiply"
      style={style}
    >+</CalculatorBtn>
  </Container>
);

export const OperatorClear = () => (
  <Container>
    <CalculatorBtn
      onClick={action('clicked')}
      type="op"
      op="clear"
    >AC</CalculatorBtn>
  </Container>
)


export const Number = () => (
  <Container>
    <CalculatorBtn
      onClick={action('clicked')}
      type="num"
    >1</CalculatorBtn>
  </Container>
)

export const NumberZero = () => (
  <Container>
    <CalculatorBtn
      onClick={action('clicked')}
      type="num"
    >0</CalculatorBtn>
  </Container>
)
