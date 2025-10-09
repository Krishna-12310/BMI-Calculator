import "./App.css";
import React , {useState} from "react";
function App() {

  // Making State of our application

  const [weight,setWeight]=useState(0);
  const [height,setHeight]=useState(0);
  const [bmi,setBmi]=useState('');
  const [message,setMessage]=useState('');

// Logic


let calcBmi=(e)=>{
  e.preventDefault();

  
  if(weight===0 || height===0)
  {
    alert("Please Enter a valid Weight and Height")
  }
  else{
    let bmi=(weight/(height*height)*703)
  setBmi(bmi.toFixed(1))


  if(bmi<25){
    setMessage("You are Under Weight Person")
  }
  else if(bmi>=25 && bmi<30){
    setMessage("You are a Heavy Weight Person")
  }
  else{
    setMessage("You are Over Weight Person")
  }
  }

}

let reload=() => {
  window.location.reload()
}


  return (
    <div className="App">
      <div className="conatiner">
        <h2>BMI CALCULATOR</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight(lbs)</label>
            <input
              type="text"
              placeholder="Enter Weight value"
              value={weight}
              onChange={(e)=>setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height(in)</label>
            <input
              type="text"
              placeholder="Enter Height value"
              value={height}
              onChange={(event)=>setHeight(event.target.value)}

            />
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
