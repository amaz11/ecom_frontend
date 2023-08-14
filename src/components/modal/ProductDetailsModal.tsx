import { AiOutlineStar } from "react-icons/ai";

const ProductDetailsModal = () => {
  const maxRating = 5;
  const rating = 5;
  return (
    <div className="fixed p-3 bg-white top-2/4 z-[120] left-2/4">
      <div></div>
      <div>
        <h2>INDIGO LOGO CREWNECK</h2>
        <span>$250.00</span>
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
  );
};

export default ProductDetailsModal;
