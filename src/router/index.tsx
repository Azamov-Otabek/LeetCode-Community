import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Login, Register, Home, Settings, Pointers, Reytings } from "@pages";
import Layout from '@layout'
import App from "../App";


export default function Router(){
    const root = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App/>}>
               <Route index element={<Login />} /> 
               <Route path="/register" element={<Register/>}/>
               <Route path="/dashboard/*" element={<Layout />}>
                     <Route index element={<Home />} />
                     <Route path="settings" element={<Settings />} />
                     <Route path="pointers" element={<Pointers />} />
                     <Route path="reyting" element={<Reytings />} />
                </Route>
            </Route>
        )
    )
    return <RouterProvider router={root} />
}