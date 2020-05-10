import React from 'react'

import { SuccessContainer, IconChecked } from './Success.style'

const Success = () => {
  return (
    <SuccessContainer>
      <IconChecked />
      <p>
        Please verify your email address, you should have received an email from
        us already!
      </p>
    </SuccessContainer>
  )
}

export default Success
