import React from 'react'

import { Spin } from 'antd'

function Loaded () {
  return (
    <Spin
      size='large'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }}
    />
  )
}

export default Loaded
