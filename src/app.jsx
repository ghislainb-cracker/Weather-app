import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Starter from "./components/starter";
import Home from "./components/homepage";
import Cities from "./components/cities";

export default function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Starter/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/cities" element={<Cities/>} />
            </Routes>
        </Router>
    )
}