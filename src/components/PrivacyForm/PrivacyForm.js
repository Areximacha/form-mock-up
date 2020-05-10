import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Button, CheckboxLabel, Checkbox } from '../../emotion/ui.style'
import FormContainer from './PrivacyForm.style'

const PrivacyForm = ({ onSubmit }) => {
  const [receiveProductUpdates, setReceiveProductUpdates] = useState(false)
  const [receiveOtherUpdates, setReceiveOtherUpdates] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()

    onSubmit({
      receiveProductUpdates,
      receiveOtherUpdates,
    })
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <CheckboxLabel>
        <Checkbox
          type='checkbox'
          checked={receiveProductUpdates}
          onChange={(e) => setReceiveProductUpdates(e.target.checked)}
        />
        Receive emails about Tray.io product by email
      </CheckboxLabel>
      <CheckboxLabel>
        <Checkbox
          type='checkbox'
          checked={receiveOtherUpdates}
          onChange={(e) => setReceiveOtherUpdates(e.target.checked)}
        />
        Receive communication by email for other products created by the Tray.io
        team
      </CheckboxLabel>
      <Button type='submit'>Sign Up</Button>
    </FormContainer>
  )
}

PrivacyForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default PrivacyForm
