import { FaCoffee } from "react-icons/fa";

const PageNotFound = () => {
  return (
    <div className="bg-white dark:bg-zinc-800 min-h-screen">
      <div className="PageNotFound">
        <div
          className="
        container mx-auto px-4 py-8 font-mono self-center dark:text-gray-200
        flex flex-col items-center justify-center text-center min-h-screen
        "
        >
          <div className="bg-gray-300 dark:bg-zinc-700 rounded-xl p-2 px-5 m-5">
            <h1 className="text-4xl text-center text-red-500 dark:text-red-400 font-bold mt-1.5">
              404
            </h1>
          </div>
          <h1 className="text-4xl font-bold text-center">Page not found</h1>
          <p className="text-center">
            The page you are looking for does not exist.
          </p>
          <p className="text-center">Here, have some coffee.</p>
          <div className="text-center">
            <FaCoffee
              // center it
              className="text-5xl dark:text-gray-300 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
