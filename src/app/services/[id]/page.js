import HeroPageSection from "@/components/pageHero/HeroPageSection";
import dbConnect, { collectionAllName } from "@/lib/dbConnection";
import { ObjectId } from "mongodb";
import Image from "next/image";

const ServiceDetailsPage = async ({ params }) => {
  const id = await params.id;
  const query = { _id: new ObjectId(id) };
  const data = await dbConnect(collectionAllName.serviceCollection).findOne(
    query
  );

  return (
    <div>
      <HeroPageSection />
      <div>
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
    </div>
  );
};

export default ServiceDetailsPage;
