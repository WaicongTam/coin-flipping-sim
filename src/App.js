import './App.css';
import PlottingPanel from './PlottingPanel';

function App() {
  return (
    <div className="App">

      <div className="App-CoinPanel">

      </div>

      <div className="App-ControlPanel">
        <PlottingPanel alpha="2" beta="2" />
      </div>

      <div className="App-HistoryPanel">

      </div>

      <div className="App-PlotPanel">

      </div>
      
    </div>
  );
}

export default App;
