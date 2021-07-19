import { Component } from "react";

import Weather from "./weather/weather";
import Counter from "./Counter/Counter";
import MyForm from "./Form/Form";

class App extends Component {
  render() {
      return(
    <div>
        {/* <Weather/> */}
        {/* <Counter /> */}
        <MyForm />
    </div>
    ) 
  }
}
export default App