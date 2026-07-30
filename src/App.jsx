import "./commonResource/style.css";
import Header from "./components/Header.jsx";
import FoodItem from './components/FoodItem.jsx'

function App() {
  return (
    <>
      <div className="foods-container">
         <Header />
         <FoodItem/>
         <Header/>
      </div>
    </>
  );
}

export default App;
