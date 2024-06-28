import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ContentBox from './Components/Home/ContentBox';
import Question from './Components/Questions/Question';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from './Components/Home/Index';
import ThirdBlock from './Components/ThirdBlock/ThirdBlock';

function App() {
  return (
    <div>
       <Navbar />
    <Router>
      <div className="App">
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Question />} />
          <Route path="/thirdblock" element={<ThirdBlock/>} />
        </Routes>
      </div>
    </Router>
    
    </div>
  );
}

export default App;
