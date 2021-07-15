import { Component } from "react";
import styles from "./Inputs.module.css";
class Inputs extends Component {
  constructor() {
    super();
    this.state = {
      step: "",
      minimum: "",
      maximum: "",
    };
  }


  handleChange = (e) => {
    const { name, value } = e.target;
      this.setState({
        [name]: value,
      },() => {
        this.props.stateFromInput(this.state)
      });
  };
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.inputs}>
          <input
            type="text"
            placeholder="step"
            onChange={this.handleChange}
            name="step"
            value={this.state.value}
          />
          <input
            type="text"
            placeholder="minimum"
            onChange={this.handleChange}
            name="minimum"
          />
          <input
            type="text"
            placeholder="maximum"
            onChange={this.handleChange}
            name="maximum"
          />
        </div>
      </div>
    );
  }
}
export default Inputs;
