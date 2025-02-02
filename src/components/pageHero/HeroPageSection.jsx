import Image from "next/image";

const HeroPageSection = () => {
  return (
    <div className="flex justify-center relative">
      <div className="w-[1140px] h-[300px]">
        <Image
          width={1140}
          height={300}
          src={"/assets/images/checkout/checkout.png"}
          alt={"banner"}
        />
        <div className="absolute  border-2 border-red-700 top-28 left-16">
          <h2 className="text-4xl text-white font-bold">Service Details</h2>
        </div>
      </div>
    </div>
  );
};

export default HeroPageSection;
