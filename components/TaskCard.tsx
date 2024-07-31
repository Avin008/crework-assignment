import Image from "next/image";
import { format, formatDistanceToNow } from "date-fns";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ItemType } from "@/data";

const TaskCard = ({
  task,
  overlay = true,
}: {
  task: ItemType | any;
  overlay?: boolean;
}) => {
  const timeStamp = new Date(task.timestamp);
  const distanceTimeAgo = formatDistanceToNow(timeStamp, { addSuffix: true });
  const formattedDate = format(timeStamp, "dd-MM-yyyy");

  const {
    setNodeRef,
    attributes,
    isDragging,
    listeners,
    transform,
    transition,
  } = useSortable({
    id: task.id,
    data: {
      type: "item",
    },
  });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        transition,
        transform: CSS.Transform.toString(transform),
      }}
      className={`bg-[#F9F9F9] ${isDragging && "opacity-80"} ${
        isDragging && overlay && "opacity-35"
      } p-2 space-y-2 rounded-lg border border-[#DEDEDE]`}
    >
      <h1 className="font-medium text-[#606060] text-base">{task.title}</h1>
      <p className="text-[#797979]">{task.description}</p>
      <div
        className={`${
          (task.priority.toLowerCase() === "urgent" && "bg-[#FF6B6B]") ||
          (task.priority.toLowerCase() === "medium" && "bg-[#FFA235]") ||
          (task.priority.toLowerCase() === "low" && "bg-[#0ECC5A]") ||
          (task.priority.toLowerCase() === "high" && "bg-[#cc4d0e]")
        } w-fit h-fit p-1 px-2 rounded-lg text-white font-normal text-xs`}
      >
        {task.priority}
      </div>
      <div className="flex items-center gap-2">
        <Image src="/clock.png" alt="clock" width={24} height={24} />
        <p className="text-[#606060] font-semibold text-sm">{formattedDate}</p>
      </div>
      <div>
        <p className="text-[#797979] font-medium text-sm">{distanceTimeAgo}</p>
      </div>
    </div>
  );
};

export default TaskCard;
