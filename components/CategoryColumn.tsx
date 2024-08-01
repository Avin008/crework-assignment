import Image from "next/image";
import TaskCard from "./TaskCard";
import AddTaskButton from "./AddTaskButton";
import { SortableContext } from "@dnd-kit/sortable";
import { CategoryType } from "@/data";
import { UniqueIdentifier, useDroppable } from "@dnd-kit/core";

const CategoryColumn = ({
  categoryData,
  setPostData,
}: {
  categoryData: CategoryType;
  setPostData: any;
}) => {
  const { setNodeRef } = useDroppable({ id: categoryData.id });
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-[#555555] font-normal text-base">
          {categoryData.title}
        </h1>
        <Image src="/stairs.png" width={24} height={24} alt="" />
      </div>
      <div className="py-3 space-y-2" ref={setNodeRef}>
        <SortableContext
          id={categoryData.id.toString()}
          items={categoryData.items.map((x) => x.id)}
        >
          {categoryData.items.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
          <AddTaskButton
            category={categoryData.title}
            setPostData={setPostData}
          />
        </SortableContext>
      </div>
    </div>
  );
};

export default CategoryColumn;
