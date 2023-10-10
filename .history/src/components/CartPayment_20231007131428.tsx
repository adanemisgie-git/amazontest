import React from 'react'
import {SiMediamarkt} from "react-icons/si"
import { useSelector } from 'react-redux'
import { stateProps, storeProduct } from '../../type'
import FormattedPrice from './FormattedPrice'
import { useEffect, useState } from "react";
//import { FaAmbulance } from 'react-icons/fa'

const CartPayment = () => {
    const {productData, userInfo} = useSelector((state:stateProps)=>state.next);
    const[totalAmount, setTotalAmount]= useState(0);
    useEffect(()=>{
        let amt=0;
        productData.map((item:storeProduct)=>{
            amt+=item.price * item.quantity;
            return
        })
        setTotalAmount(amt)
    }, [productData])
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <span className="bg-green-600 rounded-full p-1 h-6 w-6 text-sm text-white flex items-center justify-center mt-1  ">
          {" "}
          <SiMediamarkt />{" "}
        </span>
        <p className="text-xs">
          Your order qualifies for FREE shipping by choosing this option at
          checkout. see details....
        </p>
      </div>
      <p className="flex items-center justify-between px-2 font-semibold">
        Total:{" "}
        <span className="font-bold text-xl">
          {" "}
          <FormattedPrice amount={totalAmount} />{" "}
        </span>
      </p>
      {
        userInfo?
      }
       
    </div>
  );
}

export default CartPayment