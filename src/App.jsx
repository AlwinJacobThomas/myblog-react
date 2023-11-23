import './index.css';
import NavBar from './NavBar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogDetails from './BlogDetails';

function App() {
  return (
    // access Router package for all components
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          {/*Routes `*/}
          <Routes>
            {/* Route - adding path which loads the curresponding resources to the page */}
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/blogs/:id' element={<BlogDetails/>} />
            <Route path='/create' element={<Create />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
