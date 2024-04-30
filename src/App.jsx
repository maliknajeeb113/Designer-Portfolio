import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Project1 from './components/Project1'
import Body from './components/Body'
import Error from './components/Error'


import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar/>
      <Outlet/>
      <Footer/>
      
    </>
  )
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/project1",
        element: <Project1 />,
      }
      
    ]
  }
  
]);

export default App
