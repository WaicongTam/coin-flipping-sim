import './App.css';
import PlottingPanel from './PlottingPanel';
import CoinPanel from './CoinPanel';

function App() {
  return (
    <div className="App">

      <div className="App-CoinPanel">
        <CoinPanel face="head"/>
      </div>

      <div className="CoinFlippingSim-PlottingPanel">
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
