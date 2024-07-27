import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <nav>
      <ul className="text-[#797979] text-xl ">
        <li className="flex items-center gap-3 p-1 border rounded-md border-[#DDDDDD] bg-[#F4F4F4]">
          <div>
            <Image src="/home.png" height={24} width={24} alt="home" />
          </div>
          <Link href="">Home</Link>
        </li>
        <li className="flex items-center gap-3 p-1">
          <div>
            <Image src="/boards.png" height={24} width={24} alt="boards" />
          </div>
          <Link href="">Boards</Link>
        </li>
        <li className="flex items-center gap-3 p-1">
          <div>
            <Image src="/settings.png" height={24} width={24} alt="settings" />
          </div>
          <Link href="">Settings</Link>
        </li>
        <li className="flex items-center gap-3 p-1">
          <div>
            <Image src="/teams.png" height={24} width={24} alt="teams" />
          </div>
          <Link href="">Teams</Link>
        </li>
        <li className="flex items-center gap-3 p-1">
          <div>
            <Image
              src="/analytics.png"
              height={24}
              width={24}
              alt="analytics"
            />
          </div>
          <Link href="">Analytics</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
