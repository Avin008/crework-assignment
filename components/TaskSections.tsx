import CategoryColumn from "./CategoryColumn";
import { categories, CategoryType } from "@/data";
import { closestCorners, DndContext } from "@dnd-kit/core";
import { useState } from "react";

const TaskSections = () => {
  const [containers, setContainers] = useState<CategoryType[]>(categories);

  return (
    <section className="grid grid-cols-4 gap-3 rounded-lg p-3 bg-white">
      <DndContext collisionDetection={closestCorners}>
        {containers.map((categoryData) => (
          <CategoryColumn key={categoryData.id} categoryData={categoryData} />
        ))}
      </DndContext>
    </section>
  );
};

export default TaskSections;
