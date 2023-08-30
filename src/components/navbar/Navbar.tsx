import logo from "../../assets/seven2-logo-15153843922.jpg";
import img1 from "../../assets/1.jpg";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { currentUser } from "../../utils/auth";

const Navbar = () => {
  const user = currentUser();
  return (
    <div className="flex justify-between gap-4 px-3 md:px-16 py-4 items-center fixed z-[50] bg-white w-full top-0 border-b-2">
      <div className="flex items-center justify-between gap-12">
        <div className="w-28 md:w-full lg:w-32">
          <img className="w-full" src={logo} alt="logo" />
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center justify-around px-3 lg:gap-2 xl:gap-14">
            <li>
              <Link
                className="p-2 font-semibold cursor-pointer hover:text-orange-500 hover:border-b-2 hover:border-b-orange-500"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="group">
              <Link className="relative cursor-pointer " to="/men">
                <span className="flex items-center p-3 font-semibold hover:text-orange-500 hover:border-b-2 hover:border-b-orange-500">
                  Men <BiChevronDown size={20} />
                </span>
                <div className="absolute -top-96  group-hover:z-20 group-hover:top-12 left-0 shadow-sm border-t-2 border-t-orange-500 group-hover:delay-[400ms] group-hover:transition-all">
                  <Dropdown>
                    <div className="grid justify-center grid-cols-3 gap-x-20 gap-y-4">
                      <div>
                        <h5 className="font-semibold hover:text-orange-500">
                          Gift for Men
                        </h5>
                        <ul>
                          <li>
                            <Link
                              className="hover:text-orange-500 hover:pl-[2px] hover:delay-100 hover:transition-all"
                              to="/"
                            >
                              Object
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover:text-orange-500 hover:pl-[2px]  hover:delay-100 hover:transition-all"
                              to="/"
                            >
                              TableTop
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold hover:text-orange-500">
                          Gift for Men
                        </h5>
                        <ul>
                          <li>
                            <Link
                              className="hover:text-orange-500 hover:pl-[2px] hover:delay-100 hover:transition-all"
                              to="/"
                            >
                              Object
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover:text-orange-500 hover:pl-[2px]  hover:delay-100 hover:transition-all"
                              to="/"
                            >
                              TableTop
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold hover:text-orange-500">
                          Gift for Men
                        </h5>
                        <ul>
                          <li>
                            <Link
                              className="hover:text-orange-500 hover:pl-[2px] hover:delay-100 hover:transition-all"
                              to="/"
                            >
                              Object
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover:text-orange-500 hover:pl-[2px]  hover:delay-100 hover:transition-all"
                              to="/"
                            >
                              TableTop
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold hover:text-orange-500">
                          Gift for Men
                        </h5>
                        <ul>
                          <li>
                            <Link
                              className="hover:text-orange-500 hover:pl-[2px] hover:delay-100 hover:transition-all"
                              to="/"
                            >
                              Object
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover:text-orange-500 hover:pl-[2px]  hover:delay-100 hover:transition-all"
                              to="/"
                            >
                              TableTop
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold hover:text-orange-500">
                          Gift for Men
                        </h5>
                        <ul>
                          <li>
                            <Link
                              className="hover:text-orange-500 hover:pl-[2px] hover:delay-100 hover:transition-all"
                              to="/"
                            >
                              Object
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover:text-orange-500 hover:pl-[2px]  hover:delay-100 hover:transition-all"
                              to="/"
                            >
                              TableTop
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold hover:text-orange-500">
                          Gift for Men
                        </h5>
                        <ul>
                          <li>
                            <Link
                              className="hover:text-orange-500 hover:pl-[2px] hover:delay-100 hover:transition-all"
                              to="/"
                            >
                              Object
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover:text-orange-500 hover:pl-[2px]  hover:delay-100 hover:transition-all"
                              to="/"
                            >
                              TableTop
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="relative mt-4 overflow-hidden bg-no-repeat bg-cover">
                      <img src={img1} alt="" />
                      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </div>
                  </Dropdown>
                </div>
              </Link>
            </li>
            <li className="group">
              <Link className="relative cursor-pointer " to="/women">
                <span className="flex items-center p-3 font-semibold hover:text-orange-500 hover:border-b-2 hover:border-b-orange-500">
                  Women
                  <BiChevronDown size={20} />
                </span>
                <div className="absolute -top-96 group-hover:z-20 group-hover:top-12 left-0 shadow-sm border-t-2 border-t-orange-500 group-hover:delay-[400ms] group-hover:transition-all">
                  <Dropdown>
                    <div className="grid justify-center grid-cols-3 gap-x-20 gap-y-4">
                      <div>
                        <h5 className="font-semibold hover:text-orange-500">
                          Gift for Men
                        </h5>
                        <ul>
                          <li>
                            <Link
                              className="hover:text-orange-500 hover:pl-[2px] hover:delay-100 hover:transition-all"
                              to="/"
                            >
                              Object
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover:text-orange-500 hover:pl-[2px]  hover:delay-100 hover:transition-all"
                              to="/"
                            >
                              TableTop
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold hover:text-orange-500">
                          Gift for Men
                        </h5>
                        <ul>
                          <li>
                            <Link
                              className="hover:text-orange-500 hover:pl-[2px] hover:delay-100 hover:transition-all"
                              to="/"
                            >
                              Object
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover:text-orange-500 hover:pl-[2px]  hover:delay-100 hover:transition-all"
                              to="/"
                            >
                              TableTop
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold hover:text-orange-500">
                          Gift for Men
                        </h5>
                        <ul>
                          <li>
                            <Link
                              className="hover:text-orange-500 hover:pl-[2px] hover:delay-100 hover:transition-all"
                              to="/"
                            >
                              Object
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover:text-orange-500 hover:pl-[2px]  hover:delay-100 hover:transition-all"
                              to="/"
                            >
                              TableTop
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold hover:text-orange-500">
                          Gift for Men
                        </h5>
                        <ul>
                          <li>
                            <Link
                              className="hover:text-orange-500 hover:pl-[2px] hover:delay-100 hover:transition-all"
                              to="/"
                            >
                              Object
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover:text-orange-500 hover:pl-[2px]  hover:delay-100 hover:transition-all"
                              to="/"
                            >
                              TableTop
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold hover:text-orange-500">
                          Gift for Men
                        </h5>
                        <ul>
                          <li>
                            <Link
                              className="hover:text-orange-500 hover:pl-[2px] hover:delay-100 hover:transition-all"
                              to="/"
                            >
                              Object
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover:text-orange-500 hover:pl-[2px]  hover:delay-100 hover:transition-all"
                              to="/"
                            >
                              TableTop
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold hover:text-orange-500">
                          Gift for Men
                        </h5>
                        <ul>
                          <li>
                            <Link
                              className="hover:text-orange-500 hover:pl-[2px] hover:delay-100 hover:transition-all"
                              to="/"
                            >
                              Object
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="hover:text-orange-500 hover:pl-[2px]  hover:delay-100 hover:transition-all"
                              to="/"
                            >
                              TableTop
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="relative mt-4 overflow-hidden bg-no-repeat bg-cover">
                      <img src={img1} alt="" />
                      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </div>
                  </Dropdown>
                </div>
              </Link>
            </li>
            <li>
              <Link
                className="p-2 font-semibold cursor-pointer hover:text-orange-500 hover:border-b-2 hover:border-b-orange-500"
                to="/shop"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                className="p-2 font-semibold cursor-pointer hover:text-orange-500 hover:border-b-2 hover:border-b-orange-500"
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="p-2 font-semibold cursor-pointer hover:text-orange-500 hover:border-b-2 hover:border-b-orange-500"
                to="/contact-us"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                className="p-2 font-semibold cursor-pointer hover:text-orange-500 hover:border-b-2 hover:border-b-orange-500"
                to="/about-us"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-5 ">
        <div className="hidden md:block">
          <AiOutlineSearch size={24} />
        </div>
        <div className="relative">
          <AiOutlineShoppingCart size={24} />
          <span className="absolute font-semibold text-orange-500 -top-4 -right-2">
            0
          </span>
        </div>
        {user !== null ? (
          <div className="p-2 bg-gray-100 rounded-full">
            <BsPerson size={24} />
          </div>
        ) : null}

        <div className="block lg:hidden">
          <FaBars size={24} />
        </div>

        {user !== null ? null : (
          <div className="hidden lg:block">
            <Link
              to="/authentication/login"
              className="after:content-['/'] after:font-semibold after:text-xl after:px-1 after:hover:text-black hover:text-orange-500 cursor-pointer font-semibold"
            >
              Login
            </Link>
            <Link
              to={"/authentication/registration"}
              className="font-semibold cursor-pointer hover:text-orange-500"
            >
              Registration
            </Link>
          </div>
        )}

        {/* <div className="hidden lg:block">
          <FaBars size={24} />
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
