import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Infos from './pages/Infos'


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/infos" element={<Infos />}></Route>
            </Routes>
        </BrowserRouter>
    )
} 

export default AppRoutes