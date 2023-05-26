import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Lyout/Main";
import Home from "../pages/Home/Home";
import OurManu from "../pages/OurManu/OurManu";


 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main /> ,
      children:[
        {
            path:'/',
            element: <Home />
        },
        {
          path:'ourmanu',
          element: <OurManu />
        }
      ]
    },
  ]);