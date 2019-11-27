/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react'

import Switcher from './src/components/Switcher'

import { Auth0Provider } from './src/react-auth0-spa'

import { auth0 as config } from './src/config'

import { navigate } from '@reach/router'

const WrapperElement = ({ children }) => {
  const onRedirectCallback = appState => {
    navigate(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    )
  }

  return (
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  )
}

export const wrapRootElement = ({ element }) => (
  <WrapperElement>
    <Switcher element={element} />
  </WrapperElement>
)

