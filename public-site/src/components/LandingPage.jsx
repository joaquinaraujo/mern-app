import React from 'react'

import Profile from './Profile'

import { Typography } from 'antd'

const LandingPage = () => (
  <div className='welcome'>
    <Profile />
    <Typography.Title>Bienvenido a ANTD + auth0</Typography.Title>
  </div>
)

export default LandingPage
