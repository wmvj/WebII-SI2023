import {Routes, Route} from "react-router"
import {Home} from "../pages/Home"
import {Products} from "../pages/Products"
import {Details} from "../pages/Details"
import {NotFound} from "../pages/NotFound"


export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" index element={<Home/>} />
            <Route path="/products" index element={<Products/>}/>
            <Route path="/details/:id" index element={<Details/>}/>
            <Route path="*" index element={<NotFound/>}/>
        </Routes>

    )
}