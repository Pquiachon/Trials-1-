import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.js";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Grades from "./Components/Grades";
import Shop from "./Components/Shop";
import Triangle from "./Components/Triangle";
import Counter from "./Components/Counter";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <div>
              <h1 className="display-1">My First Website</h1>
              <p>Hello, John Paul!</p>
            </div>
            <Footer />
          </>
        }
      />

      <Route
        path="/about"
        element={
          <>
            <Navbar />
            <About />
            <Footer />
          </>
        }
      />

      <Route
        path="/grades"
        element={
          <>
            <Navbar />
            <Grades score={60} total={100} />
            <Footer />
          </>
        }
      />
      <Route
        path="/shop"
        element={
          <>
            <Navbar />
            <Shop />
            <Footer />
          </>
        }
      />
      <Route
        path="/counter"
        element={
          <>
            <Navbar />
            <Counter />
            <Footer />
          </>
        }
      />
      <Route
        path="/triangle"
        element={
          <>
            <Navbar />
            <Triangle />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
