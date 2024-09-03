import logo from './logo.svg';
import './App.css';

//components

import NavBar from './components/NavBar';
import Home from './components/Home';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

//DOM-ROUTER components
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    //<div className="App">
    < BrowserRouter >
      <NavBar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/all' element = {<AllUsers />} />
        <Route path='/add' element = {<AddUser />} />
        <Route path='/edit:id' element = {<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
