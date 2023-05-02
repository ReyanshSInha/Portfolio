import logo from './logo.svg';
import './App.css';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';

function App() {
  return (
    <div style={{ pointerEvents: "auto" }} className="App">
      <SplashScreen/>
      <HomeScreen/>
     
    </div>
  );
}

export default App;
