import { Layout, Menu, Popconfirm } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import './index.scss'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserInfo, clearUserInfo } from '@/store/modules/user'

const { Header, Sider } = Layout

const items = [
  {
    label: 'Home',
    key: '/',
    icon: <HomeOutlined />
  },
  {
    label: 'Article Manage',
    key: '/article',
    icon: <DiffOutlined />
  },
  {
    label: 'Create Article',
    key: '/publish',
    icon: <EditOutlined />
  }
]

const GeekLayout = () => {
  const navigate = useNavigate()
  const onMenuClick = (route) => {
    const path = route.key
    navigate(path)
  }

  const location = useLocation()
  const selectedKey = location.pathname

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUserInfo())
  }, [dispatch])

  const onConfirm = () => {
    dispatch(clearUserInfo())
    navigate('/login')
  }

  const name = useSelector(state => state.user.userInfo.name)
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{name}</span>
          <span className="user-logout">
            <Popconfirm title="Confirm to logout?" okText="Yes" cancelText="No" onConfirm={onConfirm}>
              <LogoutOutlined />Logout
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            selectedKeys={selectedKey}
            onClick={onMenuClick}
            items={items}
            style={{ height: '100%', borderRight: 0 }}></Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  )
}

export default GeekLayout