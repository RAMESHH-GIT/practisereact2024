
import './App.css';

import Header from '../src/MCRSFT/Header';
import Carousel from '../src/MCRSFT/Carasoel';
import MainContent from '../src/MCRSFT/MainC';
import Footer from '../src/MCRSFT/Footer';
import React,{useState}from 'react';

function App() {
  const [productCount, setProductCount] = useState(2);
    const [companyCount, setCompanyCount] = useState(3);
  return (
    <div className="App">
 <Header productCount={productCount} companyCount={companyCount} />
  <Carousel/>
  <MainContent/>
  <Footer/>
   
    </div>
  );
}

export default App;