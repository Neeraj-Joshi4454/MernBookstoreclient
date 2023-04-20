import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import AddBook from './components/AddBook';
import About from './components/About';
import PageNotFound from './components/PageNotFound';
import Books from './components/book/Books'
import Header from './components/Header';
function App() {
  return (
   <>

      <Router>

          <Header/>
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/add' element={<AddBook/>}/>
          <Route path='/books' element={<Books/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<PageNotFound/>}/>


        </Routes>


      </Router>
    

   </>
  );
}

export default App;
