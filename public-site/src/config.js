export const api = {
  host: process.env.API_HOST || 'http://localhost:3000'
}

export const auth0 = {
  domain: process.env.AUTH0_DOMAIN || '',
  clientId: process.env.AUTH0_CLIENT_ID || '',
  returnTo: process.env.AUTH_RETURN_TO || 'http://localhost:8000'
}
