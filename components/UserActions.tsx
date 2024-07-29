import { useAuthStore } from "@/store/useAuthStore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserActions = () => {
  const removeAuth = useAuthStore((store) => store.removeAuth);
  const { push } = useRouter();

  const handleAuthRedirect = () => {
    removeAuth();
    push("/login");
  };

  return (
    <div className="h-[79px] space-y-2">
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
          <button
            onClick={handleAuthRedirect}
            className="bg-[#F4F4F4] w-[69px] h-[40px] text-[#797979] font-normal rounded-md"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserActions;
