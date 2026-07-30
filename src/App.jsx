import "./App.css";
import Menu from "./components/Menu/Menu";
import { menuItems } from "./Resources/menu";

function App() {
  return (
    <>
      {/* Header */}
      <header className="title">
        <h1>Evangadi Menu</h1>
        <div></div>
      </header>

      {/* Food Cards */}
      <div className="foods-container">
        {menuItems.map(({ id, image, title, price, description }) => {
          return (
            <Menu
              key={id}
              image={image}
              title={title}
              price={price}
              description={description}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;