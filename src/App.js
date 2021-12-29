import "./App.css";
import Header from "./content/header.js";
import Frontpage from "./content/frontpage";

function App() {
  return (
    <div className="bg-white dark:bg-zinc-800 min-h-screen">
      <div className="header text-slate-50 dark:text-slate-50">
        <Header />
      </div>
      <div className="Frontpage">
        <Frontpage />
      </div>
    </div>
  );
}

export default App;
