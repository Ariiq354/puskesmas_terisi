import prismadb from "@/lib/prismadb";
import { UserForm } from "./components/user-form";

const Dashboard = async ({ params }: { params: { userId: string } }) => {
  let userId = 0;

  if (params.userId !== "new") {
    userId = parseInt(params.userId);
  }

  const user = await prismadb.user.findUnique({
    where: {
      id: userId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <UserForm initialData={user} />
      </div>
    </div>
  );
};
export default Dashboard;
