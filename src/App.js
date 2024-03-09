import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import Rutas from "./components/Rutas";
import NavBar from "./components/NavBar";

import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <NavBar />
 
      <Rutas />
      <Footer />
    </Router>
    
  );
}

export default App;
