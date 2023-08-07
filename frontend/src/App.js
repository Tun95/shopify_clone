import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/homescreen/HomeScreen";
import NavBar from "./common/nav bar/NavBar";
import Footer from "./common/footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
