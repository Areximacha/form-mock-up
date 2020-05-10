import React, { useState } from 'react'

import FormTabs from '../../components/FormTabs/FormTabs'
import UserForm from '../../components/UserForm/UserForm'
import PrivacyForm from '../../components/PrivacyForm/PrivacyForm'
import Success from '../../components/Success/Success'

import { Error } from '../../emotion/ui.style'

const SignUp = () => {
  const [formState, setFormState] = useState('user')
  const [userData, setUserData] = useState(null)

  const handleUserSubmit = (data) => {
    setUserData(data)
    setFormState('privacy')
  }

  const handlePrivacySubmit = (data) => {
    setFormState('done')

    // This is where we'd dispatch an action to submit the form data
    const submitData = {
      ...userData,
      ...data,
    }

    console.log(submitData)
  }

  const renderContent = () => {
    if (Object.hasOwnProperty.call(contentMap, formState)) {
      return contentMap[formState]
    }
    return <Error>Error</Error>
  }

  const contentMap = {
    user: <UserForm onSubmit={handleUserSubmit} />,
    privacy: <PrivacyForm onSubmit={handlePrivacySubmit} />,
    done: <Success />,
  }

  return (
    <>
      <FormTabs activeTab={formState} />
      {renderContent()}
    </>
  )
}

export default SignUp
