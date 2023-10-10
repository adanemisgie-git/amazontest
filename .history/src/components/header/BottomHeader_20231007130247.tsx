// import React from 'react'
import { LuMenu } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";


export const BottomHeader = () => {
  const dispatch =useDispatch()
  const {  userInfo } = useSelector((state: stateProps) => state.next
  );
  
  return (
    <div className="w-full h-10 bg-amazon_light text-sm text-white px-4 flex items-center ">
      <p className="flex items-center gap-1 h-8 border border-transparent hover:border-white cursor-pointer duration-300 px-2">
        <LuMenu className="text-xl" />
        All{" "}
      </p>
      <p className="hidden md:inline-flex items-center h-8 border border-transparent hover:border-white cursor-pointer duration-300 px-2">
        Todays Deals
      </p>
      <p className="hidden md:inline-flex items-center h-8 border border-transparent hover:border-white cursor-pointer duration-300 px-2">
        Customer Service
      </p>
      <p className="hidden md:inline-flex items-center h-8 border border-transparent hover:border-white cursor-pointer duration-300 px-2">
        Registry
      </p>
      <p className="hidden md:inline-flex items-center h-8 border border-transparent hover:border-white cursor-pointer duration-300 px-2">
        Gift Cards
      </p>
      <p className="hidden md:inline-flex items-center h-8 border border-transparent hover:border-white cursor-pointer duration-300 px-2">
        Sell
      </p>
      <button
        className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-red-600 hover:text-red-400 text-amazon_yellow cursor-pointer duration-300"
      >
        Sign Out
      </button>
    </div>
  );
}
export default BottomHeader;