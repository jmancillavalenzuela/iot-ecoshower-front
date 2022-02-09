import React, { useEffect } from 'react'
import { Form, Input, Button, Select, message, Tooltip, Typography, Row, Col } from 'antd'
import { IdcardOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons'
import { ValidateErrorEntity } from 'rc-field-form/lib/interface'
import { useHistory } from 'react-router-dom'
import { REGISTER_DEVICE_DATA } from '../../../types/auth.types'
import { registerMyDevice } from '../../../services/privateServices'

const { Option } = Select

const RegisterDeviceCard = (): JSX.Element => {
  const [confirmLoading, setConfirmLoading] = React.useState(false)

  const history = useHistory()

  const onFinish = async (data: REGISTER_DEVICE_DATA) => {
    setConfirmLoading(true)
    try {
      const registerDevice = await registerMyDevice(data)
      console.log(registerDevice)
      if (registerDevice.status === 201) {
        message.success('Registro Exitoso')
        history.push(`/MyDevices/me/${data.uniqueId}`)
      } else {
        message.error('Hubo un problema en registar su dispositivo')
      }
      setConfirmLoading(false)
      //setEditUserInfo(false)
    } catch (error) {
      console.log(error)
      message.error('Hubo un problema en actualizar su información')
    }
  }

  const onFinishFailed = (errorInfo: ValidateErrorEntity) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Row>
      <Col span={24}>
        <Form
          name="registerDevice"
          initialValues={{ name: 'HSC001' }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          scrollToFirstError
        >
          <Form.Item
            label={
              <Tooltip placement={'left'} title="ID">
                <UserOutlined />
              </Tooltip>
            }
            name="uniqueId"
            rules={[
              { required: true, message: 'Debe ingresar un ID de Dispositivo.' },
              {
                min: 12,
                pattern: /([0-9A-Fa-f]{2}[.-:]){5}([0-9A-Fa-f]{2})/,
                message: 'El formato de la ID no es correcto'
              },
              { max: 17, message: 'El largo del ID no es correcto.' }
            ]}
          >
            <Input placeholder={'XX:XX:XX:XX:XX:XX'} />
          </Form.Item>
          <Form.Item
            label={
              <Tooltip placement={'left'} title="Nombre">
                <IdcardOutlined />
              </Tooltip>
            }
            name="displayName"
            rules={[
              { required: true, message: 'Debe ingresar un nombre.' },
              { min: 5, message: 'El largo del Nombre no puede ser menor a 5 carácteres.' }
            ]}
          >
            <Input placeholder={'ej: Baño Primer Piso'} />
          </Form.Item>
          <Form.Item
            label={
              <Tooltip placement={'left'} title="Tipo">
                <SettingOutlined />
              </Tooltip>
            }
            name="name"
            rules={[{ required: true, message: 'Debe ingresar un Tipo de Dispositivo.' }]}
          >
            <Select>
              <Option value="HSC001">Hydro Saver</Option>
            </Select>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default RegisterDeviceCard