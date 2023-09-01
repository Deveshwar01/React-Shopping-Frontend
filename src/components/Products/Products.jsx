import React, { useState, useEffect } from 'react';
import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products, innerPage, headingText }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}

      <div className="products">
        {isLoading ? (
          <p>Loading products...</p>
        ) : products?.data?.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            data={item.attributes}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
