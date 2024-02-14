import React from "react";
import Button from "../UI/Button.jsx";
import logo from "../../assets/pngtree-food-logo-png-image_5687686.jpeg";

const Header = () => {
  return (
    <div>
      <div className="w-[90%] flex justify-between m-auto text-slate-200 pt-8">
        <div className="flex justify-start items-center">
          <img className="w-[5.5rem] h-20" src={logo} />
          <span className="text-orange-300 font-bold text-xl shadow-lg">
            Food SHOP
          </span>
        </div>
        <Button textonly={true}>Cart (0)</Button>
      </div>
    </div>
  );
};

export default Header;
