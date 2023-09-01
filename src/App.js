import {RouterProvider} from 'react-router-dom';
import {Router} from "./router/Router";

export const App = () =>{
  return(
      <RouterProvider router={Router}></RouterProvider>
  )
   
}