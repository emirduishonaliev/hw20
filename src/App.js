import { useState } from "react";
import "./App.css";
import { Basket } from "./components/basket/Basket";
import { Header } from "./components/header/Header";
import { MealSummary } from "./components/meal-summary/MealSummary";
import { Meals } from "./components/meals/Meals";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <Provider store={store}>
      <Header onToggle={toggleHandler} />
      <MealSummary />
      <Meals />
      {toggle && <Basket onToggle={toggleHandler} />}
    </Provider>
  );
}

export default App;
