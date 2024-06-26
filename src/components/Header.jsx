import React, { useState } from "react";
import { GiHamburger } from "react-icons/gi";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"
// import { connectionStatus } from "../features/cartSlice";


const Header = () => {

  const {cart} = useSelector((state)=>state.cart);
  const {connect} = useSelector((state)=>state.connect);
  console.log('header status',connect);

  return (
    <>
      <nav className="">
        <div className="main flex flex-row justify-between bg-[#74512D] sticky ">
          <div className="items mr-8 ml-8 flex flex-row justify-between  w-full items-center py-2">
            <div className="flex items-center gap-9">
            <Link to="/"><h1 className="text-[40px] font-bold text-[#281b0d]">
              <div className="items-center flex italic">Rcafe&nbsp;<GiHamburger /></div>
            </h1></Link>
            {connect ? <div className="bg-green-700  p-1 rounded-xl h-8">
              <p className="text-green-950 font-semibold">Online 🟢</p>
            </div>:<div className="bg-red-700  p-1 rounded-xl h-8">
              <p className="text-red-950 font-semibold">Offline 🔴</p>
            </div>}
            </div>
            
            <Link to="/cart">
              <button
                className="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
                aria-label="Cart"

              >
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <span class="absolute inset-0 object-right-top -mr-6">
                  <div class="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                    {cart.length}
                  </div>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
