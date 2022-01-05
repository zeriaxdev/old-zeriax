import Header from "../components/Header";
import { useEffect, useState } from "react";

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const url = `https://api.github.com/users/theZeriax`;

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
      bg-gray-400/20 dark:bg-zinc-900 dark:text-slate-50
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
          <div
            className="
            lg:col-span-1
            "
          >
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

// const FetchRepos = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(`${url}/repos`)
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

//   return data ? (
//     <div className="max-w-screen-xl mx-auto rounded-3xl">
//       <div className="flex flex-col">
//         <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-3xl">
//           <div
//             className="
//           align-middle inline-block min-w-full rounded-3xl
//           sm:rounded-lg border-b border-gray-200 dark:border-gray-700
//           "
//           >
//             <table className="min-w-full">
//               <thead>
//                 <tr>
//                   <th
//                     className="
//                     px-6 py-4 bg-gray-50 text-left rounded-t-3xl
//                     text-xs leading-4 font-medium text-gray-500 uppercase
//                     tracking-wider dark:text-gray-400 dark:bg-zinc-900
//                     "
//                     colSpan="2"
//                   >
//                     Repositories
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white dark:bg-zinc-900">
//                 {data.map((repo) => (
//                   <tr className={`repoID:${repo.id}`}>
//                     <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-zinc-700">
//                       <div className="flex items-center">
//                         <div className="flex-shrink-0 h-10 w-10">
//                           <img
//                             className="h-10 w-10 rounded-full"
//                             src={repo.owner.avatar_url}
//                             alt={repo.owner.login}
//                           />
//                         </div>
//                         <div className="ml-4">
//                           <div className="text-sm leading-5 font-medium text-gray-900 dark:text-gray-100">
//                             <a
//                               href={repo.owner.html_url}
//                               className="underline text-gray-600 dark:text-gray-400"
//                             >
//                               {repo.owner.login}
//                             </a>
//                           </div>
//                           <div className="text-sm leading-5 text-gray-500 dark:text-gray-400">
//                             {repo.name}
//                           </div>
//                         </div>
//                         <div className="ml-7 text-gray-600 dark:text-zinc-400">
//                           {repo.fork ? <BiGitRepoForked /> : ""}
//                         </div>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   ) : (
//     <div>Loading...</div>
//   );
// };

const Github = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="Github bg-white dark:bg-zinc-800 dark:text-slate-50">
          <div className="container mx-auto px-4">
            <h1 className="text-center mt-10">GitHub Stats</h1>
            <div className="flex justify-between items-center py-3">
              <div className="flex items-center flex-col md:flex-row">
                <div className="m-5">
                  <FetchUser />
                </div>
              </div>
            </div>
            {/* <h2 className="text-center">Repositories</h2>
            <div className="flex justify-between items-center py-3">
              <div className="flex items-center flex-col md:flex-row">
                <div className="items-center">
                  <FetchRepos />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Github;
