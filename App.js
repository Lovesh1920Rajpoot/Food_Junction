import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
//import About from './components/About';
//import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';


const Contact  = lazy(()=> import("./components/Contact"));
const About = lazy(()=> import ("./components/About"));
const App = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}
const applayout= createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: (<Suspense fallback={<h1>Loading.......</h1>}>
          <About/>
        </Suspense>)
      },
      {
        path: "/contact",
        element: (
        <Suspense fallback={<h1>Loading.....</h1>}>
          <Contact/>
          </Suspense>)
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>,
      }
    ],
    errorElement:<Error/>
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={applayout}/>);
