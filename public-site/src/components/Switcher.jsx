import React from 'react'

import LandingPage from './LandingPage'

import Loaded from './Loaded'

import { useAuth0 } from '../react-auth0-spa'

const Switcher = ({ element }) => {
  const { isAuthenticated, loading } = useAuth0()

  if (!loading) return <Loaded />

  if (isAuthenticated) return element

  return <LandingPage />
}

export default Switcher
