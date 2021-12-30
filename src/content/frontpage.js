import { useEffect, useState } from "react/cjs/react.development";

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const url = `https://api.github.com/users/thezeriax`;

const Fetch = () => {
  const [data, setData] = useState(false);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setData);
  }, []);

  return data ? (
    <div className="bg-white dark:bg-zinc-800 dark:text-slate-50">
      <div className="min-w-3xl max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 rounded-2xl bg-zinc-700">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="px-2 sm:px-0">
              <h3 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10">
                {data.name}
              </h3>
              <p className="mt-3 text-lg leading-6 text-gray-500 dark:text-gray-400">
                {data.bio}
              </p>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={data.avatar_url}
                    alt={data.name}
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base leading-6 font-medium text-gray-900 dark:text-gray-100">
                    {data.login}
                  </div>
                  <div className="mt-1 text-sm leading-5 text-gray-500 dark:text-gray-400">
                    {data.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 md:col-span-1">
            <div className="p-2 sm:px-0">
              <dl>
                <dt className="text-sm leading-5 font-medium text-gray-500 dark:text-gray-400 pt-2.5">
                  Company
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 dark:text-gray-100">
                  {data.company ? data.company : "No company"}
                </dd>
                <dt className="text-sm leading-5 font-medium text-gray-500 dark:text-gray-400 pt-2.5">
                  Website
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 dark:text-gray-100">
                  <a
                    href={`https://` + data.blog}
                    className="underline text-gray-600 dark:text-gray-400"
                  >
                    {data.blog ? data.blog : "No website"}
                  </a>
                </dd>
                <dt className="text-sm leading-5 font-medium text-gray-500 dark:text-gray-400 pt-2.5">
                  Twitter
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 dark:text-gray-100">
                  <a
                    href={`https://twitter.com/` + data.twitter_username}
                    className="underline text-gray-600 dark:text-gray-400"
                  >
                    {data.twitter_username
                      ? data.twitter_username
                      : "No twitter"}
                  </a>
                </dd>
                <dt className="text-sm leading-5 font-medium text-gray-500 dark:text-gray-400 pt-2.5">
                  Github
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 dark:text-gray-100">
                  <a
                    href={data.html_url}
                    className="underline text-gray-600 dark:text-gray-400"
                  >
                    {data.html_url}
                  </a>
                </dd>
              </dl>
            </div>
          </div>
          <div
            className="
          lg:col-span-1
          "
          >
            <div className="p-4 sm:px-6">
              <dl>
                <dt className="text-sm leading-5 font-medium text-gray-500 dark:text-gray-400">
                  Followers
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 dark:text-gray-100">
                  {data.followers}
                </dd>
                <dt className="text-sm leading-5 font-medium text-gray-500 dark:text-gray-400">
                  Following
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 dark:text-gray-100">
                  {data.following}
                </dd>
                <dt className="text-sm leading-5 font-medium text-gray-500 dark:text-gray-400 pt-2.5">
                  Public Repos
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 dark:text-gray-100">
                  {data.public_repos}
                </dd>
                <dt className="text-sm leading-5 font-medium text-gray-500 dark:text-gray-400 pt-2.5">
                  Public Gists
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 dark:text-gray-100">
                  {data.public_gists}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

const Frontpage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="frontpage bg-white dark:bg-zinc-800 dark:text-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center">
              <div className="ml-2">
                <Fetch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
