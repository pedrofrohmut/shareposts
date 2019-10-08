import { useState } from "react"

const useForm = (initialState, initialErrors, onValidate, onSubmit) => {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState(initialErrors)
  const [isTouched, setTouched] = useState(false)
  const handleChange = e => {
    const { name } = e.target
    const value = e.target.checked ? true : e.target.value
    setValues({ ...values, [name]: value })
    setTouched(true)
  }
  const validateForm = () => {
    setErrors(onValidate(values))
  }
  const handleSubmit = e => {
    e.preventDefault()
    validateForm()
    if (isTouched && Object.values(errors).every(error => error === "")) {
      return onSubmit(values)
    }
    return undefined
  }
  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    validateForm
  }
}

export default useForm
