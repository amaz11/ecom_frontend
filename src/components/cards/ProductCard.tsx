import { AiOutlineStar, AiFillHeart, AiOutlineEye } from "react-icons/ai";
import { BiRecycle } from "react-icons/bi";
import { ModalType, Product } from "../../utils/types/types";
import { useGetProductsQuery } from "../../app/productSlice/productSlice";

const ProductCard = ({ modal, setModal, setProductId }: ModalType) => {
  const { data, isLoading, isError } = useGetProductsQuery();
  const maxRating = 5;
  const handeleProductID = (id: string) => {
    if (setProductId && id) {
      setProductId(id);
    }
  };
  let content: JSX.Element | null = null;
  if (isLoading) {
    content = <>Loading....</>;
  }
  if (!isLoading && isError) {
    content = <>Something wrong.</>;
  }
  if (data) {
    content = (
      <>
        {data?.products?.map((item: Product) => {
          return (
            <div key={item?._id}>
              <div className="h-60 ">
                <img
                  className="w-full h-full"
                  src={item?.images[0].url}
                  alt=""
                />
              </div>
              <div className="py-3 border-b-2 border-stone-200">
                <div className="group ">
                  <div className="group-hover:hidden">
                    <div className="flex items-center justify-between gap-4">
                      <span className="uppercase text-[12px] text-slate-500">
                        {item?.name}
                      </span>
                      <div className="flex">
                        {Array.from({ length: maxRating }).map(
                          (_, i: number) => {
                            return (
                              <AiOutlineStar
                                key={i}
                                className={`${
                                  i + 1 <= parseInt(item?.ratings)
                                    ? "text-orange-500"
                                    : "text-gray-300"
                                }`}
                              />
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="hidden group-hover:block">
                    <div className="flex items-center justify-between gap-4">
                      <button className="text-slate-500 hover:text-orange-500 text-[12px] font-bold">
                        ADD TO CART
                      </button>
                      <div className="flex gap-4">
                        <AiFillHeart className="cursor-pointer text-slate-400 hover:text-orange-500" />
                        <BiRecycle className="cursor-pointer text-slate-400 hover:text-orange-500" />
                        <AiOutlineEye
                          className="cursor-pointer text-slate-400 hover:text-orange-500"
                          onClick={() => {
                            handeleProductID(item._id);
                            setModal(!modal);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-center">
                <h4 className="text-lg font-semibold hover:text-orange-500">
                  Women Dress
                </h4>
                <h4 className="text-lg font-bold text-orange-500">$250.00</h4>
              </div>
            </div>
          );
        })}
      </>
    );
  }
  return content;
};

export default ProductCard;
