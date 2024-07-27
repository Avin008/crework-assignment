import CreateNewTaskButton from "@/components/CreateNewTaskButton";
import Greetings from "@/components/Greetings";
import InfoCard from "@/components/InfoCard";
import InstallAppButton from "@/components/InstallAppButton";
import Sidebar from "@/components/Sidebar";
import TaskActions from "@/components/TaskActions";
import UserActions from "@/components/UserActions";
import Image from "next/image";

const infoData: {
  id: number;
  img: string;
  title: string;
  description: string;
}[] = [
  {
    id: Date.now() + Math.random() * 1000,
    img: "/illustration-1.png",
    title: "Introducing tags",
    description:
      "Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient.",
  },
  {
    id: Date.now() + Math.random() * 1000,
    img: "/illustration-2.png",
    title: "Share Notes Instantly",
    description:
      "Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options.",
  },
  {
    id: Date.now() + Math.random() * 1000,
    img: "/illustration-3.png",
    title: "Access Anywhere",
    description:
      "Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer.",
  },
];

const Dashboard = () => {
  return (
    <main className="h-screen bg-[#f7f7f7] grid grid-cols-12 relative">
      <section className="col-span-2 border space-y-3 bg-white">
        <UserActions />
        <Sidebar />
        <CreateNewTaskButton />
        <InstallAppButton />
      </section>
      <section className="col-span-10 border">
        <Greetings />
        <section className="grid grid-cols-3 gap-3">
          {infoData.map((x) => (
            <InfoCard key={x.id} data={x} />
          ))}
        </section>
        <section>
          <TaskActions />
        </section>
      </section>
    </main>
  );
};

export default Dashboard;
