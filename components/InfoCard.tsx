import Image from "next/image";

const InfoCard = ({
  data,
}: {
  data: { id: number; img: string; title: string; description: string };
}) => {
  return (
    <div className="border flex items-center gap-2 p-3 rounded-lg bg-white border-[#F4F4F4]">
      <div className="min-w-[77px] min-h-[61px] relative">
        <Image src={data.img} fill alt="" />
      </div>
      <div className="space-y-1">
        <h1 className="text-[#757575] font-semibold text-base">{data.title}</h1>
        <p className="text-[#868686] text-sm text-wrap">{data.description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
