import CreateNewTaskButton from "@/components/CreateNewTaskButton";
import InstallAppButton from "@/components/InstallAppButton";
import Sidebar from "@/components/Sidebar";
import UserActions from "@/components/UserActions";

const Dashboard = () => {
  return (
    <main className="h-screen grid grid-cols-12 relative">
      <section className="col-span-2 border space-y-3">
        <UserActions />
        <Sidebar />
        <CreateNewTaskButton />
        <InstallAppButton />
      </section>
      <section className="col-span-10 border"></section>
    </main>
  );
};

export default Dashboard;
