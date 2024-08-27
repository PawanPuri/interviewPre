
import React from 'react'
import {createBrowserRouter,
  RouterProvider,} from 'react-router-dom'
import SignUp from './components/SignUp'
import Home from './components/home/Home'
import About from './components/home/About'
import ContectUs from './components/home/ContectUs'
import CreateView from './components/post/CreateView'
import UpdateView from './components/post/UpdateView'
import DetailView from './components/post/DetailView'
const App = () => {
  const router=createBrowserRouter(
    [
      {
        element:<SignUp/>,
        path:'/'
      }
    ]
  )
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
