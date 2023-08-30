import Resource from "../components/resource/Resource";
import Carousel from "../components/carousel/Carousel";
import ProductCard from "../components/cards/ProductCard";
import ProductDetailsModal from "../components/modal/ProductDetailsModal";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [productId, setProductId] = useState<string>("");
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modal]);
  return (
    <div className="">
      <Carousel />
      <div className="mx-[50px] md:mx-[150px] lg:mx-[250px]">
        <Resource />
        <div className="my-6 text-center">
          <h2 className="pb-4 text-3xl font-bold">Feature Products</h2>
          <hr className="w-[280px] border-b-2 border-stone-200 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          <ProductCard
            modal={modal}
            setModal={setModal}
            setProductId={setProductId}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-6 mt-6">
          <div className="w-full">
            <img
              className="w-full"
              src="https://demo.fieldthemes.com/seven/modules/fieldstaticblocks/images/8.jpg"
              alt="img0"
            />
          </div>
          <div className="w-full">
            <img
              className="w-full"
              src="https://demo.fieldthemes.com/seven/modules/fieldstaticblocks/images/9.jpg"
              alt="img1"
            />
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        {modal ? (
          <>
            <div
              className="fixed top-0 left-0 z-[100] w-[100%] h-[100%] bg-[rgba(0,0,0,.3)]"
              onClick={() => {
                setModal(!modal);
                setProductId("");
              }}
            ></div>
            <ProductDetailsModal
              modal={modal}
              setModal={setModal}
              productId={productId}
              setProductId={setProductId}
            />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
