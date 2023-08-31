import { AiOutlineStar, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { ModalType, Product } from "../../utils/types/types";
import { useState } from "react";
import { useGetProductQuery } from "../../app/productSlice/productSlice";
import { useDispatch } from "react-redux";
import { addProduct } from "../../app/cartSlice/cartSlice";

const ProductDetailsModal = ({
  modal,
  setModal,
  productId,
  setProductId,
}: ModalType) => {
  const [like, setLike] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const { data, isLoading, isError, error } = useGetProductQuery(
    productId || ""
  );
  const dispatch = useDispatch();
  const decreseQuantity = () => {
    if (1 >= quantity) return;
    setQuantity((prevState) => prevState - 1);
  };
  const increseQuantity = (stock: number) => {
    if (stock <= quantity) return;
    setQuantity((prevState) => prevState + 1);
  };
  const maxRating = 5;
  const addToCart = (product: Product) => {
    const total = quantity * product?.price;
    const temProduct = {
      ...product,
      quantity,
      total,
    };
    dispatch(addProduct(temProduct));
  };

  let content: JSX.Element | null = null;
  if (isError) {
    content = <>Error: {error}</>;
  }
  if (!isError && isLoading) {
    content = <>...Loading</>;
  }
  if (data) {
    content = (
      <div className="fixed p-4 bg-white  top-[calc(22.33%-80px)] md:top-[calc(22%-110px)] lg:top-[calc(33.33%-110px)] z-[120] left-[calc(22%-80px)] md:left-[calc(22%-110px)] lg:left-[calc(40%-110px)]   m-4 mb-5  flex gap-4 flex-col md:flex-row overflow-scroll h-auto md:h-auto">
        <div className="w-full md:w-96 lg:w-[15vw] h-96 md:h-auto">
          <img className="w-full h-full" src={data?.product?.images[0].url} />
        </div>
        <div className=" md:max-w-[25vw]">
          <div className="absolute top-0 right-0">
            <RxCross2
              size={18}
              className="font-bold cursor-pointer hover:text-white hover:bg-orange-500"
              onClick={() => {
                if (setProductId) {
                  setProductId("");
                }
                setModal(!modal);
              }}
            />
          </div>
          <h2 className="mb-2 font-bold md:mb-5">{data?.product?.name}</h2>
          <span className="font-bold text-orange-500">
            {data?.product?.price}$
          </span>
          <div className="flex mt-2 md:mt-5">
            {Array.from({ length: maxRating }).map((_, i: number) => {
              return (
                <AiOutlineStar
                  key={i}
                  className={`${
                    i + 1 <= parseInt(data?.product?.ratings)
                      ? "text-orange-500"
                      : "text-gray-300"
                  }`}
                />
              );
            })}
          </div>
          <p className="mt-2 md:mt-5">{data?.product?.description}</p>
          <div className="flex mt-5">
            <button
              className="px-3 py-0.5 font-semibold text-white bg-orange-500 hover:bg-orange-600 w-8"
              onClick={decreseQuantity}
            >
              -
            </button>
            <span className="mx-auto">{quantity}</span>
            <button
              className="px-3 py-0.5 font-semibold text-white bg-orange-500 hover:bg-orange-600 w-8"
              onClick={() => increseQuantity(data?.product?.Stock)}
            >
              +
            </button>
          </div>
          <div className="flex items-center gap-4 mt-5">
            <button
              className="px-3 py-0.5 font-semibold text-white bg-orange-500 hover:bg-orange-600"
              onClick={() => addToCart(data?.product)}
            >
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
  }
  return content;
};

export default ProductDetailsModal;
