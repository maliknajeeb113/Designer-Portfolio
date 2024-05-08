import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Project1 from './components/Project1'
import Body from './components/Body'
import Error from './components/Error'
import Project2 from './components/Project1'
import Project3 from './components/Project3'
import Playground from './components/Playground'
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
      },
      {
        path: "/project2",
        element: <Project2 />,
      },
      {
        path: "/project3",
        element: <Project3 />,
      },
      {
        path: "/playground",
        element: <Playground />,
      },
      
    ]
  }
  
]);

export default App
