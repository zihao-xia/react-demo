import Login from '@/pages/Login'
import Article from '@/pages/Article'
import Layout from '@/pages/Layout'
import Home from '@/pages/Home'
import Publish from '@/pages/Publish'
import NotFound from '@/pages/NotFound'

import { createBrowserRouter } from 'react-router-dom'
import { AuthRoute } from '@/components/AuthRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthRoute><Layout /></AuthRoute>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'article',
        element: <Article />
      },
      {
        path: 'publish',
        element: <Publish />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/article/:id',
    element: <Article />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router