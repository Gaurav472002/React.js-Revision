import React from "react";
import { useSelector } from "react-redux";
import { getItemsSelector } from "../redux/slices/cartSlice";

const Cart = () => {
    // const items = useSelector((state) => state);
    // const total = items.cart.reduce((a,b)=>a+b.price,0);
    
    // no need of .cart because we are importing getItemsSelector which already selects cart state
    
    const items = useSelector(getItemsSelector);
    const total = items.reduce((a,b)=>a+b.price,0);
  return (
    <div className="alert alert-success">
      <h3 className="text-center">
        {/* Total Items: {items.cart.length} | Total Price: Rs. {total}/- */}
        Total Items: {items.length} | Total Price: Rs. {total}/-
      </h3>
    </div>
  );
};

export default Cart;
