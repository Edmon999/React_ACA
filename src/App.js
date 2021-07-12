import { Component } from "react";
import styles from './App.module.css'
import images from  './images/01.svg'
class App extends Component {
  state = {
    wheather: [
      {
        weekDey: "Monday",
        imgURL: images,
        temp: "39C",
      },
      {
        weekDey: "thuesday",
        imgURL: images,
        temp: "39C",
      },
      {
        weekDey: "wednesday",
        imgURL: images,
        temp: "39C",
      },
      {
        weekDey: "thursday",
        imgURL: images,
        temp: "39C",
      },
      {
        weekDey: "saturday",
        imgURL: images,
        temp: "39C",
      },
      {
        weekDey: "Sunday",
        imgURL: images,
        temp: "39C",
      },
    ],
  };
 renderWheather = (day,index) => {
    return(
        <div className={styles.card} key={index}>
        <h2>{day.weekDey}</h2>
        <img src={images} width="80px" height="80px"/>
        <p>{day.temp}</p>
    </div>
    )
  }
  render() {
    const {wheather} = this.state
     return(
    <div className={styles.cards}>
        {wheather.map(this.renderWheather)}
    </div>
    ) 
  }
}
export default App