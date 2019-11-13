import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { Typography } from 'antd'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Typography.Title>Hello world</Typography.Title>
  </Layout>
)

export default IndexPage
