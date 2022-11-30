import logo from './logo.svg';
import './App.css';
import EHeader from './Elements/EHeader';
import FCRecipe from './Functional Comps/FCRecipe';
import 'bootstrap/dist/css/bootstrap.min.css';
import CCMyKitchen from './Class Comps/CCMyKitchen';

function App() {
  return (
    <div className="App">
      <header>
      {EHeader}
      <CCMyKitchen/>
      </header>
    </div>
  );
}

export default App;
