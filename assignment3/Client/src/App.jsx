import './App.css';
import { Routes, Route } from 'react-router-dom';
import MyKitchen from './Pages/MyKitchen';
import AddIngredient from './Pages/AddIngredient';
import AddRecipe from './Pages/AddRecipe';
import NavMenu from './Comps/NavMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import KitchenApp from './Comps/KitchenApp';


function App() {
  return (
    <div className="App">
      <KitchenApp>
        <NavMenu />
        <Routes>
          <Route path="/" element={<MyKitchen />} />
          <Route path="/addIngredient" element={<AddIngredient />} />
          <Route path="/addRecipe" element={<AddRecipe />} />
        </Routes>
      </KitchenApp>
    </div>
  );
}

export default App;
