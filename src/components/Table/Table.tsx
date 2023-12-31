import React from "react";
import {
  cartRemove,
  cartState,
  decreseQuantity,
  increseQuantity,
} from "../../app/cartSlice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Table = () => {
  const { cart } = useSelector(cartState);
  const dispatch = useDispatch();

  return (
    <div className="w-3/4 bg-white px-10 py-10">
      <div className="flex justify-between border-b pb-8">
        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
        <h2 className="font-semibold text-2xl">{cart.length} Items</h2>
      </div>
      <div className="flex mt-10 mb-5">
        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
          Product Details
        </h3>
        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
          Quantity
        </h3>
        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
          Price
        </h3>
        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
          Total
        </h3>
      </div>
      {cart?.map((item) => (
        <div
          className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
          key={item._id}
        >
          <div className="flex w-2/5">
            {" "}
            {/* product */}
            <div className="w-20">
              <img className="h-24" src={item.images[0].url} alt="" />
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-sm">{item.name}</span>
              <span className="text-red-500 text-xs">{item.category}</span>
              <span
                onClick={() => dispatch(cartRemove(item._id))}
                className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
              >
                Remove
              </span>
            </div>
          </div>
          <div className="flex justify-center w-1/5">
            <svg
              className="fill-current text-gray-600 w-3 "
              viewBox="0 0 448 512"
              onClick={() => dispatch(decreseQuantity(item))}
            >
              <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>
            <span className="mx-2 border text-center w-8">{item.quantity}</span>
            <svg
              className="fill-current text-gray-600 w-3 "
              viewBox="0 0 448 512"
              onClick={() => dispatch(increseQuantity(item))}
            >
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>
          </div>
          <span className="text-center w-1/5 font-semibold text-sm">
            ${item.price}
          </span>
          <span className="text-center w-1/5 font-semibold text-sm">
            ${item.total}
          </span>
        </div>
      ))}

      <Link to="/" className="flex font-semibold text-indigo-600 text-sm mt-10">
        <svg
          className="fill-current mr-2 text-indigo-600 w-4"
          viewBox="0 0 448 512"
        >
          <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
        </svg>
        Continue Shopping
      </Link>
    </div>
  );
};

export default Table;
