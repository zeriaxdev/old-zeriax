import React, { useState, useEffect } from "react";
import { FaArrowUp, FaRedditAlien, FaAward, FaSpinner } from "react-icons/fa";
import TypeWriter from "../components/TypeWriter";

const Reddit = () => {
  let [data, setData] = useState(null);
  let [sub, setSub] = useState("all");
  let [sortBy, setSortBy] = useState("hot");
  let [url, setUrl] = useState(
    `https://www.reddit.com/r/${sub}/${sortBy}.json`
  );

  useEffect(() => {
    const newUrl = new URL(window.location.href);
    const subreddit = newUrl.searchParams.get("sub");
    const sort = newUrl.searchParams.get("sort");

    if (subreddit) {
      setSub(subreddit);
    }

    if (sort) {
      setSortBy(sort);
    }

    setUrl(`https://www.reddit.com/r/${sub}/${sortBy}.json`);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });

    document.title = "Coffee: Online Reddit client";
  }, [url, sub, sortBy]);

  return data ? (
    <div>
      <h1 className="text-center dark:text-white mb-4">r/{sub} top posts</h1>

      <div
        className={
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        }
      >
        {data.data.children.map((post) => (
          <div key={post.data.id} className="col-span-1">
            <div className="bg-gray-100 dark:bg-zinc-900 rounded-3xl shadow overflow-hidden">
              <div className={"px-4 py-5 sm:p-6"}>
                <div className="flex items-center justify-between">
                  <div className="flex-shrink-0">
                    <a href="https://reddit.com/">
                      <FaRedditAlien className="h-10 w-10 text-orange-600/80 dark:text-white" />
                    </a>
                  </div>
                  <div className="ml-3">
                    <div className="text-sm leading-5 font-medium text-gray-900 dark:text-gray-300">
                      <a
                        href={`https://reddit.com/u/${post.data.author}`}
                        className="hover:underline"
                      >
                        u/{post.data.author}
                      </a>
                    </div>
                    <div className="mt-1 text-sm leading-5 text-gray-500">
                      <a
                        href={`https://reddit.com/r/${post.data.subreddit}`}
                        className="hover:underline"
                      >
                        r/{post.data.subreddit}
                      </a>
                    </div>
                  </div>
                </div>
                {post.data.over_18 ? (
                  <div className="mt-3 rounded-lg w-fit border-2 border-red-600 dark:border-red-500">
                    <p className="mx-2 text-red-600 dark:text-red-500 select-none">
                      <b>NSFW</b>
                    </p>
                  </div>
                ) : (
                  ""
                )}
                <a
                  href={post.data.url}
                  className="
                block mt-3 text-base leading-6 text-gray-900 dark:text-gray-300 group 
                hover:text-gray-900 dark:hover:text-gray-300 transition ease-in-out duration-150
                hover:underline"
                >
                  <b>{post.data.title}</b>
                </a>
                {post.data.selftext ? (
                  <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 dark:text-gray-400">
                    {post.data.selftext.length > 400
                      ? post.data.selftext.substring(0, 400) + " ..."
                      : post.data.selftext}
                  </div>
                ) : (
                  ""
                )}

                {post.data.total_awards_received > 0 ? (
                  <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 dark:text-gray-400">
                    <FaAward className="mr-1" />
                    <span className="mr-2">
                      {post.data.total_awards_received}
                    </span>
                    <FaArrowUp className="mr-1" />
                    <span>{post.data.score}</span>
                  </div>
                ) : (
                  ""
                )}
                <div className="text-sm text-gray-500 dark:text-gray-300">
                  <a
                    href={`https://reddit.com${post.data.permalink}comments`}
                    className="hover:underline"
                  >
                    {post.data.num_comments} comments
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  {post.data.thumbnail ? (
                    post.data.is_video ? (
                      <video
                        className={
                          "w-full h-auto rounded-xl max-h-96 " +
                          (post.data.over_18 ? "blur-3xl transition-all" : "")
                        }
                        controls
                        src={post.data.media.reddit_video.fallback_url}
                        onPlay={() => {
                          console.log(
                            `Playing video: ${post.data.media.reddit_video.fallback_url}`
                          );
                        }}
                      />
                    ) : (
                      <img
                        className={
                          "rounded-lg dark:text-gray-400 self-center hover:cursor-pointer max-h-96 " +
                          (post.data.over_18 ? "blur-3xl transition-all" : "")
                        }
                        src={post.data.url_overridden_by_dest || post.data.url}
                        alt=""
                        onClick={() => {
                          window.open(post.data.url_overridden_by_dest);
                        }}
                      />
                    )
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="text-center dark:text-white"></div>
  );
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [inputDisabled, setInputDisabled] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    fetch("https://www.reddit.com/api/v1/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=password&username=${username}&password=${password}`,
      mode: "no-cors",
      redirect: "follow",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
          setLoading(false);
        } else {
          console.log(
            `Logged in as ${data.access_token.slice(
              0,
              5
            )}...${data.access_token.slice(-5)}`
          );
          localStorage.setItem("token", data.access_token);
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
          setError("");
          setLoading(false);

          // window.location.reload();
        }
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="w-full max-w-sm">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={() => {
            handleSubmit();
            setInputDisabled(true);
          }}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 rq"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className={
                "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " +
                (username.length < 3
                  ? " invalid:border-red-500 invalid:shadow-red-300"
                  : username.length >= 20
                  ? "border-green-500 shadow-green-300"
                  : "")
              }
              id="username"
              type="text"
              placeholder="yourUsername_"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              minLength={3}
              maxLength={20}
              autoComplete="off"
              disabled={inputDisabled}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 rq"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={
                "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" +
                (password.length < 8
                  ? " invalid:border-red-500 invalid:shadow-red-300"
                  : "")
              }
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
              autoComplete="off"
              disabled={inputDisabled}
            />
          </div>
          <div className="flex flex-col items-center justify-between">
            <button
              className={
                "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" +
                (username.length < 3 ||
                password.length < 3 ||
                loading ||
                username.length > 20
                  ? " opacity-70 cursor-not-allowed hover:bg-blue-500"
                  : "")
              }
              disabled={username.length < 3 || password.length < 3 || loading}
              type="submit"
              onSubmit={handleSubmit}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 mr-2">
                    <FaSpinner
                      className="w-4 h-4 animate-spin"
                      variant="primary"
                    />
                  </div>
                  <span>
                    <TypeWriter content="Logging in..." speed={70} />
                  </span>
                </div>
              ) : (
                "Login"
              )}
            </button>
          </div>
          {error ? (
            <div className="text-red-500 text-sm font-bold mb-2">{error}</div>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
};

const Coffee = () => {
  return (
    <div>
      <div className="mx-2 mb-2">
        <div className="flex flex-col items-center justify-center h-full">
          {localStorage.getItem("token") ? <Reddit /> : <Login />}
        </div>
      </div>
    </div>
  );
};

export default Coffee;
