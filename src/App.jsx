import pizzaData from "../data";
import "./index.css";
//github.com/raymund-corpuz/pizza-menu.git

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <ul className="pizzas">
        {pizzaData.map((pizza, index) => (
          <Pizza pizzaObj={pizza} key={index} />
        ))}
      </ul>

      <Footer />
    </div>
  );
}

export default App;

function Pizza(props) {
  return (
    <li className="pizza div">
      <img
        className="pizza img"
        src={props.pizzaObj.photoName}
        alt={props.pizzaObj.name}
      />
      <div>
        <h2>{props.pizzaObj.name}</h2>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Header() {
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
    </main>
  );
}

function Footer() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const currentDate = `${day}-${month}-${year}`;

  return (
    <footer className="footer"> {currentDate} Were are currently open</footer>
  );
}
