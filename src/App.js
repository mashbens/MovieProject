import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header></Header>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Landing />} />
            {/* <Route path='/movie/:id' element={<Movie />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
