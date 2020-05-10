import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import PrivacyForm from './PrivacyForm'

describe('<PrivacyForm />', () => {
  const initProps = {
    onSubmit: jest.fn(),
  }

  describe('@render', () => {
    it('should render the checkbox options correctly', () => {
      const { getByLabelText } = render(<PrivacyForm {...initProps} />)

      expect(
        getByLabelText(`Receive emails about Tray.io product by email`)
      ).toBeTruthy()
      expect(
        getByLabelText(
          `Receive communication by email for other products created by the Tray.io team`
        )
      ).toBeTruthy()
    })
  })

  describe('@event', () => {
    it('should call onSubmit function when for is submitted', () => {
      const { getByLabelText, getByText } = render(
        <PrivacyForm {...initProps} />
      )

      fireEvent.click(
        getByLabelText(`Receive emails about Tray.io product by email`)
      )
      fireEvent.click(getByText('Sign Up'))

      expect(initProps.onSubmit).toHaveBeenCalledTimes(1)
      expect(initProps.onSubmit).toHaveBeenCalledWith({
        receiveProductUpdates: true,
        receiveOtherUpdates: false,
      })
    })
  })
})
