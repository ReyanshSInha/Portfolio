import logo from './logo.svg';
import './App.css';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import BlogScreen from './components/BlogScreen';
import BlogCard from './components/BlogCard';

function App() {
  return (
    <div style={{ pointerEvents: "auto" }} className="App">
      {/* <SplashScreen/>
      <HomeScreen/> */}
      <BlogScreen/>
      {/* <BlogCard/> */}
    </div>
  );
}

export default App;
