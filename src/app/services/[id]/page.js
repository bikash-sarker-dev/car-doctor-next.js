import HeroPageSection from "@/components/pageHero/HeroPageSection";
import Image from "next/image";
import Link from "next/link";

const ServiceDetailsPage = async ({ params }) => {
  const id = await params.id;
  // const query = { _id: new ObjectId(id) };
  // const data = await dbConnect(collectionAllName.serviceCollection).findOne(
  //   query

  const res = await fetch(`http://localhost:3000/api/service/${id}`);
  const data = await res.json();

  return (
    <div className="max-w-6xl mx-auto">
      <HeroPageSection />
      <div className="grid grid-cols-12 mt-10">
        <div className="col-span-9">
          <Image
            width={500}
            height={300}
            src={data.img}
            alt={"banner"}
            unoptimized
          />
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
        <div className="col-span-3 bg-slate-200 min-h-screen p-7">
          <Link
            className="btn btn-info btn-block"
            href={`/checkout/${data._id}`}
          >
            CheckOut
          </Link>
          <p className="font-bold text-xl text-orange-500 mt-5">
            Price: ${data.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
