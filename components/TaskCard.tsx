import Image from "next/image";

const TaskCard = () => {
  return (
    <div className="bg-[#F9F9F9] p-2 space-y-2 rounded-lg border border-[#DEDEDE]">
      <h1 className="font-medium text-[#606060] text-base">
        Implement User Authentication
      </h1>
      <p className="text-[#797979]">
        Develop and integrate user authentication using email and password.
      </p>
      <div className="bg-[#FF6B6B] w-fit h-fit p-1 px-2 rounded-lg text-white font-normal text-xs">
        Urgent
      </div>
      <div className="flex items-center gap-2">
        <Image src="/clock.png" alt="clock" width={24} height={24} />
        <p className="text-[#606060] font-semibold text-sm">2024-08-15</p>
      </div>
      <div className="">
        <p className="text-[#797979] font-medium text-sm">1 hr ago</p>
      </div>
    </div>
  );
};

export default TaskCard;
