import Table from "../components/Table/Table";
import Summary from "../components/Table/Summary";

const CartPage = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <Table />
        <Summary />
      </div>
    </div>
  );
};

// export { CartPage };
export default CartPage;
