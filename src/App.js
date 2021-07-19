import { Component } from "react";

import Weather from "./weather/weather";
import Counter from "./Counter/Counter";
class App extends Component {
  render() {
      return(
    <div>
        {/* <Weather/> */}
        <Counter />
    </div>
    ) 
  }
}
export default App