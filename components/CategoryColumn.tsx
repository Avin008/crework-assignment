import Image from "next/image";
import TaskCard from "./TaskCard";
import AddTaskButton from "./AddTaskButton";
import { SortableContext } from "@dnd-kit/sortable";
import { CategoryType } from "@/data";

const CategoryColumn = ({ categoryData }: { categoryData: CategoryType }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-[#555555] font-normal text-base">
          {categoryData.title}
        </h1>
        <Image src="/stairs.png" width={24} height={24} alt="" />
      </div>
      <div className="py-3 space-y-2">
        <SortableContext
          id={categoryData.id.toString()}
          items={categoryData.items.map((x) => x.id)}
        >
          {categoryData.items.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
          <AddTaskButton />
        </SortableContext>
      </div>
    </div>
  );
};

export default CategoryColumn;
