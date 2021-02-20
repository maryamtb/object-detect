import React, { Component } from "react";

import Particles from "react-particles-js";

import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import ImageRecognition from "./components/ImageRecognition/ImageRecognition";
import DetectInfo from "./components/DetectInfo/DetectInfo";

import Clarifai from "clarifai";

import "tachyons";

import "./App.css";

const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_API_KEY,
});
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageURL: "",
      imageInfo: [],
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageURL: this.state.input });

    app.models
      .predict(Clarifai.FOOD_MODEL, this.state.input, { maxConcepts: 3 })
      .then((response) => {
        const res = response.outputs[0].data.concepts;
        console.log(res);
        this.setState({ imageInfo: res });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <Particles
          params={{
            particles: {
              number: {
                value: 100,
              },
              size: {
                value: 0.5,
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#ffffff",
                },
                polygon: {
                  nb_sides: 3,
                },
                image: {
                  src: "img/github.svg",
                  width: 200,
                  height: 200,
                },
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },

              line_linked: {
                enable: true,
                distance: 110,
                color: "#ffffff",
                opacity: 0.4,
                width: 0.4,
              },
              move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: true,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: false,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
          className="particles"
        />
        <div className="after">
          <ImageLinkForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
          />
          <ImageRecognition imageURL={this.state.imageURL} />
          <DetectInfo imageInfo={this.state.imageInfo} />
        </div>
      </div>
    );
  }
}

export default App;
