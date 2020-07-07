import { createSlice } from '@reduxjs/toolkit';

const operations = {
  add: (prev, next) => Number.parseFloat(prev) + Number.parseFloat(next),
  subtract: (prev, next) => Number.parseFloat(prev) - Number.parseFloat(next),
  multiply: (prev, next) => Number.parseFloat(prev) * Number.parseFloat(next),
  divide: (prev, next) => Number.parseFloat(prev) / Number.parseFloat(next),
}

const opHandlers = {
  default: (state, payload) => {
    const {
      result,
    } = state
    const {
      op,
    } = payload

    if (!result) {
      state.op = null
      state.prevResult = ''
      state.result = ''
    } else {
      state.op = op
      state.prevResult = result
    }

    state.prevType = 'op'
  },
  percentage: state => {
    const {
      result
    } = state

    state.op = null

    if (!result) return

    state.result = (Number.parseFloat(result) / 100).toString()
    state.prevType = 'op'
  },
  equal: state => {
    const {
      op,
      result,
      prevResult,
    } = state

    if (!op || !result) return

    let final = operations[op] ? operations[op](prevResult, result) : ''
    final = final.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 10
    })

    state.op = null
    state.result = final
    state.prevResult = final
    state.prevType = 'op'
  },
  clear: state => {
    state.op = null
    state.result = ''
    state.prevResult = ''
    state.prevType = 'op'
  },
  sign: state => {
    const {
      result,
    } = state

    state.op = null
    state.result = result.indexOf('-') === 0 ? result.replace('-', '') : `-${result}`
    state.prevType = 'num'
  },
}

const numHandlers = {
  default: (state, payload = {}) => {
    const {
      result,
      prevType,
    } = state
    const {
      op,
    } = payload
    let prev = result

    if (prevType === 'op' || result === '0') {
      prev = ''
    }

    state.result = `${prev}${op}`
  },
  dot: state => {
    const {
      result,
    } = state
    let prev = result
    let dot = ''

    if (!result) { 
      prev = '0'
      dot = '.'
    }

    if (result.indexOf('.') === -1) dot = '.'

    state.result =`${prev}${dot}`
  },
}

export const calculatorHandlers = {
  num: (state, action) => {
    const {
      type,
      op,
    } = action.payload
    const handler = numHandlers[op] ? numHandlers[op] : numHandlers.default

    handler(state, action.payload)
    state.prevType = type
  },
  op: (state, action) => {
    const {
      op,
    } = action.payload
    const handler = opHandlers[op] ? opHandlers[op] : opHandlers.default

    handler(state, action.payload)
  },
}

export const calculatorSlice = createSlice({
  name: 'calcuator',
  initialState: {
    op: null,
    result: '',
    prevResult: '',
    prevType: null,
  },
  reducers: {
    ...calculatorHandlers,
  },
})

export const calculatorActions = calculatorSlice.actions

export const selectCalculator = state => state.calculator

export default calculatorSlice.reducer
