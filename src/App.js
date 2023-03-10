import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { Canvas, useLoader  } from "@react-three/fiber";
import Cylinder3d from "./component/Cylinder3d";
import starsTexture from './img/stars.jpg';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Suspense } from 'react'
import About from './About';


function App() {

  return (
    <div className="App">
      <div className="content">
        <Home />
        <About />
      </div>
    </div>
  );
}

export default App;
