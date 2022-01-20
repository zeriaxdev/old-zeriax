import { useEffect } from "react";

const Music = () => {
  useEffect(() => {
    if (navigator.userAgent.indexOf("Linux") > -1) {
      document.title = "🐧 Music";
    } else if (navigator.userAgent.indexOf("Win") > -1) {
      document.title = "🪟 Music";
    } else if (navigator.userAgent.indexOf("Mac") > -1) {
      document.title = "🍎 Music";
    } else if (navigator.userAgent.indexOf("Android") > -1) {
      document.title = "🤖 Music";
    } else if (navigator.userAgent.indexOf("iPhone") > -1) {
      document.title = "📱 Music";
    } else {
      document.title = "🎵 Music";
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-64">
        <div className="text-center">
          <div className="text-2xl">
            <h1 className="text-xl mt-5 text-gray-800 dark:text-gray-200">
              <div className="flex justify-center items-center">
                <div className="bg-gray-700/25 dark:bg-gray-400/20 rounded-lg p-5 font-bold min-w-full">
                  <div className="flex justify-center items-center text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <button
                    className="bg-blue-400 dark:bg-blue-600 rounded-lg p-3 px-5 font-bold m-2"
                    onClick={() => {
                      console.log("clicked");
                    }}
                  >
                    Play
                  </button>
                  <button
                    className="bg-blue-400 dark:bg-blue-600 rounded-lg p-3 px-5 font-bold m-2"
                    onClick={() => {
                      console.log("clicked");
                    }}
                  >
                    Stop
                  </button>
                </div>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
