import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import logo from "../assets/seven2-logo-15153843922.jpg";
import person from "../assets/personProfile.png";

import { Link, useNavigate } from "react-router-dom";
import { LoginRequest } from "../utils/types/types";
import { useLoginMutation } from "../app/authApi/authApi";
import { useDispatch } from "react-redux";
import { setToken } from "../app/authSlice/authSlice";
const Authentication: React.FC = () => {
  const [passShow, setPassShow] = useState<boolean>(false);
  const [input, setInput] = useState<LoginRequest>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  // const { token, user } = useSelector(clgToken);
  const dispatch = useDispatch();

  const isLogin = window.location.pathname === "/authentication/login";
  const handelInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLogin) {
      const res = await login(input);
      if ("data" in res) {
        dispatch(setToken(res.data));
        // const user = res.data.access_token.split(".")[1];
        // console.log(JSON.parse(atob(user)));
        localStorage.setItem("accessToken", res.data.access_token);
        localStorage.setItem("currentUser", JSON.stringify(res.data.user));
        navigate("/");
      }
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center min-h-screen py-6 mx-3 bg-gray-100 sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 transform -skew-y-6 shadow-lg bg-gradient-to-r from-slate-200 to-orange-500 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md">
              <div className="flex justify-center mx-auto">
                <img src={logo} alt="" />
              </div>
              <form action="" onSubmit={submitHandler}>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                    {isLogin ? null : (
                      <>
                        <div
                          className={`w-[150px] h-[150px] border-2 border-orange-500 rounded-full mx-auto  bg-bottom bg-cover relative`}
                          style={{
                            backgroundImage: `url(${person})`,
                            backgroundRepeat: "no-repeat",
                            objectFit: "cover",
                            backgroundPosition: "0px 5px",
                          }}
                        >
                          <input
                            type="file"
                            className="absolute top-0 left-0 z-20 w-full h-full rounded-full opacity-0 cursor-pointer"
                            name=""
                          />
                          <div className="absolute bottom-0 right-0 z-10 w-12 h-12 p-3 overflow-hidden bg-white border border-orange-500 rounded-full cursor-pointer">
                            <img
                              className="w-full"
                              src="https://www.citypng.com/public/uploads/preview/hd-camera-orange-icon-png-116395931094fajokdwqu.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="relative">
                          <input
                            autoComplete="off"
                            name="name"
                            type="text"
                            className="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:borer-rose-600"
                            placeholder="Email address"
                          />
                          <label
                            htmlFor="email"
                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                          >
                            Your Name
                          </label>
                        </div>
                      </>
                    )}
                    <div className="relative">
                      <input
                        autoComplete="off"
                        name="email"
                        value={input.email}
                        onChange={handelInput}
                        type="email"
                        className="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:borer-rose-600"
                        placeholder="Email address"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Email Address
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        name="password"
                        value={input.password}
                        onChange={handelInput}
                        type={`${passShow ? "text" : "password"}`}
                        className="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:borer-rose-600"
                        placeholder="Password"
                      />
                      <label
                        htmlFor="password"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Password
                      </label>
                      {passShow ? (
                        <AiOutlineEyeInvisible
                          onClick={() => setPassShow(!passShow)}
                          className="absolute right-0 top-4"
                        />
                      ) : (
                        <AiOutlineEye
                          onClick={() => setPassShow(!passShow)}
                          className="absolute right-0 top-4"
                        />
                      )}
                    </div>
                    {isLogin ? null : (
                      <div className="relative">
                        <input
                          autoComplete="off"
                          name="conpassword"
                          type={`${passShow ? "text" : "password"}`}
                          className="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:borer-rose-600"
                          placeholder="Confirm Password"
                        />
                        <label
                          htmlFor="password"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Confirm Password
                        </label>
                        {passShow ? (
                          <AiOutlineEyeInvisible
                            onClick={() => setPassShow(!passShow)}
                            className="absolute right-0 top-4"
                          />
                        ) : (
                          <AiOutlineEye
                            onClick={() => setPassShow(!passShow)}
                            className="absolute right-0 top-4"
                          />
                        )}
                      </div>
                    )}

                    <div className="relative">
                      <button
                        disabled={isLoading}
                        className="px-3 py-0.5 font-semibold text-white bg-orange-500 hover:bg-black"
                      >
                        {isLogin ? "Log in" : "Register Now!"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div>
              {isLogin ? (
                <Link
                  to="/authentication/registration"
                  className="hover:text-orange-500"
                >
                  Don't have a account? Click here!
                </Link>
              ) : (
                <Link
                  to="/authentication/login"
                  className="hover:text-orange-500"
                >
                  Already Have a account! Click here.
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authentication;
