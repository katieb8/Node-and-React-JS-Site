//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Nav />
        <p>Testy test</p>
      </header>
    </div>
    </Router>
  );
}

export default App;
