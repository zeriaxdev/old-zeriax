import Header from "../components/Header";
import { useEffect, useState } from "react";
import Linkify from "linkify-react";
import "animate.css";
import Vivus from "vivus";
import { FiGithub } from "react-icons/fi";

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

let username = "zeriaxdev";
const url = `https://api.github.com/users/${username}`;

const FetchUser = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return data ? (
    <div className="bg-white dark:bg-zinc-800 dark:text-slate-50">
      <div
        className="
      min-w-2xl max-w-3xl mx-auto py-12 px-4
      sm:px-6 lg:py-16 lg:px-8 rounded-2xl 
      bg-gray-300/20 dark:bg-zinc-900 dark:text-slate-50
      shadow-lg shadow-zinc-300/50 dark:shadow-zinc-900/50
      "
      >
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="px-2 sm:px-0">
              <h3
                className="
              text-3xl leading-9 font-extrabold tracking-tight text-gray-900 
              dark:text-gray-100 sm:text-4xl sm:leading-10
              "
              >
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
                  {data.blog ? (
                    <a
                      href={`https://` + data.blog}
                      className="underline text-gray-600 dark:text-gray-400"
                    >
                      {data.blog ? data.blog : "No twitter"}
                    </a>
                  ) : (
                    "No website"
                  )}
                </dd>
                <dt className="text-sm leading-5 font-medium text-gray-500 dark:text-gray-400 pt-2.5">
                  Twitter
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 dark:text-gray-100">
                  {data.twitter_username ? (
                    <a
                      href={`https://twitter.com/` + data.twitter_username}
                      className="underline text-gray-600 dark:text-gray-400"
                    >
                      {data.twitter_username
                        ? data.twitter_username
                        : "No twitter"}
                    </a>
                  ) : (
                    "No twitter"
                  )}
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
          <div className="lg:col-span-1">
            <div className="p-2 sm:px-0">
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

const FetchRepository = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${url}/repos`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return data
    ? data.map((repo) => {
        return (
          <div className="mb-5" key={repo.id}>
            <div className="bg-white dark:bg-zinc-800 dark:text-slate-50">
              <div
                className="
    min-w-2xl max-w-3xl mx-auto py-12 px-4
    sm:px-6 lg:py-16 lg:px-8 rounded-2xl 
    bg-gray-300/20 dark:bg-zinc-900 dark:text-slate-50
    shadow-lg shadow-zinc-300/50 dark:shadow-zinc-900/50
    "
              >
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                  <div className="lg:col-span-1">
                    <div className="px-2 sm:px-0">
                      <h3 className="text-2xl leading-8 font-extrabold text-gray-900 dark:text-gray-100">
                        <a href={repo.html_url} className="url">
                          {repo.name}
                        </a>
                      </h3>
                      <Linkify tagName="p">
                        <p className="mt-3 text-md leading-6 text-gray-500 dark:text-gray-400">
                          {repo.description
                            ? repo.description
                            : "No description"}
                        </p>
                      </Linkify>

                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="h-12 w-12 rounded-full"
                            src={repo.owner.avatar_url}
                            alt={repo.owner.login}
                          />
                        </div>
                        <div className="ml-3">
                          <div className="text-base leading-6 font-medium text-gray-900 dark:text-gray-100">
                            {repo.owner.login}
                          </div>
                          <div className="mt-1 text-sm leading-5 text-gray-500 dark:text-gray-400">
                            <a href={repo.html_url} className="underline">
                              {repo.full_name}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-0 md:col-span-1">
                    <div className="p-2 sm:px-0">
                      <dl>
                        <dt className="text-sm leading-5 font-medium text-gray-500 dark:text-gray-400 pt-2.5">
                          Language
                        </dt>
                        <dd className="mt-1 text-sm leading-5 text-gray-900 dark:text-gray-100">
                          {repo.language ? (
                            <span
                              className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-gray-200 dark:bg-zinc-800 dark:text-gray-100`}
                            >
                              <img
                                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${
                                  repo.language
                                    ? repo.language.toLowerCase()
                                    : "github"
                                }/${
                                  repo.language
                                    ? repo.language.toLowerCase()
                                    : "github"
                                }-original.svg`}
                                alt=""
                                className="h-4 w-4 mr-1"
                              />
                              {repo.language}
                            </span>
                          ) : (
                            "No language"
                          )}
                        </dd>
                        <dt className="text-sm leading-5 font-medium text-gray-500 dark:text-gray-400 pt-2.5">
                          Created at
                        </dt>
                        <dd className="mt-1 text-sm leading-5 text-gray-900 dark:text-gray-100">
                          {new Date(repo.created_at).toLocaleDateString(
                            "en-UK",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                            }
                          )}
                        </dd>
                        <dt className="text-sm leading-5 font-medium text-gray-500 dark:text-gray-400 pt-2.5">
                          Updated at
                        </dt>
                        <dd className="mt-1 text-sm leading-5 text-gray-900 dark:text-gray-100">
                          {new Date(repo.updated_at).toLocaleDateString(
                            "en-UK",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                            }
                          )}
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="p-2 sm:px-0">
                      <dl>
                        <dt className="text-sm leading-5 font-medium text-gray-500 dark:text-gray-400 pt-2.5">
                          Open Issues
                        </dt>
                        <dd className="mt-1 text-sm leading-5 text-gray-900 dark:text-gray-100">
                          {repo.open_issues}
                        </dd>
                        <dt className="text-sm leading-5 font-medium text-gray-500 dark:text-gray-400 pt-2.5">
                          Watchers
                        </dt>
                        <dd className="mt-1 text-sm leading-5 text-gray-900 dark:text-gray-100">
                          {repo.watchers}
                        </dd>
                        <dt className="text-sm leading-5 font-medium text-gray-500 dark:text-gray-400 pt-2.5">
                          Forks
                        </dt>
                        <dd className="mt-1 text-sm leading-5 text-gray-900 dark:text-gray-100">
                          {repo.forks}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })
    : "Loading...";
};

const Github = () => {
  useEffect(() => {
    new Vivus("github-logo", {
      type: "delayed",
      duration: 300,
      start: "autostart",
      dashGap: 10,
      forceRender: false,
      animTimingFunction: Vivus.EASE,
      pathTimingFunction: Vivus.EASE,
      delay: 100,
    });
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="github bg-white dark:bg-zinc-800 dark:text-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center mt-12">
              <FiGithub className="w-32 h-32" id="github-logo" />
            </div>
            <h1 className="text-center mt-10">GitHub Stats</h1>
            <div className="flex justify-between items-center py-3">
              <div className="flex items-center flex-col md:flex-row">
                <div className="m-5">
                  <FetchUser />
                </div>
              </div>
            </div>
            <h2 className="text-center">Repositories</h2>
            <div className="flex items-center flex-col">
              <div className="m-5">
                <FetchRepository>
                  {({ data, loading, error }) => {
                    if (loading) return "Loading...";
                    if (error) return `Error! ${error.message}`;
                    return <FetchRepository data={data} />;
                  }}
                </FetchRepository>
              </div>
            </div>
          </div>
        </div>
        <div className="portrait:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f3f4f5"
              fill-opacity="0.1"
              d="M0,160L26.7,170.7C53.3,181,107,203,160,197.3C213.3,192,267,160,320,160C373.3,160,427,192,480,186.7C533.3,181,587,139,640,112C693.3,85,747,75,800,90.7C853.3,107,907,149,960,138.7C1013.3,128,1067,64,1120,64C1173.3,64,1227,128,1280,149.3C1333.3,171,1387,149,1413,138.7L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="landscape:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#F3F4F5"
              fill-opacity="0.1"
              d="M0,192L60,213.3C120,235,240,277,360,261.3C480,245,600,171,720,154.7C840,139,960,181,1080,176C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Github;
