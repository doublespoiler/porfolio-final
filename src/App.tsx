import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Header from './components/Header';
import Footer from './components/Footer';

const App:React.FC = () => {
  
  return(
    <div id="wrapper">
      <Header />
      <main id="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))


