"use client";
import CreateNewTaskButton from "@/components/CreateNewTaskButton";
import CreatePostModal from "@/components/CreatePostModal";
import Greetings from "@/components/Greetings";
import InfoCard from "@/components/InfoCard";
import InstallAppButton from "@/components/InstallAppButton";
import Sidebar from "@/components/Sidebar";
import TaskActions from "@/components/TaskActions";
import TaskSections from "@/components/TaskSections";
import UserActions from "@/components/UserActions";
import { infoData } from "@/data";
import { useAuthStore } from "@/store/useAuthStore";
import { useModalStore } from "@/store/useModalStore";
import axios from "axios";
import { useQuery } from "react-query";

const Dashboard = () => {
  const isModalOpen = useModalStore((store) => store.isModalOpen);
  const token = useAuthStore((store) => store.token);

  const { data } = useQuery(
    "user",
    async () => {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/user`, {
        token: token,
      });
      return res.data;
    },
    {
      enabled: false && token !== null,
    }
  );

  return (
    <main className="min-h-screen bg-[#f7f7f7] grid grid-cols-12 relative">
      <section className="col-span-2 border bg-white">
        <div className="sticky top-0 h-screen space-y-3 p-2">
          <UserActions
            profilePic={data?.data.profilePic}
            fullname={data?.data.fullname}
          />
          <Sidebar />
          <CreateNewTaskButton />
          <InstallAppButton />
        </div>
      </section>
      <section className="col-span-10 border space-y-3 p-3">
        <Greetings fullName={data?.data.fullname} />
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
