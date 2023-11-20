import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import PokemonesPage from "../pages/PokemonesPage/PokemonesPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import DetallesPage from "../pages/DetallesPage/DetallesPage"

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/pokemones" element={<PokemonesPage/>}></Route>
            <Route path="/pokemones/:name" element={<DetallesPage/>}></Route>
            <Route path="*" element={<HomePage/>}></Route>
        </Routes>
    )
}

export default MyRoutes