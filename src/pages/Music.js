import { AiOutlineHeart } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

var client_id = "41f234c1800a48fd8eeb124e359ce3cd"; // Your client id
// var client_secret = "2a3391eefbb242189c5e9f86934f433c"; // Your secret
var redirect_uri = "http://localhost:3000/music"; // Your redirect uri

const songs = [
  {
    id: 1,
    title: "Discord",
    artist: "the discordian",
    src: "https://www.myinstants.com/media/sounds/omaewa.mp3",
    cover: "https://cdn.discordapp.com/embed/avatars/0.png",
  },
  {
    id: 2,
    title: "Never Gonna Give You Up",
    artist: "Rick Astley",
    src: "https://www.myinstants.com/media/sounds/vine.mp3",
    cover: "https://cdn.discordapp.com/embed/avatars/2.png",
  },
];

const Music = () => {
  return (
    <div className="flex flex-auto items-center justify-center h-screen">
      {window.location.href.includes("access_token") ? (
        <MainPage />
      ) : (
        <LoginPage />
      )}
    </div>
  );
};

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div id="login">
        <a
          href={`https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=token&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20playlist-modify-private`}
          className="text-xl font-bold text-white bg-zinc-200 dark:bg-zinc-900 rounded-3xl p-6"
        >
          Login with Spotify
        </a>
      </div>
    </div>
  );
};

const MainPage = () => {
  return (
    <div className="bg-zinc-200 dark:bg-zinc-900 shadow-lg rounded-xl p-3">
      {songs.map((song) => (
        <div>
          <div className="group relative">
            <img
              className="w-full md:w-72 block rounded-xl"
              src={song.cover}
              alt=""
            />
            <div className="absolute bg-black rounded-xl bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
              <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                <AiOutlineHeart className="w-6 h-6" />
              </button>

              <button
                className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
                onClick={() => {
                  const audio = new Audio(song.src);

                  if (!audio.paused) {
                    audio.pause();
                  } else {
                    audio.play();
                  }
                }}
              >
                <FaPlay className="w-5 h-5" />
              </button>

              <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                <HiOutlineDotsHorizontal className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="p-5">
            <h3 className="text-gray-800 dark:text-gray-200 font-bold text-lg">
              {song.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-400">{song.artist}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Music;
