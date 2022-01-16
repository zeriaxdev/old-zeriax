import { useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import TypeWriter from "../components/TypeWriter";

export default function Redirect() {
  useEffect(() => {
    document.title = "Redirecting...";
    setTimeout(() => {
      window.location.href = `https://youtube.com/watch?v=dQw4w9WgXcQ`;
    }, 1500);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-64">
        <div className="text-center">
          <div className="text-2xl">
            <AiOutlineLoading3Quarters className="inline-block h-16 w-16 text-gray-800 dark:text-gray-200 animate-spin" />
            <h1 className="text-3xl mt-5 text-gray-800 dark:text-gray-200">
              <TypeWriter content="Redirecting..." terminal />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
