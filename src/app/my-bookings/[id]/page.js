import BookingUpdateForm from "@/app/checkout/[id]/components/BookingUpdateForm";

const UpdateBookingPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/my-bookings/${id}`);
  const data = await res.json();

  return (
    <div>
      <BookingUpdateForm data={data} />
    </div>
  );
};

export default UpdateBookingPage;
