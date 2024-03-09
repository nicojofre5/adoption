import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router} from "react-router-dom";
import Rutas from "./components/Rutas";
import NavBar from "./components/NavBar";
function App() {
  return (
    <Router>
      <NavBar />
      <Rutas />
    </Router>
    
  );
}

export default App;
