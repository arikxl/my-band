import Instrument from "./components/Instrument";

import {instruments} from "./data/keys"


function App() {
  console.log(instruments[0].notes)
  return (
    <div className="App">
      <h1 style={{color: '#05668d', textAlign: 'center'}}>MY BAND</h1>
      {instruments.map((instrument, index) => {
        return <Instrument key={index}
                instrument = {instrument}
        />
      })
      }
    </div>
  );
}

export default App;
