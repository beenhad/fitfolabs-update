// import Home from "@/views/Home";
import dynamic from "next/dynamic";

const Home = dynamic(import("@/views/Home"), { ssr: false });

const HomePage = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default HomePage;
