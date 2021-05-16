import React, { useEffect, useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { Typography, Table, message, Form, Input, Button } from 'antd'

import config from '../config'

const IndexPage = (setFieldsValue) => {
  const [ dataSource, setDataSource ] = useState([])
  const [ loaded, setLoaded ] = useState(false)
  const [form] = Form.useForm();

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name'
    },
    {
      title: 'Apellido',
      dataIndex: 'lastName'
    },
    {
      title: 'Acciones',
      key: 'action',
      render: (text, { id }) => (
        <Button type='link' onClick={() => handleOnDelete(id)}>Eliminar</Button>
      )
    }
  ]

  const handleOnDelete = id => {
    fetch(`${config.api.host}/api/user/${id}`, { method: 'DELETE' })
      .then(res => {
        if (res.status === 200) {
          const success = () => {
          message.success('Usuario eliminado con exito')
          }
          success();
          const data = dataSource.filter(user => user.id !== id)

          setDataSource(data)
        } else {
          const errorM = () => {
          message.error('Ocurrio un error al intentar eliminar el usuario')
          }
          errorM();
        }
      })
      .catch((e) => message.error(e))
  }

    const onFinish = values => {
      console.log('Received values of form: ', values);
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }

      const body = JSON.stringify({
        name: values.name,
        lastName: values.lastName
      })

      fetch(`${config.api.host}/api/user`, { headers, method: 'POST', body })
        .then(data => data.json())
        .then(user => {
          const dataSourceCopy = Array.from(dataSource)
          dataSourceCopy.push(user)
          
          setDataSource(dataSourceCopy)
          setLoaded(true)
          const successadd = () => {
          message.success(`${user.name} agregado con exito`)
          }
          successadd();
          form.resetFields()
        })
        .catch((e) => {
          message.error(e)
          setLoaded(true)
        })
    }

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    const fetchData = async () => {
      fetch(`${config.api.host}/api/users`, { signal })
        .then(data => data.json())
        .then(users => {
          const dataWithKeys = users.map((u) => ({ ...u, key: u.id }))
          setDataSource(dataWithKeys)
          setLoaded(true)
        })
        .catch((e) => {
          message.error(e)
          setLoaded(true)
        })
    }

    fetchData()

    return () => abortController.abort()
  }, [])

  return (
    <Layout>
      <SEO title='Home' />
      <Typography.Title>Agregar un usuario</Typography.Title>
      <Form form={form} labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onFinish={onFinish}>
        <Form.Item label='Nombre'>
          <Form.Item name='name' rules={[
              { required: true, message: 'Nombre requerido' },
              { min: 5, message: 'Como minimo 5 letras' },
              { max: 255, message: 'Como maximo 255 letras' }
            ]
          }><Input /></Form.Item>
        </Form.Item>
        <Form.Item label='Apellido'>
        <Form.Item name='lastName' rules={[
              { required: true, message: 'Apellido requerido' },
              { min: 5, message: 'Como minimo 5 letras' },
              { max: 255, message: 'Como maximo 255 letras' }
            ]
          }><Input /></Form.Item>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
          <Button type='primary' htmlType='submit'>
            Agregar
          </Button>
        </Form.Item>
      </Form>

      <Typography.Title>Lista de usuarios</Typography.Title>

      <Table
        columns={columns}
        dataSource={dataSource}
        loading={!loaded}
        size='small'
      />
    </Layout>
  )
}

export default IndexPage
