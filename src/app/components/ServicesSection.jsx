import dbConnect from "@/lib/dbConnection";
import Image from "next/image";

const ServicesSection = async () => {
  const data = await dbConnect("services").find({}).toArray();
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
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesSection;
