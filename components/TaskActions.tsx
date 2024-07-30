"use client";
import { useModalStore } from "@/store/useModalStore";
import Image from "next/image";

const TaskActions = () => {
  const openModal = useModalStore((store) => store.openModal);
  return (
    <div className="flex items-center justify-between">
      <div className="flex relative items-center">
        <input
          className="bg-white border border-[#E9E9E9] rounded-lg p-2"
          type="text"
          placeholder="Search"
        />
        <Image
          className="absolute right-2"
          src="/search.png"
          width={24}
          height={24}
          alt="search"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="font-normal flex items-center gap-2 text-[#797979]">
          Calendar view
          <Image src="/calander.png" alt="" width={24} height={24} />
        </button>
        <button className="font-normal flex items-center gap-2 text-[#797979]">
          Automation
          <Image src="/automation.png" alt="" width={24} height={24} />
        </button>
        <button className="font-normal flex items-center gap-2 text-[#797979]">
          Filter
          <Image src="/filter.png" alt="" width={24} height={24} />
        </button>
        <button className="font-normal flex items-center gap-2 text-[#797979]">
          Share
          <Image src="/share.png" alt="" width={24} height={24} />
        </button>
        <button
          onClick={openModal}
          className="font-normal flex items-center gap-2 bg-create-task-button text-white p-2 rounded-lg"
        >
          Create new
          <Image src="/add-task.png" alt="" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default TaskActions;
