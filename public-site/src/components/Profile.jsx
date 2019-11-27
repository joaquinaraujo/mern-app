import React from 'react'

import { Button } from 'antd'

import { useAuth0 } from '../react-auth0-spa'

import { auth0 as config } from '../config'

const { returnTo } = config

const Profile = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

  return (
    <div className='profile'>
      {
        isAuthenticated ? (
          <Button type='primary' onClick={() => logout({ returnTo })}>Salir</Button>
        ) : (
          <Button type='primary' onClick={() => loginWithRedirect({})}>Ingresar</Button>
        )
      }
      <style jsx>{`
        .profile {
          position: fixed;
          right: 0;
          top: 0;
          margin: 0 20px;
          height: 64px;
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  )
}

export default Profile
