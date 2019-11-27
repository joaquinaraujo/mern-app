import React, { useState } from 'react'

import { Menu, Icon } from 'antd'

const Navigation = () => {
  const [ current, setCurrent ] = useState('bug')

  const handleOnClick = e => {
    setCurrent(e.key)
  }

  return (
    <Menu theme='dark' style={{ lineHeight: '64px' }} onClick={handleOnClick} selectedKeys={[current]} mode='horizontal'>
      <Menu.Item key='bug'>
        <Icon type='bug' /> Inicio
      </Menu.Item>
      <Menu.Item key='aliwangwang'>
        <Icon type='aliwangwang' /> Aplicación
      </Menu.Item>
      <Menu.Item key='setting'>
        <Icon type='setting' /> Configuración
      </Menu.Item>
    </Menu>
  )
}

export default Navigation
