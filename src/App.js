import './App.css';
import Clock from './components/clockClass';
import ClockFunction from './components/clockFunction';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      {/* componente de referencia */}
        {/* <Clock /> */} 
        
        <ClockFunction />
      </header>
    </div>
  );
}

export default App;
