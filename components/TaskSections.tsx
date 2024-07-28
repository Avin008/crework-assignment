import Image from "next/image";
import TaskCard from "./TaskCard";
import AddTaskButton from "./AddTaskButton";
import CategoryColumn from "./CategoryColumn";
import { categories } from "@/data";

export type Task = {
  id: string;
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  timestamp: string;
};

export type Category = {
  id: string;
  category: string;
  tasks: Task[];
};

const TaskSections = () => {
  return (
    <section className="grid grid-cols-4 gap-3 rounded-lg p-3 bg-white">
      {categories.map((category) => (
        <CategoryColumn key={category.id} category={category} />
      ))}
    </section>
  );
};

export default TaskSections;
