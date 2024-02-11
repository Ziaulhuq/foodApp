import "./App.css";
import Header from "./Components/Header/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  return (
    <div className="w-[80%] m-auto">
      <Header />
      <Meals />
    </div>
  );
}

export default App;
