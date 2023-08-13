import Resource from "../components/resource/Resource";
import Carousel from "../components/carousel/Carousel";
import ProductCard from "../components/cards/ProductCard";

const Home = () => {
  return (
    <>
      <Carousel />
      <div className="mx-150px md:mx-[200px] lg:mx-[400px]">
        <Resource />
        <div className="text-center my-6">
          <h2 className="text-3xl font-bold pb-4">Feature Products</h2>
          <hr className="w-[280px] border-b-2 border-stone-200 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="flex mt-6 justify-between gap-6">
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
    </>
  );
};

export default Home;
