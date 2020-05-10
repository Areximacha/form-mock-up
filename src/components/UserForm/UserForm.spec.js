import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import UserForm from './UserForm'

describe('<UserForm />', () => {
  const initProps = {
    onSubmit: jest.fn(),
  }

  describe('@render', () => {
    it('should render the form correctly', () => {
      const { getByPlaceholderText } = render(<UserForm {...initProps} />)

      expect(getByPlaceholderText('Name')).toBeTruthy()
      expect(getByPlaceholderText('Role')).toBeTruthy()
      expect(getByPlaceholderText('Email')).toBeTruthy()
      expect(getByPlaceholderText('Password')).toBeTruthy()
    })
  })

  describe('@event', () => {
    it('should render an error message if the email address is invalid', () => {
      const { getByPlaceholderText, getByText } = render(
        <UserForm {...initProps} />
      )

      fireEvent.change(getByPlaceholderText('Name'), {
        target: { value: 'Bruce Wayne' },
      })
      fireEvent.change(getByPlaceholderText('Role'), {
        target: { value: 'Batman' },
      })
      fireEvent.change(getByPlaceholderText('Email'), {
        target: { value: 'invalid@email' },
      })
      fireEvent.change(getByPlaceholderText('Password'), {
        target: { value: 'invalidpassword' },
      })
      fireEvent.click(getByText('Next'))

      expect(getByText('Please enter a valid email address')).toBeTruthy()
    })

    it('should render an error message if the password is invalid', () => {
      const { getByPlaceholderText, getByText } = render(
        <UserForm {...initProps} />
      )

      fireEvent.change(getByPlaceholderText('Name'), {
        target: { value: 'Bruce Wayne' },
      })
      fireEvent.change(getByPlaceholderText('Role'), {
        target: { value: 'Batman' },
      })
      fireEvent.change(getByPlaceholderText('Email'), {
        target: { value: 'batman@jla.com' },
      })
      fireEvent.change(getByPlaceholderText('Password'), {
        target: { value: 'invalidpassword' },
      })
      fireEvent.click(getByText('Next'))

      expect(
        getByText(
          'Your password must be at least 9 characters in length, contain a number and an uppercase and lowercase character.'
        )
      ).toBeTruthy()
    })

    it('should call onSubmit function when the form is successfully submitted', () => {
      const { getByPlaceholderText, getByText } = render(
        <UserForm {...initProps} />
      )

      fireEvent.change(getByPlaceholderText('Name'), {
        target: { value: 'Bruce Wayne' },
      })
      fireEvent.change(getByPlaceholderText('Role'), {
        target: { value: 'Batman' },
      })
      fireEvent.change(getByPlaceholderText('Email'), {
        target: { value: 'batman@jla.com' },
      })
      fireEvent.change(getByPlaceholderText('Password'), {
        target: { value: 'Password123' },
      })
      fireEvent.click(getByText('Next'))

      expect(initProps.onSubmit).toBeCalledTimes(1)
      expect(initProps.onSubmit).toBeCalledWith({
        name: 'Bruce Wayne',
        role: 'Batman',
        email: 'batman@jla.com',
        password: 'Password123',
      })
    })
  })
})
