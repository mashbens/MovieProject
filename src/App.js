import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className='App'>
      <Router>
        <div className='container'>
          <Header></Header>
          <Routes>
            <Route path='*' element={<PageNotFound />} />
            <Route path='/' element={<Landing />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
