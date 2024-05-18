import React, { useState,useEffect } from "react";
import cardData from "../cardData";
import { FaRegStar } from "react-icons/fa";
import { addToCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { connectionStatus } from "../features/connectionSlice";


const Home = () => {
  console.log(cardData);
  const[card, setCard] = useState(cardData);
  const dispatch=useDispatch();
  const[onlineStatus,setOnlineStatus] = useState(true);

  useEffect(()=>{
    window.addEventListener('online', function(e) {
        console.log('And we\'re back :).');
        setOnlineStatus(true);
    }, false);
                
    window.addEventListener('offline', function(e) {
        console.log('Connection is down.');
        setOnlineStatus(false);
    }, false);
},[])

  const addItemsToCart=(data)=>{
    console.log(data);
    dispatch(addToCart(data));
    toast.success("Item added to Cart");
  }

  dispatch(connectionStatus(onlineStatus));
  
//  console.log(status);
  if(!onlineStatus){

    return (
      <div className='modal w-full h-[90vh] flex items-center justify-center bg-[#AF8F6F]'>
        <div className='w-[500px] h-[300px]  flex items-center justify-center gap-10'>
          
            <img className="rounded-full" src="https://img.freepik.com/premium-photo/adorable-dog-character_398492-14968.jpg?size=626&ext=jpg" alt="" />
            <h1 className="text-[rgb(116,81,45)] text-[60px] font-bold">You are Offline ☹️</h1>
        
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="main   bg-[#AF8F6F]">
        <h1 className="p-5 text-xl  font-semibold">
          Top rated Restaurants near you :
        </h1>
        <div className="container_card flex gap-2 flex-wrap justify-center items-center">
          {card.map((data, index) => {
            return (
              <div className="card  bg-[#74512D] rounded-md mx-5 mb-10 w-[300px] h-[450px] transform transition duration-500 hover:scale-90 ">
                <div className="Header flex justify-between p-2">
                  <img className="w-9" src={data.delimg} alt="delivery" />
                  <div className="starRating bg-green-800 flex items-center justify-center rounded-md px-1">
                    <p className="  px-1 text-white font-medium">{data.rating} </p>
                    <span className="text-white text-sm">
                      <FaRegStar />
                    </span>
                  </div>
                </div>
                <div className="main_container flex flex-col justify-center items-center">
                  <img
                    className=" h-[280px] w-[280px] rounded-full"
                    src={data.imgdata}
                    alt="delivery"
                  />
                  <h3 className="uppercase font-serif text-xl mt-3 text-[#23180b] font-semibold" >{data.dish}</h3>
                  <p className="italic">{data.address}</p>
                  <h1 className="text-3xl font-bold">{`₹${data.price}`}</h1>
                  <button className="border-2 bg-red-500 text-white rounded-lg py-1 px-2 mt-3 mb-5"
                  onClick={()=>addItemsToCart(data)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
