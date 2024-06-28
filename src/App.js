import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ContentBox from './Components/Home/ContentBox';
import Question from './Components/Questions/Question';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from './Components/Home/Index';

function App() {
  return (
    <div>
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Question />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
