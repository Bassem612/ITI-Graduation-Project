import logo from "./logo.svg";
import "./App.css";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Slider from "./Components/Slider";

import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Nav />
          <Home/>
        <Footer/>
    </div>
  );
}

export default App;
