import Frontpage from "../components/Frontpage";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="bg-white dark:bg-zinc-800 min-h-screen">
      <div>
        <Header />
      </div>
      <div className="Frontpage">
        <Frontpage />
      </div>
    </div>
  );
};

export default Home;
