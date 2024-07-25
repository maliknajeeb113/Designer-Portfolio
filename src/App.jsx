import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import BLive from './components/BLive'
import Body from './components/Body'
import Error from './components/Error'
import Playground from './components/Playground'
import TanishqPortfolio from './components/TanishqPortfolio'
import Footer from './components/Footer'
import Brandshark from './components/Brandshark'

import { createBrowserRouter,Link,Outlet } from "react-router-dom";
import { useState } from 'react'

const Redirect = ({ to }) => {
  window.location.href = to;

};




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
        path: "/BLive",
        element: <BLive />,
      },
      {
        path: "/TanishqPortfolio",
        element: <TanishqPortfolio />,
      },
      {
        path: "/Brandshark",
        element: <Brandshark />,
      },
      {
        path: "/playground",
        element: <Playground />,
      },
      {
        path: "/pre-onboarding",
        element: <Redirect to="https://eejp1kkl8an.typeform.com/to/ZyWjcdcq" />,
      }
      
    ]
  }
  
]);

export default App
