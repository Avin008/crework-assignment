import Image from "next/image";
import { Task } from "./TaskSections";

const TaskCard = ({ task }: { task: Task }) => {
  return (
    <div className="bg-[#F9F9F9] p-2 space-y-2 rounded-lg border border-[#DEDEDE]">
      <h1 className="font-medium text-[#606060] text-base">{task.title}</h1>
      <p className="text-[#797979]">{task.description}</p>
      <div className="bg-[#FF6B6B] w-fit h-fit p-1 px-2 rounded-lg text-white font-normal text-xs">
        {task.priority}
      </div>
      <div className="flex items-center gap-2">
        <Image src="/clock.png" alt="clock" width={24} height={24} />
        <p className="text-[#606060] font-semibold text-sm">
          {new Date(task.timestamp).getDate()}
        </p>
      </div>
      <div>
        <p className="text-[#797979] font-medium text-sm">
          {new Date(task.timestamp).getTime()} hr ago
        </p>
      </div>
    </div>
  );
};

export default TaskCard;
