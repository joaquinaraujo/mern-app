import React from 'react'

import Navigation from './Navigation'

import { Layout } from 'antd'

const Header = () => (
  <>
    <Layout.Header>
      <a href='https://joaquinaraujojs.com'>
        <div className='logo'>
          <img src='https://firebasestorage.googleapis.com/v0/b/joaqnjs.appspot.com/o/joaquinaraujo-js.png?alt=media&token=a7ceb6e9-52bf-41be-89fc-8d6a30d7c126' alt='Joaquin Araujo' />
        </div>
      </a>
      <Navigation />
    </Layout.Header>
    <style jsx>{`
      .logo {
        width: 200px;
        float: left;
        margin-right: 20px;
      }

      .logo img {
        width: 100%;
      }
    `}</style>
  </>
)

export default Header
