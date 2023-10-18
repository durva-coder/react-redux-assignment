import React from "react";
import SingleProduct from "./SingleProduct";
import classes from "./AllProducts.module.css";

function AllProducts() {
  const SAMPLE_PRDDUCTS = [
    {
      id: "p1",
      price: 126,
      title: "Man Perfume",
      description: "Denver - Hamilton",
    },
    {
      id: "p2",
      price: 125,
      title: "Man Deo",
      description: "Navia - 24 hours refreshment",
    },
  ];

  return (
    <div className="mt-5">
      <h2>BUY YOUR FAVORITE PRODUCTS</h2>
      <ul className={classes.list}>
        {SAMPLE_PRDDUCTS.map((product) => (
          <li>
            <SingleProduct
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllProducts;
