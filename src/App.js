import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
