import './index.scss'
import { Card, Form, Input, Button, message } from 'antd'
import logo from '@/assets/logo.jpg'
import { useDispatch } from 'react-redux'
import { fetchLogin } from '../../store/modules/user'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onFinish = async (values) => {
    await dispatch(fetchLogin(values))
    navigate('/')
    message.success('Login Successful')
  }
  return (
    <div>
      <div className="login">
        <Card className="login-container">
          <img className="login-logo" src={logo} alt="" />
          <Form onFinish={onFinish} validateTrigger="onBlur">
            <Form.Item
              name="mobile"
              rules={[
                {
                  required: true,
                  message: 'Please input your phone number'
                },
                {
                  pattern: /^1[3-9]\d{9}/,
                  message: 'Please input correct phone number format'
                }
              ]}>
              <Input size="large" placeholder="Input Phone Number"/>
            </Form.Item>
            <Form.Item
              name="code"
              rules={[
                {
                  required: true,
                  message: 'Please input your verification code'
                }
              ]}>
              <Input size="large" placeholder="Input Verification Code"/>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block>
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  )
}

export default Login