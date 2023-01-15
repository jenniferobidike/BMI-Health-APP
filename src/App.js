import React, {useState} from 'react';
import './index.css';
import './App.css';

function App() {

const [weight, setWeight] = useState(0)
const [height, setHeight] = useState(0)
const [bmi, setBmi] = useState('')
const [message, setMessage] = useState('')


let calcBmi = (e) => {
  e.preventDefault()

  if (weight === 0 || height === 0) {
    alert('Please enter a valid weight or height')
  } else {
    let bmi = weight / (height * height) * 10000 ;
  
    setBmi(bmi.toFixed(1));
    
    if (bmi < 25) {
      setMessage('You are underweight!')
    } else if (bmi >= 25 && bmi < 30) {
      setMessage('Congratulations. You are a healthy weight!')
  
    } else {
      setMessage('You are overweight!')
    }
  }

}
 
let imgSrc;
if (bmi < 1) {
  imgSrc = null;
}
else{
  if (bmi < 25) {
    imgSrc = require('../src/images/thin-girl.png')
  } else if (bmi >= 25 && bmi < 30) {
    imgSrc = require('../src/images/healthy-girl.png')
  } else {
    imgSrc = require('../src/images/fat-girl.png')
  }

}
let reload = () => {
  window.location.reload()
 }


  return (
    <body>
      <div><h1>Be Healthy! Know Your Body Mass Index (BMI).</h1></div>
      <div className="app"> 
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (cm)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)}/>
          </div>
          <div>
           <button className="btn" type="submit">Submit</button>
            <button className=" btn btn-outline" onClick={reload} type="submit">Reload</button>
          </div>
        </form>
        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
        <div className="img-container">
          <img src={imgSrc} alt="" ></img>
        </div>

      </div>

    </div>
    </body>
  )

}

export default App;
