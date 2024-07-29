import Image from "next/image";
import React from "react";
import { useModalStore } from "../store/useModalStore";

const CreateNewTaskButton = () => {
  const openModal = useModalStore((store) => store.openModal);
  return (
    <button
      onClick={openModal}
      className="bg-create-task-button p-2 text-white gap-2 justify-center font-medium rounded-lg flex w-full items-center"
    >
      Create new task
      <Image src="/add-task.png" alt="" width={24} height={24} />
    </button>
  );
};

export default CreateNewTaskButton;
