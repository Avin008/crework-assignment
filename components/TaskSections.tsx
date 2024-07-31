import CategoryColumn from "./CategoryColumn";
import { categories, CategoryType, ItemType } from "@/data";
import {
  closestCorners,
  DndContext,
  DragEndEvent,
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

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    setActiveId(active.id);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const overContainerId = over?.data.current?.sortable.containerId;
    const activeContainerId = active.data.current?.sortable.containerId;

    const emptyColumn = overContainerId === undefined && over?.id;

    if (active.id === over?.id) return;
    if (activeContainerId === (overContainerId || emptyColumn)) return;
    setContainers((prev: any) =>
      prev.map((x: any) => {
        if (x.id === (emptyColumn || overContainerId)) {
          return {
            ...x,
            items: [
              containers
                .find((y) => y.id === activeContainerId)
                ?.items.find((z) => z.id === active.id),
              ...x.items,
            ],
          };
        } else if (x.id === activeContainerId) {
          return {
            ...x,
            items: x.items.filter((t: any) => t.id !== active.id),
          };
        } else {
          return x;
        }
      })
    );
  };

  return (
    <section className="grid grid-cols-4 gap-3 rounded-lg p-3 bg-white">
      <DndContext
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
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
