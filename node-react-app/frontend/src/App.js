//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Info from './components/Info';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Nav />
        <Routes>
          <Route path="/Home" element={Home} />
          <Route path="/Info" element={Info} />
        </Routes>
      </header>
    </div>
    </Router>
  );
}

export default App;
