import logo from './logo.svg';
import './App.css';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import BlogScreen from './components/BlogScreen';
import BlogCard from './components/BlogCard';
import Connect from './components/Connect';
import Portfolio from './components/Portfolio';
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom"
import HomePage from './Pages/HomePage';
import PortfolioPage from './Pages/PortfolioPage';
import BlogPage from './Pages/BlogPage';
import ConnectPage from './Pages/ConnectPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  // const location = useLocation()
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/portfolio" element={<PortfolioPage/>}/>
          <Route path="/blog" element={<BlogPage/>}/>
          <Route path="/connect" element={<ConnectPage/>}/>
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
