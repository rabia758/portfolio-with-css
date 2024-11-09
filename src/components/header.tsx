"use client";
import Link from "next/link";
import { userinfo } from "@/constant/constant";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header ">
      <div>
        <h2 className="heading">{userinfo.name}</h2>
      </div>
      <div className='block md:hidden  '>
        <button
          className=' text-3xl focus:outline-none text-black'
          onClick={() => setIsOpen(!isOpen)} // Toggle the menu state
        >
          &#9776; {/* Hamburger icon */}
        </button>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:flex`}>
      <ul className="navitem md:flex" >
              <Link href={"/"}>
              <li className='text-xl sm:text-xl hover:text-gray-700'>Home</li>
              </Link>
              <Link href={"#About"}>
              <li className='text-xl sm:text-xl hover:text-gray-700 '>About</li>
              </Link>
              <Link href={"#Contact"}>
              <li className='text-xl sm:text-xl hover:text-gray-700'>Contact</li>
              </Link>
            </ul>
      </div>



    </header>
  )
}