import './App.css';
import { Navbar } from './Component/Navbar';
import { Movie } from './pages/Movie';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Movie />
    </div>
  );
}

export default App;
