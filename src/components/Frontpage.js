import "../App.css";
import { LinkIcon } from "@heroicons/react/outline";

const Frontpage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="frontpage bg-white dark:bg-zinc-800 dark:text-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center flex-col md:flex-row ">
              <div className="m-5">
                <div>
                  <h1 id="about-me" className="hover:underline">
                    <LinkIcon className="h-7 text-zinc-700 dark:text-zinc-500 inline-flex mr-1 align-baseline" />
                    About me
                  </h1>
                  <p>
                    Hello there! 👋 I'm zeriax, a young developer from Helsinki,
                    Finland. I like imagining things and try my best to improve
                    my skills.
                  </p>
                  <br />
                  <p>
                    I really enjoy programming at my free time! I started my
                    (kind of) full-time journey in July 2021, though I already
                    knew some HTML back in 2017.
                  </p>
                  <h2 id="what-is-this" className="hover:underline mt-7">
                    <LinkIcon className="h-7 text-zinc-700 dark:text-zinc-500 inline-flex mr-1 align-text-top" />
                    What is this?
                  </h2>
                  <p>
                    This website to show off my skills and projects that I have
                    done, hope you like it!
                  </p>
                  <h2 id="projects" className="hover:underline mt-7">
                    <LinkIcon className="h-7 text-zinc-700 dark:text-zinc-500 inline-flex mr-1 align-text-top" />
                    Projects
                  </h2>
                  <p>
                    Currently I&#39;m working on projects like{" "}
                    <a
                      href="https://github.com/libremayk"
                      className="url dark:urldark"
                    >
                      libreMayk
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://github.com/theZeriax/UntitledChat/"
                      className="url dark:urldark"
                    >
                      UntitledChat
                    </a>
                    . More information about them you can find at{" "}
                    <code className="p-1 bg-zinc-200 dark:bg-zinc-700 rounded-lg">
                      <a href="/github" className="url dark:urldark">
                        ./github
                      </a>
                    </code>
                  </p>
                  <h2
                    id="projects"
                    className="hover:underline mt-7"
                    href="/github"
                  >
                    <LinkIcon className="h-7 text-zinc-700 dark:text-zinc-500 inline-flex mr-1 align-text-top" />
                    Fun facts
                  </h2>
                  <p>
                    People say my nickname sounds like a disease, doesn't it?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
