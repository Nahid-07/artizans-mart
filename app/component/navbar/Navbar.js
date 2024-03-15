import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="bg-gray-900">
      <div className="flex justify-between text-white container mx-auto items-center py-4 px-4">
      <div>
        <GiHamburgerMenu className="text-2xl" />
      </div>
      <div>
        <Link href='' className="lg:text-3xl text-nowrap">Artizans' Mart</Link>
      </div>
      <div className="flex justify-between items-center lg:space-x-4">
        <div className="flex items-center space-x-3">
        <CgProfile className="text-2xl"/>
          <Link href='' className="text-nowrap hidden lg:block">Contact us</Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
