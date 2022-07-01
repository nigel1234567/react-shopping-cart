import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import About from "./components/About"
import Shop from "./components/Shop"
import Header from  "./components/Header"
import Footer from  "./components/Footer"
import 'bulma/css/bulma.min.css';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <div className="main">
                <Header/>
                <Routes>
                    <Route path="/" element={<App/>} />
                    <Route path="/home" element={<App/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/shop" element={<Shop/>} />
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default RouteSwitch