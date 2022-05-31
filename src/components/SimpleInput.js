import { useRef, useState } from 'react'

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [isValid, setisValid] = useState(false) //флажок
  const inputNameRef = useRef()
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const nameInputChangeHandler = (event) => {
   
    setEnteredName(event.target.value)
    if(!enteredName.includes('@')){
      setisValid(true) 
      setEnteredNameTouched(true)
    }
  }
  const nameInputBlur = () => {
    setEnteredNameTouched(true)
    if (enteredName.trim() === '') {
      setisValid(true)
      return
    }
    if(!enteredName.includes('@')){
      setisValid(true) 
      return
    }
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    setEnteredNameTouched(true)
    if (enteredName.trim() === '') {
      setisValid(true)
      return
    }

    setisValid(false)
    const enteredRefName = inputNameRef.current.value
    console.log(enteredName)
    //fetch request to server
    console.log(enteredRefName)
  }
  const nameInputIsValid = isValid && enteredNameTouched
  const inputClasses = nameInputIsValid
    ? 'form-control invalid'
    : 'form-control'
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          ref={inputNameRef}
          onBlur={nameInputBlur}
          value={enteredName}
        />
        {nameInputIsValid && <p>Name is empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={nameInputIsValid}>Submit</button>
      </div>
    </form>
  )
}
// можно проверить форм тремя способами
// когда юзер нажал на сабмит
// когда убрал фокус инпута и перешел на другую
// когда он печатает

export default SimpleInput
