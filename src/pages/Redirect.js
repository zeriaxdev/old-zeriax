import { useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Redirect() {
  useEffect(() => {
    window.location.href = `https://youtube.com/watch?v=dQw4w9WgXcQ`;
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-64">
        <div className="text-center">
          <div className="text-2xl">
            <AiOutlineLoading3Quarters className="inline-block h-16 w-16 text-gray-200 animate-spin" />
            <span className="inline-block h-8 w-8" />
            <h1
              className="
              redirect-text
            text-4xl mt-5 text-gray-200
            "
            >
              Redirecting...
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
