import { AiOutlineStar, AiFillHeart, AiOutlineEye } from "react-icons/ai";
import { BiRecycle } from "react-icons/bi";

const ProductCard = () => {
  const maxRating = 5;
  const rating = 5;
  return (
    <div>
      <div>
        <img
          src="https://demo.fieldthemes.com/seven/home2/94-home_default/watch-for-men.jpg"
          alt=""
        />
      </div>
      <div className="border-b-2 border-stone-200 py-3">
        <div className="group ">
          <div className="group-hover:hidden">
            <div className="flex gap-4 items-center  justify-between">
              <span className="uppercase text-[12px] text-slate-500">
                Fragrances
              </span>
              <div className="flex">
                {Array.from({ length: maxRating }).map((_, i: number) => {
                  return (
                    <AiOutlineStar
                      key={i}
                      className={`${
                        i + 1 <= rating ? "text-orange-500" : "text-gray-300"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="hidden group-hover:block">
            <div className="flex gap-4 items-center  justify-between">
              <button className="text-slate-500 hover:text-orange-500 text-[12px] font-bold">
                ADD TO CART
              </button>
              <div className="flex gap-4">
                <AiFillHeart className="text-slate-400 cursor-pointer hover:text-orange-500" />
                <BiRecycle className="text-slate-400 cursor-pointer hover:text-orange-500" />
                <AiOutlineEye className="text-slate-400 cursor-pointer hover:text-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center pt-2">
        <h4 className="text-lg font-semibold hover:text-orange-500">
          Women Dress
        </h4>
        <h4 className="text-lg font-bold text-orange-500">$250.00</h4>
      </div>
    </div>
  );
};

export default ProductCard;
