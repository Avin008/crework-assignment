import Image from "next/image";
import Link from "next/link";

const InstallAppButton = () => {
  return (
    <Link
      href=""
      className="flex mx-2 absolute bottom-0 left-0 right-0 bg-[#F3F3F3] rounded-lg p-1"
    >
      <Image src="/download.png" alt="install app" width={35} height={35} />
      <div className="">
        <h2 className="text-[#666666] font-medium text-sm">Download the app</h2>
        <h3 className="text-[#666666] font-normal text-xs">
          Get the full experience
        </h3>
      </div>
    </Link>
  );
};

export default InstallAppButton;
