import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

function CartItem(props) {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(
      cartActions.addItem({
        id: props.item.id,
        title: props.item.title,
        price: props.item.price,
      })
    );
  };

  const removeItemToCart = () => {
    dispatch(cartActions.removeItem(props.item.id));
  };

  return (
    <div className="card w-75 h-50 mx-auto margin-auto mb-3">
      <div className="card-body">
        <header className="float-start">
          <h3>{props.item.title}</h3>
          <div className="float-start">
            x <span>{props.item.quantity}</span>
          </div>
        </header>
        <div className="float-end">
          <div className="float-center">
            <strong className={classes.price}>
              ${props.item.total} &nbsp;
            </strong>
            <span>(${props.item.price} / item)</span>
          </div>

          <div>
            <button className="btn btn-danger me-3" onClick={removeItemToCart}>
              -
            </button>
            <button className="btn btn-primary" onClick={addItemToCart}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
