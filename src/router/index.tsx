import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Login } from "@pages";
import Layout from '@layout'
import App from "../App";


export default function Router(){
    const root = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App/>}>
               <Route index element={<Login />} /> 
               <Route path="/dashboard/*" element={<Layout />}>
                    
               </Route>
            </Route>
        )
    )
    return <RouterProvider router={root} />
}