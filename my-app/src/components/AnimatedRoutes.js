import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"
import HomePage from '../Pages/HomePage';
import PortfolioPage from '../Pages/PortfolioPage';
import BlogPage from '../Pages/BlogPage';
import ConnectPage from '../Pages/ConnectPage';

import { AnimatePresence } from "framer-motion"

const AnimatedRoutes = () => {
    // const location = useLocation()

    return (
        <AnimatePresence>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/connect" element={<ConnectPage />} />
            </Routes>
        </AnimatePresence>

    )
}

export default AnimatedRoutes