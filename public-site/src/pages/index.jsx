import React from 'react'

import SEO from '../components/SEO'
import Layout from '../components/Layout'

import { Typography } from 'antd'

import { useAuth0 } from '../react-auth0-spa'

const Index = () => {
  const { user } = useAuth0()

  return (
    <>
      <SEO title='Inicio' />

      <Layout>
        <Typography.Title>Bienvenido {user && user.name}</Typography.Title>
        <p>{JSON.stringify(user)}</p>
      </Layout>
    </>
  )
}

export default Index
