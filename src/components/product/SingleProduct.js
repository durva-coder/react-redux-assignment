import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

function SingleProduct(props) {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(
      cartActions.addItem({
        id: props.id,
        title: props.title,
        price: props.price,
      })
    );
  };

  return (
    <div className="card w-50 mx-auto mb-3">
      <div className="card-body">
        <header className="float-start">
          <h3>{props.title}</h3>
          <p className="card-text">{props.description}</p>
        </header>
        <div className="float-end">
          <h4>
            <div className="badge rounded-pill bg-primary">${props.price}</div>
          </h4>
          <div>
            <button
              className="mt-5 btn btn-outline-primary"
              onClick={addItemHandler}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
