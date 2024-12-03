import './assets/CSS/layout.css';
import Products from './components/Products';
import { flowers } from './components/FlowerDB';

function App() {
  return (
    <div className="main-grid-container">
      <Products products={flowers} />
    </div>
  );
}

export default App;
