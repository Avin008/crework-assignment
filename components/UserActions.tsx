import Image from "next/image";
import Link from "next/link";

const UserActions = () => {
  return (
    <div className="border h-[79px] space-y-2">
      <div className="flex items-center gap-2">
        <div className="relative h-[31px] w-[31px]">
          <Image className="object-contain" src="/dp.png" fill alt="" />
        </div>
        <div className="">
          <p className="font-medium text-xl">Joe Gardener</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Link href="">
            <Image src="/bell.png" width={24} height={24} alt="notifications" />
          </Link>
          <Link href="">
            <Image src="/circle.png" width={24} height={24} alt="tasks" />
          </Link>
          <Link href="">
            <Image src="/arrow.png" width={24} height={24} alt="more-actions" />
          </Link>
        </div>
        <div>
          <button className="bg-[#F4F4F4] p-1 px-2 text-[#797979] font-normal rounded-md">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserActions;
