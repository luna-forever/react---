import './index.scss'
import { Card, Form, Input, Button, message } from 'antd'
import logo from '@/assets/logo.png'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchToken } from '@/store/modules/user'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onFinish=async (value)=>{
    console.log(value)
    await dispatch(fetchToken(value))
    navigate('/')
    message.success('登录成功')
  }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form onFinish={onFinish}>
          <Form.Item
            name="mobile"
            rules={[
              {required:true,message:'请输入手机号'},
              {pattern:/^1[3-9]\d{9}$/,message:'请输入正确的手机号'}
            ]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[{required:true,message:'请输入验证码'}]}
          >
            <Input size="large" placeholder="请输入验证码" maxLength={6}/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login