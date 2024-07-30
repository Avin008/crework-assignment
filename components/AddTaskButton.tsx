import { useModalStore } from "@/store/useModalStore";
import Image from "next/image";
import React from "react";

const AddTaskButton = () => {
  const openModal = useModalStore((store) => store.openModal);
  return (
    <button
      onClick={openModal}
      className="flex w-full text-base rounded-lg p-2 text-[#E3E1E1] bg-add-task-button justify-between items-center"
    >
      Add new
      <Image src="/add.png" alt="" width={24} height={24} />
    </button>
  );
};

export default AddTaskButton;
