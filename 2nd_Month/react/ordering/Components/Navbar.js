import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="/home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/ordering">
                  Order
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1">
                  Careers
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
