import React from 'react'

import Header from './Header'

import Profile from './Profile'

import { Layout } from 'antd'

const WrapperLayout = ({ children }) => (
  <>
    <Profile />
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  </>
)

export default WrapperLayout
