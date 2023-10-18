import React from "react";
import CartItem from "./CartItem";
import classes from "../product/AllProducts.module.css";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="card w-50 mx-auto mb-5 mt-5">
      <h2 className="mb-3 mt-2">Your Shopping Cart</h2>

      <ul className={classes.list}>
        {cartItems.map((item) => (
          <li>
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.title,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
