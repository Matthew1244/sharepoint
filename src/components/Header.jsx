import { AiOutlineDown } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GrMenu } from "react-icons/gr";
import { VscSearch } from "react-icons/vsc";
import Logo from "../assets/images/RE1Mu3b.png";

const Header = () => {
  return (
    <div className="">
      <div className="hidden md:flex py-3 md:px-16 justify-between">
        <div className="flex">
          <img src={Logo} alt="logo" className="-mt-1 w-36 h-10" />
          <div className="h-6 mt-1 border-l-2  mx-4 border-gray-400">{}</div>
          <a
            href="#"
            className="text-sm font-semibold hover:border-b-2 mr-7 border-black"
          >
            Microsoft 365
          </a>
          <a href="#" className="text-sm  hover:border-b-2 mr-7 border-black">
            SharePoint
          </a>
          <a
            href="#"
            className="flex text-sm hover:border-b-2 mr-7 border-black"
          >
            Plans and pricing
            <span className="mt-1 ml-1">
              <AiOutlineDown
                color="black"
                // paddingTop="5px"
                fontSize="1rem"
              />
            </span>
          </a>
          <a
            href="#"
            className="flex text-sm hover:border-b-2 mr-7 border-black"
          >
            Solutions
            <span className="mt-1 ml-1">
              <AiOutlineDown
                color="black"
                // paddingTop="5px"
                fontSize="1rem"
              />
            </span>
          </a>
          <a
            href="#"
            className="flex text-sm hover:border-b-2 mr-7 border-black"
          >
            Resources
            <span className="mt-1 ml-1">
              <AiOutlineDown
                color="black"
                // paddingTop="5px"
                fontSize="1rem"
              />
            </span>
          </a>
          <a href="#" className="text-sm bg-black px-6 py-2 text-white">
            Buy now
          </a>
        </div>
        <div className="flex">
          <a
            href="#"
            className="flex text-lg hover:border-b-2 mr-7 border-black"
          >
            All Microsoft
            <span className="mt-2 ml-1">
              <AiOutlineDown
                color="black"
                // paddingTop="5px"
                fontSize="1rem"
              />
            </span>
          </a>
          <a
            href="#"
            className="text-lg hover:border-b-2 mt-2 mr-7 border-black"
          >
            <VscSearch color="black" fontSize="1rem" />
          </a>
          <a href="#" className="text-lg mt-1 hover:border-b-2 border-black">
            <CgProfile color="gray" fontSize="2rem" />
          </a>
        </div>
      </div>
      <div className="flex justify-between py-3 md:hidden border-b border-gray-500">
        <div className="flex ml-2">
          <a href="#">
            <GrMenu
              color="black"
              // paddingTop="5px"
              fontSize="2rem"
            />
          </a>
          <a href="" className="ml-6 mt-1">
            <VscSearch color="black" fontSize="1.3rem" />
          </a>
        </div>
        <a href="#" className="">
          <img src={Logo} alt="logo" className="w-24 h-6" />
        </a>
        <a href="#" className="mr-2">
          <CgProfile color="gray" fontSize="1.8rem" />
        </a>
      </div>
      <a
        href="#"
        className="flex md:hidden ml-3 my-1 text-lg font-semibold mr-7 "
      >
        Microsoft 365
        <span className="mt-2 ml-1">
          <AiOutlineDown
            color="black"
            // paddingTop="5px"
            fontSize="1rem"
          />
        </span>
      </a>
    </div>
  );
};

export default Header;
