import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { useSelector } from "react-redux";
import {
  deleteAllItems,
  deleteSingleItem,
  addToCart,
  deleteIndividualItem
} from "../features/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [price,setPrice] = useState(0);
  const [quantity,setQuantity] = useState(0);

  const emptyCart = (payload) => {
    dispatch(deleteAllItems(payload));
  };
  const deleteOneItem = (payload) => {
    dispatch(deleteSingleItem(payload));
  };

  const increaseQnty = (payload) => {
    dispatch(addToCart(payload));
  };
  
  const removeFromTable=(payload)=>{
    dispatch(deleteIndividualItem(payload))
  }

  const totalprice=()=>{
    let finalPrice=0;
    cart.map(item=>{
        finalPrice+=item.price * item.qnty;
    })
    setPrice(finalPrice);
  }
  const totalquantity=()=>{
    let finalQuanity=0;
    cart.map(item=>{
        finalQuanity+=item.qnty;
    })
    setQuantity(finalQuanity);
  }

  useEffect(()=>{
    totalprice();
    totalquantity();
  },[totalprice,totalquantity])

  return (
    <>
      <div className="main">
        <div className="main_container bg-[#AF8F6F] w-full h-[120vh] flex pt-24 justify-center">
          <div className="cart min-w-[60%] mb-32">
            <div className="">
              <div className="cart_header bg-[#74512D]  items-center rounded-t-xl">
                <div className="header_main flex justify-between items-center py-3 px-3">
                  <h1 className="text-[#090602] text-xl font-semibold">
                    Cart Calculation({cart.length < 1 ? "":cart.length})
                  </h1>
                  {cart.length > 0 ? (
                    <button
                      className="bg-red-500 flex items-center border-2  text-white rounded-lg py-1 px-2"
                      onClick={emptyCart}
                    >
                      <MdDeleteOutline />
                      <h1>Empty Cart</h1>
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="cart_body pt-2">
                {cart.length === 0 ? (
                  <>
                    <div className=" p-10 bg-[#F8F4E1] flex items-center justify-center gap-2 rounded-b-md">
                      <div className="flex flex-col items-center text-[#74512D]">
                        <span className="text-3xl">
                          <FaShoppingCart />
                        </span>
                        <h1>Your cart is empty</h1>
                      </div>
                    </div>
                  </>
                ) : (
                    <>
                  <table className="w-full align-middle text-center ">
                    <thead>
                      <tr>
                        <th>Action</th>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th className="text-right">
                          <span id="amount" className="amount">
                            Total Amount
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="w-full">
                      {cart.map((data, index) => {
                        return (
                          <>
                            <tr className="">
                              <td className="text-2xl text-red-800">
                                <button onClick={() => removeFromTable(data.id)}>
                                  <MdDeleteOutline />
                                </button>
                              </td>
                              <td>
                                <div className="flex w-full justify-center">
                                  <img
                                    className="w-[40px] h-[40px] rounded-full"
                                    src={data.imgdata}
                                    alt=""
                                  />
                                </div>
                              </td>
                              <td>
                                <p className="italic">{data.dish} </p>
                              </td>
                              <td>{`₹${data.price}`}</td>
                              <td>
                                <div className="flex justify-center w-full">
                                  <button
                                    className="text-2xl "
                                    onClick={data.qnty >1 ?()=>deleteOneItem(data) :()=>removeFromTable(data.id)}
                                  >
                                    <CiSquareMinus />
                                  </button>
                                  <input
                                    type="text"
                                    className="bg-[#dbd5b7] border-none rounded-md text-center w-12"
                                    value={data.qnty}
                                  />
                                  <button
                                    className="text-2xl"
                                    onClick={() => increaseQnty(data)}
                                  >
                                    <CiSquarePlus />
                                  </button>
                                </div>
                              </td>
                              <td className="text-right ">{`₹${
                                data.price * data.qnty
                              }`}</td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                    {/* <tfoot>
                        <tr className="w-full">
                            <th>&nbsp;</th>
                            <th col-span-3>&nbsp;</th>
                            <th>Items In Cart <span className='ml-2 mr-2'>:</span><span className='text-danger'>3</span></th>
                            <th className='text-right'>Total Price<span className='ml-2 mr-2'>:</span><span className='text-danger'>₹400</span></th>
                        </tr>
                    </tfoot> */}
                  </table>
                  <footer className="w-full">
                    <div className="h-[1px] bg-[#281b0d] mt-3"></div>
                    <div className="flex justify-between text-[#090602] text-l font-semibold mt-3">
                        <h1>{`Items in cart :${quantity}`}</h1>
                        <h1>{`Payable Amount :₹${price}`} </h1>
                    </div>
                  </footer>
                    </>
                  
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
