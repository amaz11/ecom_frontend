import { BsFillGiftFill } from "react-icons/bs";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { BiSolidTruck, BiRecycle } from "react-icons/bi";
import "./recource.css";
const Resource = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-4 gap-4 justify-center items-center border-b-2 border-stone-200">
      <div className="p-4  group">
        <div className="bg-[#EA9378] p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center group-hover:bg-white group-hover:border-2 group-hover:border-[#EA9378]">
          <BsFillGiftFill
            className="text-white group-hover:text-black"
            size={20}
          />
        </div>
        <h4 className="font-bold text-base  mt-4">Items in stock</h4>
        <span className="text-base">
          Aenean finibus arcu sit amet magna pulvinar, ac posuere.
        </span>
      </div>
      <div className="p-4  group">
        <div className="bg-[#EA9378] p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center group-hover:bg-white group-hover:border-2 group-hover:border-[#EA9378]">
          <MdOutlineMobileFriendly
            className="text-white group-hover:text-black"
            size={24}
          />
        </div>
        <h4 className="font-bold text-base  mt-4">Items in stock</h4>
        <span className="text-base">
          Aenean finibus arcu sit amet magna pulvinar, ac posuere.
        </span>
      </div>
      <div className="p-4  group">
        <div className="bg-[#EA9378] p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center group-hover:bg-white group-hover:border-2 group-hover:border-[#EA9378]">
          <BiSolidTruck
            className="text-white group-hover:text-black"
            size={24}
          />
        </div>
        <h4 className="font-bold text-base  mt-4">Items in stock</h4>
        <span className="text-base">
          Aenean finibus arcu sit amet magna pulvinar, ac posuere.
        </span>
      </div>
      <div className="p-4  group">
        <div className="bg-[#EA9378] p-2 rounded-full w-[50px] h-[50px]  flex justify-center items-center group-hover:bg-white group-hover:border-2 group-hover:border-[#EA9378]">
          <BiRecycle className="text-white group-hover:text-black" size={24} />
        </div>
        <h4 className="font-bold text-base mt-4 ">Items in stock</h4>
        <span className="text-base">
          Aenean finibus arcu sit amet magna pulvinar, ac posuere.
        </span>
      </div>
    </div>
  );
};

export default Resource;
