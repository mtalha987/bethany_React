import React from 'react';
import './App.css';
import NavBar from './component/NavBar/NavBar.jsx';
import Main from './component/Main/Main';
import Services from './component/Services/Services';
import Portfolio from './component/Portfolio/portfolio';
import Team from './component/Team/Team';
import Form from './component/Form/Form';
import Footer from './component/footer/Footer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Main/>
      <Services/>
      <Portfolio/>
      <Team/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
