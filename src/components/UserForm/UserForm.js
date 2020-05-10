import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Input, Button, RequiredField, Error } from '../../emotion/ui.style'
import FormContainer from './UserForm.style'

const UserForm = ({ onSubmit }) => {
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const passwordComplexity = {
    hasLowerCase: password.match(/[a-z]/),
    hasUpperCase: password.match(/[A-Z]/),
    hasNumber: password.match(/[0-9]/),
    isLongEnough: password.length >= 9,
  }

  const emailIsValid = () => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(null)

    validateForm()
  }

  const validateForm = () => {
    const {
      hasLowerCase,
      hasUpperCase,
      hasNumber,
      isLongEnough,
    } = passwordComplexity
    if (!emailIsValid()) {
      return setError('Please enter a valid email address')
    }

    if (!hasLowerCase || !hasUpperCase || !hasNumber || !isLongEnough) {
      return setError(
        'Your password must be at least 9 characters in length, contain a number and an uppercase and lowercase character.'
      )
    }

    return onSubmit({
      name,
      role,
      email,
      password,
    })
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <RequiredField>*</RequiredField>
      <Input
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type='text'
        placeholder='Role'
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <RequiredField>*</RequiredField>
      <Input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <RequiredField>*</RequiredField>
      <Input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type='submit'>Next</Button>
      {error && <Error>{error}</Error>}
    </FormContainer>
  )
}

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default UserForm
