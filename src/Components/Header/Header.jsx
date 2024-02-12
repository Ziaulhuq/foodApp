import React from "react";

const Header = () => {
  return (
    <div className="text-red-900 font-bold">
      <div className="flex justify-between text-slate-200 pt-8">
        <h1 className="text-2xl">FoodAPP</h1>
        <button>Cart (0)</button>
      </div>
    </div>
  );
};

export default Header;
