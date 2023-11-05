import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Notfound from './Components/Notfound.jsx';
import Home from './Components/Home.jsx';
import Rooms from './Components/Rooms.jsx';
import Mybookings from './Components/Mybookings.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';



const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    errorElement : <Notfound/>,
    children : [
      {
        path : '/',
        element : <Home/>
      },
      {
        path : '/Room',
        element : <Rooms/>
      },
      {
        path : '/Mybooking',
        element : <Mybookings/>
      },
      {
        path : '/About',
        element : <About/>
      },
      {
        path : '/Contact',
        element : <Contact/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
