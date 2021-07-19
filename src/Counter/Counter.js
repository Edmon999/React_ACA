import { Component } from "react";
import styles from "./Counter.module.css";
import Inputs from "../inputsField/inputs";
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      info: {},
    };
  }

  componentDidMount() {
    this.setState({
      value: Number(localStorage.getItem("value")),
    });
  }
  componentDidUpdate() {
    localStorage.setItem("value", this.state.value);
  }

  handleClick = (sign) => {
    const { value,isNumberSmallThanZero } = this.state;
    const { minimum, maximum, step } = this.state.info;
    if (step) {
         if (sign === "+" && value + +step <= maximum) {
          this.setState((prevState) => ({
            value: prevState.value + Number(step),
          }));
        } else if (sign === "-" &&  value - +step >= minimum) {
          this.setState((prevState) => ({
            value: prevState.value - Number(step),
          }));
        } else if (sign === "0") {
          this.setState((prevState) => ({
            value: 0,
          }));
        }
    }
  
  };
  getInfoFromInputs = (info) => {
    this.setState({
      info,
    });
  };
  render() {
    const { value} = this.state;
    return (
      <div className={styles.main}>
        {value}
        <div className={styles.buttons}>
          <button onClick={() => this.handleClick("+")}> plus</button>
          <button onClick={() => this.handleClick("-")} disabled={value === 0}> minus </button>
          <button onClick={() => this.handleClick("0")}> reset </button>
        </div>
        <Inputs stateFromInput={this.getInfoFromInputs} />
      </div>
    );
  }
}
export default Counter;
