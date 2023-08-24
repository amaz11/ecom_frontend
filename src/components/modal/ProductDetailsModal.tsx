import { AiOutlineStar, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { ModalType } from "../../utils/types/types";
import { useState } from "react";

const ProductDetailsModal = ({ modal, setModal }: ModalType) => {
  const [like, setLike] = useState<boolean>(false);
  const maxRating = 5;
  const rating = 5;
  return (
    <div className="fixed p-4 bg-white top-0 md:top-[20%] z-[120] left-0 m-4 mb-5 md:left-1/4 flex gap-4 flex-col md:flex-row overflow-scroll h-[91vh] md:h-auto">
      <div className="md:w-auto lg:w-[15vw]">
        <img
          className="w-full h-full"
          src="https://demo.fieldthemes.com/seven/home2/94-home_default/watch-for-men.jpg"
          alt="productimg"
        />
      </div>
      <div className="max-w-[500px] md:w-[25vw]">
        <div className="absolute top-0 right-0">
          <RxCross2
            size={18}
            className="font-bold cursor-pointer hover:text-white hover:bg-orange-500"
            onClick={() => {
              setModal(!modal);
            }}
          />
        </div>
        <h2 className="mb-2 font-bold md:mb-5">INDIGO LOGO CREWNECK</h2>
        <span className="font-bold text-orange-500">$250.00</span>
        <div className="flex mt-2 md:mt-5">
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
        <p className="mt-2 md:mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quod
          temporibus ratione, tenetur adipisci consequatur quia ipsam vero
          voluptas? Est, vero repellat corrupti pariatur nulla dolorum sapiente,
          minus doloribus dolorem esse ab, nam tempora sint ipsum atque
          inventore voluptatibus? Perspiciatis, maiores.
        </p>
        <div className="flex items-center gap-4 mt-5">
          <button className="px-3 py-0.5 font-semibold text-white bg-orange-500 hover:bg-orange-600">
            Add to Cart
          </button>
          {like ? (
            <AiFillHeart
              className="text-orange-500 cursor-pointer"
              onClick={() => {
                setLike(!like);
              }}
              size={28}
            />
          ) : (
            <AiOutlineHeart
              className="text-orange-500 cursor-pointer"
              onClick={() => {
                setLike(!like);
              }}
              size={28}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
