import Image from "next/image";
import Link from "next/link";

const InstallAppButton = () => {
  return (
    <Link href="" className="flex absolute bottom-4 bg-[#F3F3F3] rounded-lg">
      <Image src="/download.png" alt="install app" width={40} height={40} />
      <div className="">
        <h2 className="text-[#666666] font-medium">Download the app</h2>
        <h3 className="text-[#666666] font-normal">Get the full experience</h3>
      </div>
    </Link>
  );
};

export default InstallAppButton;
