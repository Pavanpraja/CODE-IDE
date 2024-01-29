import Home from './components/Home';
import './App.css'
import DataProvider from './Context/DataProvider';
function App() {
  return (
    <div className="App">
    <DataProvider>
      <Home />
    </DataProvider>
    </div>
  );
}

export default App;
