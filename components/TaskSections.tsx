import Image from "next/image";
import TaskCard from "./TaskCard";
import AddTaskButton from "./AddTaskButton";

const TaskSections = () => {
  return (
    <section className="grid grid-cols-4 gap-3 bg-white">
      <div className="">
        <div className="flex justify-between items-center">
          <h1 className="text-[#555555] font-normal text-base">To do</h1>
          <Image src="/stairs.png" width={24} height={24} alt="" />
        </div>
      </div>
      <div className="">
        <div className="flex justify-between items-center">
          <h1 className="text-[#555555] font-normal text-base">In progress</h1>
          <Image src="/stairs.png" width={24} height={24} alt="" />
        </div>
        <div className="">
          <TaskCard />
          <AddTaskButton />
        </div>
      </div>
      <div className="">
        <div className="flex justify-between items-center">
          <h1 className="text-[#555555] font-normal text-base">Under review</h1>
          <Image src="/stairs.png" width={24} height={24} alt="" />
        </div>
      </div>
      <div className="">
        <div className="flex justify-between items-center">
          <h1 className="text-[#555555] font-normal text-base">Finished</h1>
          <Image src="/stairs.png" width={24} height={24} alt="" />
        </div>
      </div>
    </section>
  );
};

export default TaskSections;
