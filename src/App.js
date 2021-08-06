import "./App.css";
import { useState } from "react";

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [cashGiven, setCashGiven] = useState(0);
  const [change, setChange] = useState(0);
  const availableNotes = [2000, 500, 100, 20, 10, 5 ,1];
  const noOfNotes = document.querySelectorAll('.notes');
  let returnAmount;

  const giveNotes = () => {
    // console.log(returnAmount)
    for(let i=0; i< availableNotes.length; i++){
      const numberOfNotes = Math.trunc(returnAmount / availableNotes[i]);
      // console.log("number of notes",numberOfNotes);
      returnAmount %= availableNotes[i];
      // console.log("change", returnAmount);
      noOfNotes[i].innerText = numberOfNotes;
    }
  }

  const evaluate = (e) => {
    e.preventDefault();
    if(cashGiven < billAmount) {
      // setChange("wanna wash plates?")
      alert("wanna wash plates?")
      // var message = document.querySelector('.userMessage');
      // message.innerHTML = "wanna wash plates?";
    }
    returnAmount = Number(cashGiven - billAmount); 
    // message.innerHTML = ("total change to give");
    setChange(returnAmount);
    // console.log({change});
    giveNotes();
  };

  return (
    <div className="App">
      <h2>Cash register</h2>
      <p>Enter bill amount</p>
      <form onSubmit={evaluate} className="form">
        <input
          type="number"
          placeholder="Billed amount"
          className="billAmount"
          // value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
        />
        <input
          type="number"
          placeholder="Cash given"
          className="cashGiven"
          // value={cashGiven}
          onChange={(e) => setCashGiven(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <div>
        <div className="userMessage">The total change to be given back: {change} </div>
        {/* <div>Notes that can be given </div> {outputChange} */}
        <div className="table">
        <tbody>
          <tr>
            <td>No of notes</td>
            <td className="notes"></td>
            <td className="notes"></td>
            <td className="notes"></td>
            <td className="notes"></td>
            <td className="notes"></td>
            <td className="notes"></td>
            <td className="notes"></td>
          </tr>
          <tr>
            <td>Note / denomination</td>
            <td>2000</td>
            <td>500</td>
            <td>100</td>
            <td>20</td>
            <td>10</td>
            <td>5</td>
            <td>1</td>
          </tr>
        </tbody>
        </div>
      </div>
    </div>
  );
}

export default App;
