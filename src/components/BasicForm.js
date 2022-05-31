// проверка с помощью onBlur

// import { useState } from 'react'
import useInput from './Hooks/useInput'

const BasicForm = () => {
  const {
    value: firstName,
    isValid: firsNameisValid,
    hasError: valid,
    EnteredValueHandler: firstNameChangeHandler,
    onBlurHandler: fisrtNameBlurHandler,
  } = useInput((value) => value.trim() !== '')

 

  const formSubmitHandler = (e) => {
    e.preventDefault()
    if (!firsNameisValid) {
      return
    }
    console.log('Hello');
  }

  const {
    value: lastName,
    isValid: lastNameisValid,
    hasError: lastValid,
    EnteredValueHandler: lastNameChangeHandler,
    onBlurHandler: lastNameBlurHandler ,
  } = useInput((value) => value.trim() !== '')

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailValid,
    EnteredValueHandler: emailAddChangeHandler,
    onBlurHandler:emailAddBlurHandler ,
  } = useInput((value) => value.trim() !== '' && value.includes('@'))

  const classes = valid ? 'form-control invalid' : 'form-control'
  const emailClass = emailValid ? 'form-control invalid' : 'form-control'
  const lastClass = lastValid ? 'form-control invalid' : 'form-control'

  const errorText = valid ? 'error-text' : ''
  const errorEmailClass = emailValid ? 'error-text' : ''
  const errorLastClass = lastValid ? 'error-text' : ''

  let formIsValid = false
  if (firsNameisValid && lastNameisValid && emailIsValid  ) {
    formIsValid = true
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={classes}>
          <label htmlFor="name" className={errorText}>
            First Name
          </label>
          <input
            type="text"
            id="name"
            htmlFor="first name"
            onChange={firstNameChangeHandler}
            value={firstName}
            onBlur={fisrtNameBlurHandler}
          />
        </div>
        <div className={lastClass}>
          <label htmlFor="name" className={errorLastClass}>
            Last Name
          </label>
          <input
            type="text"
            id="name"
            htmlFor="last name"
            onChange={lastNameChangeHandler}
            value={lastName}
            onBlur={lastNameBlurHandler}
          />
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="name" className={errorEmailClass}>
          E-Mail Address
        </label>
        <input
          type="text"
          id="name"
          htmlFor="email"
          onChange={emailAddChangeHandler}
          value={email}
          onBlur={emailAddBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default BasicForm
