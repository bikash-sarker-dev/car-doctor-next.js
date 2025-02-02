import dbConnect, { collectionAllName } from "@/lib/dbConnection";
import Image from "next/image";
import Link from "next/link";

const ServicesSection = async () => {
  const data = await dbConnect(collectionAllName.serviceCollection)
    .find({})
    .toArray();
  return (
    <div className="grid grid-cols-3 gap-5 my-16">
      {data.map((service) => {
        return (
          <div key={service._id} className="card bg-base-100  shadow-xl">
            <figure>
              <Image
                src={`${service.img}`}
                width={300}
                height={280}
                alt="Picture of the author"
                unoptimized
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.title}</h2>
              <p className="text-lg text-yellow-500 font-bold">
                Price: ${service.price}
              </p>
              <div className="card-actions justify-end">
                <Link href={`/services/${service._id}`}>
                  <button className="btn btn-primary">Details</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesSection;
