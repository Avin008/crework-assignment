import CategoryColumn from "./CategoryColumn";
import { categories, CategoryType, ItemType } from "@/data";
import {
  closestCorners,
  DndContext,
  DragOverlay,
  DragStartEvent,
  UniqueIdentifier,
} from "@dnd-kit/core";
import { useState } from "react";
import TaskCard from "./TaskCard";

function getItemById(
  itemId: UniqueIdentifier,
  categoriesArray: CategoryType[]
): ItemType | null {
  for (const category of categoriesArray) {
    const item = category.items.find((item) => item.id === itemId);
    if (item) {
      return item;
    }
  }
  return null;
}

const TaskSections = () => {
  const [containers, setContainers] = useState<CategoryType[]>(categories);
  const [activeId, setActiveId] = useState<null | UniqueIdentifier>(null);

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    setActiveId(active.id);
  }

  return (
    <section className="grid grid-cols-4 gap-3 rounded-lg p-3 bg-white">
      <DndContext
        onDragStart={handleDragStart}
        collisionDetection={closestCorners}
      >
        {containers.map((categoryData) => (
          <CategoryColumn key={categoryData.id} categoryData={categoryData} />
        ))}
        <DragOverlay>
          {activeId ? (
            <TaskCard task={getItemById(activeId, containers)} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </section>
  );
};

export default TaskSections;
