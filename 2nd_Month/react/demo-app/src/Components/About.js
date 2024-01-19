import React, { Component } from "react";
import "../Components/toggler";

class About extends Component {
  render() {
    return (
      <div>
        <h1 className="display-1">About Us</h1>
        <img
          src={require("../img/company.avif")}
          alt="Company MEETING"
          className="img-fluid"
        />
        <p>The CAD Company was established 1988 as a result of Martial Law</p>
        <button className="btn btn-primary" id="hide_para">
          Hide paragraph
        </button>
      </div>
    );
  }
}
export default About;
