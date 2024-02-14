import React from "react";
import Button from "../UI/Button.jsx";
import { CurrencyFormatter } from "../UI/CurrencyFormatter.jsx";

const MealItem = ({ meal }) => {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} />
        <h3>{meal.name}</h3>
        <p className="meal-item-price">
          {CurrencyFormatter.format(meal.price)}
        </p>
        <p className="meal-item-description">{meal.description}</p>
        <Button className="meal-item-actions">Add to Cart</Button>
      </article>
    </li>
  );
};

export default MealItem;
