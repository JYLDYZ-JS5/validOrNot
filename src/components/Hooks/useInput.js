// import { useState } from 'react'
import { useReducer } from 'react'

const useInput = (validateState) => {
  const initialState = {
    enteredValue: '',
    isTouched: false,
  }
  const reduceState = (state, action) => {
    if (action.type === 'CHANGE') {
      const value = action.value
      return {
        enteredValue: value,
        isTouched: state.isTouched,
      }
    }
    if (action.type === 'ONBLUR') {
      return {
        isTouched: true,
        enteredValue: state.enteredValue,
      }
    }
    return initialState
  }
  const [state, dispatchState] = useReducer(reduceState, initialState)
  const EnteredValueHandler = (event) => dispatchState({ type: 'CHANGE', value: event.target.value })
  const onBlurHandler = () => dispatchState({ type: 'ONBLUR' })

  const valueIsValid = validateState(state.enteredValue) // true || false
  const hasError = !valueIsValid && state.isTouched
  const value = state.enteredValue

  return {
    value: value,
    isValid: valueIsValid,
    hasError,
    EnteredValueHandler,
    onBlurHandler,
  }
}
export default useInput
