import CategoryColumn from "./CategoryColumn";
import { CategoryType, ItemType } from "@/data";
import {
  closestCorners,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  UniqueIdentifier,
} from "@dnd-kit/core";
import TaskCard from "./TaskCard";
import { useAuthStore } from "@/store/useAuthStore";
import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";

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

const TaskSections = ({
  containers,
  setContainers,
}: {
  containers: CategoryType[];
  setContainers: any;
}) => {
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
    setContainers((prev: CategoryType[]) =>
      prev.map((x) => {
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
            items: x.items.filter((t) => t.id !== active.id),
          };
        } else {
          return x;
        }
      })
    );
  };

  const token = useAuthStore((store) => store.token);

  const { data, isLoading } = useQuery(
    ["posts"],
    async () => {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/post`, {
        token: token,
      });
      return res.data;
    },
    {
      enabled: token !== null,
    }
  );

  return (
    <section className="grid grid-cols-4 gap-3 rounded-lg p-3 bg-white">
      <DndContext
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        {containers?.map((categoryData) => (
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
