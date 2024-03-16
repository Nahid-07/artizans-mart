"use client";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gray-900">
      <div className="flex justify-between text-white container mx-auto items-center py-4 px-4">
        <button onClick={() => setOpen((prev) => !prev)} className="z-50">
          {
            open ?  <RxCross2 className="text-2xl" />:<GiHamburgerMenu className="text-2xl" />
          }
        </button>
        {open && <Sidebar></Sidebar>}
        <div>
          <Link href="" className="lg:text-3xl text-nowrap">
            Artizans' Mart
          </Link>
        </div>
        <div className="flex justify-between items-center lg:space-x-4">
          <div className="flex items-center space-x-3">
            <CgProfile className="text-2xl" />
            <Link href="" className="text-nowrap hidden lg:block">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
