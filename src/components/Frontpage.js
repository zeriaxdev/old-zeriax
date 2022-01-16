import "../App.css";
import TypeWriter from "./TypeWriter";

const Frontpage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="frontpage bg-white dark:bg-zinc-800 dark:text-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <article className="flex items-center flex-col md:flex-row my-5">
              <div>
                <h1 id="about-me">
                  <TypeWriter content="About me" speed={100} />
                </h1>
                <p>
                  Hello there! 👋 I'm zeriax, a young developer from Helsinki,
                  Finland. I like imagining things and try my best to improve my
                  skills.
                </p>
                <br />
                <p>
                  I really enjoy programming at my free time! I started my (kind
                  of) full-time journey in July 2021, though I already knew some
                  HTML back in 2017.
                </p>
                <h2 id="what-is-this" className="mt-7">
                  What is this?
                </h2>
                <p>
                  This website is made to show off my skills and projects that I
                  have done, hope you like it!
                </p>
                <h2 id="projects" className="mt-7">
                  Projects
                </h2>
                <p>
                  Currently I'm working on the projects like{" "}
                  <a
                    href="https://github.com/libremayk"
                    className="url dark:urldark"
                  >
                    libreMayk
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://github.com/zeriaxdev/UntitledChat/"
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
                <h2 id="projects" className="mt-7" href="/github">
                  Fun facts
                </h2>
                <p>
                  People say my nickname sounds like a disease. Doesn't it,
                  really?
                </p>
                <h2 className="mt-7">Let's connect</h2>
                <p>
                  You can find me on{" "}
                  <a
                    href="https://twitter.com/zeriaxdev"
                    className="hover:underline"
                  >
                    <b>Twitter</b>
                  </a>
                  ,{" "}
                  <a
                    href="https://github.com/zeriaxdev"
                    className="hover:underline"
                  >
                    <b>GitHub</b>
                  </a>
                  ,{" "}
                  <a
                    href="https://www.dev.to/zeriaxdev/"
                    className="hover:underline"
                  >
                    <b>dev.to</b>
                  </a>{" "}
                  or on{" "}
                  <a
                    href="https://medium.com/@zeriax"
                    className="hover:underline"
                  >
                    <b>Medium</b>
                  </a>
                  .
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
