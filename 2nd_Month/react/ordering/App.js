import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery/dist/jquery.js";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Ordering from "./Components/Ordering";

import "./Components/button.js";

function App() {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <>
            <Navbar />
            <div className="container">
              <div className="row">
                <div className="col-lg-12 d-flex align-item-center justify-content-center">
                  <h1 id="welcome_page">
                    Welcome to Oso Resto <br />
                    <button className="btn btn-primary" id="order_now">
                      Order Now!
                    </button>
                  </h1>
                </div>
              </div>
            </div>
            <Footer />
          </>
        }
      />
      <Route
        path="/ordering"
        element={
          <>
            <Navbar />
            <Ordering />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
