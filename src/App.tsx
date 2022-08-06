import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap"
import background from "./assets/images/car.png";
import Header from './components/Header';
import CarCard2 from './components/CarCard2';
import CarCardJSon from './components/CarCardJSon';

function App() {
  return (
    <div className="App" style={{
      backgroundImage: `url(${background})`, backgroundRepeat: " no-repeat", overflow: "auto",
      background, position: "absolute", backgroundColor: "grey", height: 900, width: "100%"
    }}
     >
      {/* <Container className="mb-4"> */}
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/car1" element={<CarCard2 />} />
          <Route path="/car" element={<CarCardJSon />} />


        </Routes>
        </BrowserRouter>
      {/* </Container> */}
    </div>
  );
}

export default App;
