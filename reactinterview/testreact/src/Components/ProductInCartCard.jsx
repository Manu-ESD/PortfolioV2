import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { updateAddtoCart } from "../features/cartSlice";

const ProductInCartCard = ({
  Imglink,
  Title,
  Discription,
  Rating,
  Price,
  Product,
}) => {
  function handleRemoveToCart(id) {
    dispatch(updateAddtoCart(addToCart.filter((item) => item.id !== id)));
  }

  const addToCart = useSelector((state) => state.addToCart.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="card flex flex-col justify-around items-center max-h-[500px] w-[200px]">
        <img
          src={Imglink}
          className="card-img-top h-[200px] w-[200px] mb-2"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title font-bold h-12 text-[14px] flex items-center justify-center">
            {Title}
          </h5>
          <p className="card-text text-left text-ellipsis max-w-full line-clamp-2 text-[12px]">
            {Discription}
          </p>
          <div className="w-[100%] flex justify-between my-3">
            <span className="card-text text-left font-medium text-[14px]">
              Rating:{Rating}
            </span>
            <span className="card-text text-left font-medium text-[14px]">
              Price:{Price}
            </span>
          </div>

      
        </div>
      </div>
    </div>
  );
};

export default ProductInCartCard;
