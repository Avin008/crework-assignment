import Image from "next/image";
import TaskCard from "./TaskCard";
import AddTaskButton from "./AddTaskButton";
import { Category } from "./TaskSections";

const CategoryColumn = ({ category }: { category: Category }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-[#555555] font-normal text-base">
          {category.category}
        </h1>
        <Image src="/stairs.png" width={24} height={24} alt="" />
      </div>
      <div className="py-3 space-y-2">
        {category.tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
        <AddTaskButton />
      </div>
    </div>
  );
};

export default CategoryColumn;
