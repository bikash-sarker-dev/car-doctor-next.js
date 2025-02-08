import CheckoutForm from "./components/CheckoutForm";

const CheckOutPage = async ({ params }) => {
  const { id } = await params;
  console.log("checkout", id);
  const response = await fetch(`http://localhost:3000/api/service/${id}`);
  const data = await response.json();

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-20">
        Service Name: {data.title}
      </h2>
      <CheckoutForm data={data} />
    </div>
  );
};

export default CheckOutPage;
