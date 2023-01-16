import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header.js";
import Difference from "./components/Difference.js";
import Review from "./components/Review.js";
import SemiFooter from "./components/SemiFooter.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <Router>
      <Header />
      <Difference />
      <Review />
      <SemiFooter />
      <Footer />
    </Router>
  );
}

export default App;
