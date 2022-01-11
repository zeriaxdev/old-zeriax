import React, { useState, useEffect } from "react";

let jokeCats = ["Programming", "Misc", "Pun"];

const Pun = () => {
  const [data, setData] = useState(null);
  const [blur, setBlur] = useState("blur");
  const [urlToFetch, setUrlToFetch] = useState(
    `https://sv443.net/jokeapi/v2/joke/Any?type=twopart`
  );

  useEffect(() => {
    fetch(urlToFetch)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.info(JSON.stringify(data, null, 2));
      });
  }, [urlToFetch]);

  return data ? (
    <div className="text-gray-800 dark:text-gray-200">
      {data.error ? (
        <h2>Sorry, we ran out of jokes :(</h2>
      ) : (
        <div className="bg-white dark:bg-zinc-800 dark:text-slate-50">
          <div
            className="
  min-w-sm max-w-2xl mx-auto py-5 px-5 min-h-max
  sm:px-6 lg:py-5 lg:px-8 rounded-2xl text-center
  bg-gray-300/20 dark:bg-zinc-900 dark:text-slate-50
  shadow-lg shadow-zinc-300/50 dark:shadow-zinc-900/50
  "
          >
            <button
              className="
          bg-gray-200 dark:bg-zinc-800/50 w-fit p-2 rounded-lg mx-1 hover:bg-gray-300 dark:hover:bg-zinc-700/50"
              onClick={() => {
                setBlur("blur");
                setUrlToFetch(
                  `https://sv443.net/jokeapi/v2/joke/${
                    jokeCats[Math.floor(Math.random() * jokeCats.length)]
                  }?type=twopart`
                );
              }}
            >
              Next
            </button>
            <button
              className="
          bg-gray-200 dark:bg-zinc-800/50 w-fit p-2 rounded-lg mx-1 transition-colors duration-100
          hover:bg-gray-500/30 dark:hover:bg-zinc-700/50 active:bg-green-600/50 dark:active:bg-green-500/30"
              onClick={() => {
                navigator.clipboard.writeText(`${data.setup} ${data.delivery}`);
              }}
            >
              Copy
            </button>
            <div
              className="text-gray-800 dark:text-gray-200 mb-2 cursor-pointer"
              onClick={() => {
                setBlur(blur === "blur" ? "" : "blur");
              }}
            >
              {data.type === "single" ? (
                <p>{data.joke}</p>
              ) : (
                <div className="transition-all">
                  <div>
                    <h2>{data.setup}</h2>
                  </div>
                  <p className={blur}>{data.delivery}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  ) : (
    <div className="text-center dark:text-gray-200">
      <div
        className="spinner-border text-orange-600 dark:text-gray-200"
        role="status"
      >
        <span>Loading...</span>
      </div>
    </div>
  );
};

const Jokes = () => {
  return (
    <div className="bg-white dark:bg-zinc-800 min-h-screen">
      <div className="PageNotFound">
        <div
          className="
        container mx-auto px-4 py-8 font-mono self-center dark:text-gray-200
        flex flex-col items-center justify-center text-center min-h-screen
        "
        >
          <Pun />
        </div>
      </div>
    </div>
  );
};

export default Jokes;
