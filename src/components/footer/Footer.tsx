import React from 'react'
import Image from 'next/image'
import logo from '../../images/headerImages/logo.png'

import { PiGlobeThin } from "react-icons/pi";
const Footer = () => {
  return (
    <div className="w-full h-20 bg-amazon_light flex items-center justify-center gap-4">
      <Image className="w-24" src={logo} alt="logoImg" />

      <div className="flex items-center justify-center text-white border border-gray   -mt-4 px-2 gap-2">
        <PiGlobeThin className=" " />
        <p className="text-l">
          {" "}
          <a
            href="https://www.amazon.com/customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=footer_lang"
            target="_blank"
          >
            English
          </a>
        </p>
      </div>
      <p className="text-l text-white -mt-4 border border-gray px-3">
        {" "}
        <a
          href="https://www.amazon.com/customer-preferences/edit?ie=UTF8&ref_=footer_cop&preferencesReturnUrl=%2F"
          target="_blank"
        >
          USD-U.S.Dollar
        </a>
      </p>
      <span className="text-l text-white -mt-4 border border-gray px-3 ">
        {" "}
        <a
          href="https://www.amazon.com/customer-preferences/country?ie=UTF8&preferencesReturnUrl=%2F&ref_=footer_icp_cp"
          target="_blank"
        >
          United States
        </a>
      </span>
      <p className='text-white -mt-3' >By @adane misgie</p>
    </div>
  );
}

export default Footer;