import React from "react";
import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.totalQuantity);

  const toggleHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <h2 className="navbar-brand">My Online Shopping Site</h2>
          <button
            className="btn btn-outline-success me-5 margin-auto"
            type="submit"
            onClick={toggleHandler}
          >
            <span className="me-1">My Cart</span>
            <span className="badge rounded-pill bg-info text-dark">
              {quantity}
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
