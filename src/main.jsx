import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Notfound from './Components/Notfound.jsx';
import Home from './Components/Home.jsx';
import Rooms from './Components/Rooms.jsx';
import Mybookings from './Components/Mybookings.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import Detailspage from './Components/Detailspage.jsx';
import Provider from './Customhooks/Provider.jsx';
import Private from './Components/private.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Notfound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/Room',
        element: <Rooms />
      },
      {
        path: '/Mybooking',
        element: <Private><Mybookings /></Private>
      },
      {
        path: '/About',
        element: <About />
      },
      {
        path: '/Contact',
        element: <Contact />
      },
      {
        path: '/Login',
        element: <Login />
      },
      {
        path: '/Register',
        element: <Register />
      },
      {
        path: '/Details/:name',
        element:<Private><Detailspage/></Private>,

      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
