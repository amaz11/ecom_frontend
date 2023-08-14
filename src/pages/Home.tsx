import Resource from "../components/resource/Resource";
import Carousel from "../components/carousel/Carousel";
import ProductCard from "../components/cards/ProductCard";
import ProductDetailsModal from "../components/modal/ProductDetailsModal";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [modal, setModal] = useState(false);
  // type modleType = {
  //   modal: boolean;
  //   setModal: Dispatch<SetStateAction<boolean>>;
  // };
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    }
    return () => (document.body.style.overflow = "unset");
  }, [modal]);
  return (
    <div className="overflow-hidden">
      <Carousel />
      <div className="mx-150px md:mx-[200px] lg:mx-[400px]">
        <Resource />
        <div className="my-6 text-center">
          <h2 className="pb-4 text-3xl font-bold">Feature Products</h2>
          <hr className="w-[280px] border-b-2 border-stone-200 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          <ProductCard modal={modal} setModal={setModal} />
          <ProductCard modal={modal} setModal={setModal} />
          <ProductCard modal={modal} setModal={setModal} />
          <ProductCard modal={modal} setModal={setModal} />
          <ProductCard modal={modal} setModal={setModal} />
          <ProductCard modal={modal} setModal={setModal} />
          <ProductCard modal={modal} setModal={setModal} />
          <ProductCard modal={modal} setModal={setModal} />
        </div>
        <div className="flex justify-between gap-6 mt-6">
          <div>
            <img
              // className="hover:border-4 hover:border-white"
              src="https://demo.fieldthemes.com/seven/modules/fieldstaticblocks/images/8.jpg"
              alt="img0"
            />
          </div>
          <div>
            <img
              // className="hover:border-4 hover:border-white"
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
              }}
            ></div>
            <ProductDetailsModal />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
