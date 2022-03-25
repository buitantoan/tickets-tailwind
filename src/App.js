import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import HomePage from './home/HomePage';
import Tickets from './tickets/Tickets';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='tickets' element={<Tickets/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
