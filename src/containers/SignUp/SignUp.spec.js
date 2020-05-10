import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import SignUp from './SignUp'

describe('<SignUp />', () => {
  describe('@event', () => {
    it('should complete a sign up journey', () => {
      const { getByPlaceholderText, getByLabelText, getByText } = render(
        <SignUp />
      )

      fireEvent.change(getByPlaceholderText('Name'), {
        target: { value: 'Peter Parker' },
      })
      fireEvent.change(getByPlaceholderText('Role'), {
        target: { value: 'Spider-Man' },
      })
      fireEvent.change(getByPlaceholderText('Email'), {
        target: { value: 'spiderman@avengers.com' },
      })
      fireEvent.change(getByPlaceholderText('Password'), {
        target: { value: 'Password123' },
      })
      fireEvent.click(getByText('Next'))

      expect(
        getByLabelText(`Receive emails about Tray.io product by email`)
      ).toBeTruthy()

      fireEvent.click(
        getByLabelText(`Receive emails about Tray.io product by email`)
      )
      fireEvent.click(getByText('Sign Up'))

      expect(
        getByText(
          `Please verify your email address, you should have received an email from us already!`
        )
      ).toBeTruthy()
    })
  })
})
