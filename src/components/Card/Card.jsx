import React, { useState } from 'react';
import style from '../Card/card.module.css';
import { products } from '../Card/Data.JS';

const Card = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items to display per page

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
  };

  return (
    <div className={style.container}>
      <div className={style.app}>
        {selectedProducts.map((product) => (
          <div key={product.id} className={style.card}>
            <div className={style.img}>
              <img src={product.picture} alt={product.title} className={style.cardimg} />
            </div>
            <div className={style.cardcontent}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div className={style.butt}>
                <p>NGN{product.price.toFixed(2)}</p>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={style.pagination}>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handleClick(index + 1)}
            className={currentPage === index + 1 ? style.active : ''}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Card;
