import React from "react";
import Carousel from "nuka-carousel";

const Home = () => (
  <div>
    <Carousel autoplay={true} speed={1} wrapAround={true} withoutControls={true}>
      <img src={require("../images/slide1.jpg")} alt={"broken image"} />
      <img src={require("../images/slider02.jpg")} alt={"broken image"} />
    </Carousel>

    <section className="section has-text-centered">
      <div className="container">
        <h1
          className="title"
          style={{ backgroundColor: "white", color: "#1991B3" }}
        >
          WELCOME AT CARVEXCO
        </h1>
        <sub>
          CARVEXCO, CARIBBEAN Vegetables Export Company is a Dutch company that
          is based in the Caribbean / Dominican Republic and focusses mainly on
          the export of fruit and vegetables to European countries.
        </sub>
      </div>
    </section>
    <div className="columns features">
      <div className="column is-4">
        <div className="card is-shady" style={{ backgroundColor: "#262F36" }}>
          <div className="card-image has-text-centered">
            <br />
            <img
              src={require("../images/altijd-vers.png")}
              alt={"broken image"}
            />
          </div>
          <div className="card-content has-text-centered">
            <div className="content">
              <h4 style={{ color: "white" }}> ALWAYS FRESH </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="column is-4">
        <div className="card is-shady" style={{ backgroundColor: "#262F36" }}>
          <div className="card-image has-text-centered">
            <br />
            <img
              src={require("../images/altijd-op-tijd.png")}
              alt={"broken image"}
            />
          </div>
          <div className="card-content has-text-centered">
            <div className="content">
              <h4 style={{ color: "white" }}> ALWAYS ON TIME </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="column is-4">
        <div className="card is-shady" style={{ backgroundColor: "#262F36" }}>
          <div className="card-image has-text-centered">
            <br />
            <img
              src={require("../images/beste-service.png")}
              alt={"broken image"}
            />
          </div>
          <div className="card-content has-text-centered">
            <div className="content">
              <h4 style={{ color: "white" }}> BEST SERVICE </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
);

export default Home;
