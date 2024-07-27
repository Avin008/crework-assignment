import Image from "next/image";
import TaskCard from "./TaskCard";
import AddTaskButton from "./AddTaskButton";

const taskData = [
  { id: 1, category: "To do" },
  { id: 2, category: "In progress" },
  { id: 3, category: "Under review" },
  { id: 4, category: "Finished" },
];

const TaskSections = () => {
  return (
    <section className="grid grid-cols-4 gap-3 rounded-lg p-3 bg-white">
      {taskData.map((x) => (
        <div key={x.id}>
          <div className="flex justify-between items-center">
            <h1 className="text-[#555555] font-normal text-base">
              {x.category}
            </h1>
            <Image src="/stairs.png" width={24} height={24} alt="" />
          </div>
          <div className="py-3 space-y-2">
            <TaskCard />
            <AddTaskButton />
          </div>
        </div>
      ))}
    </section>
  );
};

export default TaskSections;
