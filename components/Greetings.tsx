import Image from "next/image";
import Link from "next/link";

const Greetings = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="font-semibold text-3xl">Good morning, Joe!</h1>
      <Link href="" className="flex items-center gap-2">
        <p>Help & feedback</p>
        <Image src="/help.png" alt="help" width={24} height={24} />
      </Link>
    </div>
  );
};

export default Greetings;
