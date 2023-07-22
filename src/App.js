import ContentCart from "./content-cart/ContentCart";
import NavCart from "./navbar-cart/NavCart";
import { increment, decrement } from "./reducer";


function App() {
  return (
    <div className="App">
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>  
      <NavCart></NavCart>
      <ContentCart></ContentCart>
    </div>
  );
}

export default App;
