import styled from '@emotion/styled'

const MainHeading = styled.h1`
  margin: 20px 0;
`

const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 20px;
  border: 1px solid #f2f2f2;
  font-size: 14px;
`

const Button = styled.button`
  background-color: #009688;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #26a69a;
  }
`

const RequiredField = styled.i`
  line-height: 0;
  color: #f44336;
  font-size: 20px;
`

const CheckboxLabel = styled.label`
  padding-bottom: 10px;
  display: flex;
`

const Checkbox = styled.input`
  margin-right: 10px;
`

const Error = styled.span`
  color: #f44336;
  font-size: 14px;
  margin: 20px 0;
`

export {
  MainHeading,
  Input,
  Button,
  RequiredField,
  CheckboxLabel,
  Checkbox,
  Error,
}
