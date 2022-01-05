import React, { useState, useEffect } from "react";
import { FaArrowUp, FaRedditAlien } from "react-icons/fa";

import "plyr-react/dist/plyr.css";

const Reddit = ({ urlToFetch: url }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  });

  return data ? (
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
              <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 dark:text-gray-400">
                {post.data.selftext.length > 400
                  ? post.data.selftext.substring(0, 400) + " ..."
                  : post.data.selftext}
              </div>
              <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 dark:text-gray-400">
                <FaArrowUp className="mr-1" />
                <span>{post.data.score}</span>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-300">
                <span>{post.data.num_comments} comments</span>
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
  ) : (
    <div className="text-center dark:text-white"></div>
  );
};

const Coffee = () => {
  let [sub, setSub] = useState("all");
  let [sortBy, setSortBy] = useState("hot");

  useEffect(() => {
    const url = new URL(window.location.href);
    const subreddit = url.searchParams.get("sub");
    const sort = url.searchParams.get("sort");
    if (subreddit) {
      setSub(subreddit);
    }
    if (sort) {
      setSortBy(sort);
    }
  }, []);

  return (
    <div>
      <h1 className="text-center dark:text-white mb-4">r/{sub} top posts</h1>
      <div className="mx-2 mb-2">
        <Reddit
          urlToFetch={`https://www.reddit.com/r/${sub}/${sortBy}/.json`}
        />
      </div>
    </div>
  );
};

export default Coffee;
