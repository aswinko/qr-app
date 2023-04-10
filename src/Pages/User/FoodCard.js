import React from 'react'
import { useState } from 'react';



const FoodCard = () => {
  const [minus, setMinus] = useState(0);

  const minusCart = () => {
    if (minus <= 0) setMinus(minus);
    else {
      setMinus(minus - 1);
    }
  };
  const plusCart = () => {
    setMinus(minus + 1);
  };
  return (
    <div className="container mx-auto px-24">
      <div className="rounded h-44 flex justify-center text-center text-gray-600 border border-0 p-2 mt-3 shadow-lg bg-white">
        <img
          className="rounded-xl w-40 object-fill"
          src="https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w-600"
          alt="/"
        />
        <div className="flex flex-col pl-6">
          <h2 className="text-left font-bold mb-2">Food item1</h2>
          <p className="w-11/12 text-justify text-sm leading-tight">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries{" "}
          </p>

          <div className=" p-4 text-black flex justify-end">
            <div className="bg-white rounded-xl p-2  border border-1">
              <label>Qty: </label>
              <button
                className="mx-2 px-2  font-bold bg-green-400 text-white  "
                onClick={() => minusCart()}
              >
                -
              </button>
              <span className="font-bold ">{minus}</span>
              <button
                className="mx-2 px-2 font-bold bg-green-400 text-white "
                onClick={() => plusCart()}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;