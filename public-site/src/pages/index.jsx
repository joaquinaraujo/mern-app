import React from 'react'

import SEO from '../components/SEO'

import { Button } from 'antd'

const Index = () => {
  return (
    <>
      <SEO title='Inicio' />
      <header className='header'>
        <a href='https://joaquinaraujojs.com'>
          <figure className='logo'>
            <img src='https://firebasestorage.googleapis.com/v0/b/joaqnjs.appspot.com/o/joaquin-araujo-js.png?alt=media&token=91665174-cdd2-4285-abb4-0571326ab466' alt='Joaquin Araujo' />
          </figure>
        </a>
        <div className='to-actions'>
          <Button type='primary'>Ingresar</Button>
        </div>
      </header>
      <style>{`
        .header {
          display: flex;
          justify-content: space-around;
          height: 100px;
          align-items: center;
        }

        .logo,
        .to-actions {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
        }

        .logo img {
          width: 80%;
          max-width: 300px;
        }
      `}</style>
    </>
  )
}

export default Index
