import logo from "./logo.svg";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./Components/Nav/Nav";
// import Slider from "./Components/Slider";
import ContactUs from "./Components/Contact/ContactUs";
import Faq from "./Components/FAQ/Faq";
import AboutUs from "./Components/About/AboutUs";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact" component={ContactUs} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
