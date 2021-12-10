import Instrument from "./components/Instrument";

import {instruments} from "./data/keys"

function App() {

  const getRandomColor =() => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className="App">
      <h1 style={{color: `${getRandomColor()}`}}>🎶MY BAND🎼</h1>
      {instruments.map((instrument, index) => {
        return (
          <div className="instrument-container flex" key={index}>
          <Instrument  color= {getRandomColor()}
                      instrument = {instrument}/>
        </div>)
      })}
    </div>
  );
};

export default App;
