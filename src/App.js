import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Favourites from './Pages/Favourites';
import Details from './Pages/Details';
import Contextprovide from './Context';
import { useState } from 'react';

function App() {
  const[theme,settheme]=useState('dark')
  return (
    <div className='app' data-theme={theme}>
    <Contextprovide>
    <div>
      <NavBar props={{theme,settheme}}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/favourites' element={<Favourites/>}/>
      <Route path='/recipe-item/:id' element={<Details/>}/>
    </Routes>
    </div>
    </Contextprovide>
    </div>
  );
}

export default App;

