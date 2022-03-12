import { Component } from "react";
import "./index.css";

class Speedometer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 0,
    };
    this.onClickAccelerateButton = this.onClickAccelerateButton.bind(this);
    this.onClickApplyBrakeButton = this.onClickApplyBrakeButton.bind(this);
  }
  onClickAccelerateButton() {
    if (this.state.speed < 200) {
      this.setState({ speed: this.state.speed + 10 });
    }
  }
  onClickApplyBrakeButton() {
    if (this.state.speed > 0) {
      this.setState({ speed: this.state.speed - 10 });
    }
  }
  render() {
    return (
      <div className="speedometer-app-container">
        <div className="speedometer-container ">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="speedometer-image"
          />
          <h1 className="speed-text">Speed is {this.state.speed}mph</h1>
          <p className="speed-limits">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="buttons-container">
            <button
              type="button"
              className="accelerate-button button"
              onClick={this.onClickAccelerateButton}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="apply-brake-button button"
              onClick={this.onClickApplyBrakeButton}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Speedometer;
