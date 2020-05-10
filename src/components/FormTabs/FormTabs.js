import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { TabContainer, TabModule } from './FormTabs.style'

const FormTabs = ({ activeTab }) => {
  const activeStyle = css`
    .${activeTab} {
      font-weight: 600;
      background-color: #2196f3;
      color: #fff;
    }
  `

  return (
    <TabContainer css={activeStyle}>
      <TabModule className='user'>User</TabModule>
      <TabModule className='privacy'>Privacy</TabModule>
      <TabModule className='done'>Done</TabModule>
    </TabContainer>
  )
}

FormTabs.propTypes = {
  activeTab: PropTypes.string,
}

FormTabs.defaultProps = {
  activeTab: '',
}

export default FormTabs
