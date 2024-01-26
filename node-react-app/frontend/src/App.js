import Nav from './components/Nav';
import Info from './components/Info';
import Home from './components/Home';
import Tweet from './components/Tweet';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="Home" element={< Home />} />
          <Route path="Info" element={< Info />} />
          <Route path="Tweets" element={< Tweet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;