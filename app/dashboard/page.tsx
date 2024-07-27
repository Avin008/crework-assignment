import UserActions from "@/components/UserActions";

const Dashboard = () => {
  return (
    <main className="h-screen grid grid-cols-12">
      <section className="col-span-2 border">
        <UserActions />
      </section>
      <section className="col-span-10 border"></section>
    </main>
  );
};

export default Dashboard;