import React from 'react'

import Layout from '../../components/Layout'

import SignUpContainer from '../../containers/SignUp/SignUp'

import { MainHeading } from '../../emotion/ui.style'

const SignUp = () => (
  <Layout>
    <MainHeading>Sign Up</MainHeading>
    <SignUpContainer />
  </Layout>
)

export default SignUp
