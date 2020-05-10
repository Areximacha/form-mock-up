import styled from '@emotion/styled'

import circleCheck from '../../assets/images/check-circle-solid.svg'

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;

  p {
    color: #4caf50;
  }
`

const IconChecked = styled.i`
  display: block;
  height: 40px;
  width: 40px;
  background-image: url(${circleCheck});
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 20px;
`
export { SuccessContainer, IconChecked }
