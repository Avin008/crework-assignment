"use client";
import CreateNewTaskButton from "@/components/CreateNewTaskButton";
import CreatePostModal from "@/components/CreatePostModal";
import Greetings from "@/components/Greetings";
import InfoCard from "@/components/InfoCard";
import InstallAppButton from "@/components/InstallAppButton";
import PostModal from "@/components/PostModal";
import Sidebar from "@/components/Sidebar";
import TaskActions from "@/components/TaskActions";
import TaskSections from "@/components/TaskSections";
import UserActions from "@/components/UserActions";
import { infoData } from "@/data";
import { useAuthStore } from "@/store/useAuthStore";
import { useModalStore } from "@/store/useModalStore";
import Image from "next/image";
import { redirect } from "next/navigation";

const Dashboard = () => {
  const authStatus = useAuthStore((store) => store.authStatus);
  const isModalOpen = useModalStore((store) => store.isModalOpen);

  return (
    <main className="min-h-screen bg-[#f7f7f7] grid grid-cols-12 relative">
      <section className="col-span-2 border bg-white">
        <div className="sticky top-0 h-screen space-y-3 p-2">
          <UserActions />
          <Sidebar />
          <CreateNewTaskButton />
          <InstallAppButton />
        </div>
      </section>
      <section className="col-span-10 border space-y-3 p-3">
        <Greetings />
        <section className="grid grid-cols-3 gap-3">
          {infoData.map((x) => (
            <InfoCard key={x.id} data={x} />
          ))}
        </section>
        <section>
          <TaskActions />
        </section>
        <TaskSections />
      </section>
      {isModalOpen && <CreatePostModal />}
    </main>
  );
};

export default Dashboard;
