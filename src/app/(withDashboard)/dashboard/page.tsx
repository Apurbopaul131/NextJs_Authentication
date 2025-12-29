import { authOptions } from "@/uitls/authOptions";
import { getServerSession } from "next-auth";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1 className="text-4xl text-center mt-10">
        Welcome To Dashboard Page {session?.user?.name}
      </h1>
    </div>
  );
};

export default DashboardPage;
