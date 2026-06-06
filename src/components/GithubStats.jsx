import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GithubStats = () => {
  const [profile, setProfile] = useState(null);
  const [statsError, setStatsError] = useState(false);
  const [streakError, setStreakError] = useState(false);
  const [graphError, setGraphError] = useState(false);

  const githubUrl = "https://github.com/Rahul-315";
  const username = "Rahul-315";

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch(() => setProfile(null));
  }, []);

  return (
    <section className="py-24 text-center px-6">
      <h2 className="text-5xl font-bold mb-16">GitHub Stats</h2>

      {profile && (
        <motion.a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          className="block glass max-w-xl mx-auto p-8 rounded-2xl mb-12 shadow-xl cursor-pointer"
        >
          <img
            src={profile.avatar_url}
            alt="avatar"
            className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-indigo-500"
          />
          <h3 className="text-2xl font-bold">{profile.name}</h3>
          <p className="text-gray-400">@{profile.login}</p>
          <div className="flex justify-center gap-8 mt-6 text-sm">
            <div>
              <p className="text-xl font-bold">{profile.public_repos}</p>
              <p className="text-gray-400">Repos</p>
            </div>
            <div>
              <p className="text-xl font-bold">{profile.followers}</p>
              <p className="text-gray-400">Followers</p>
            </div>
            <div>
              <p className="text-xl font-bold">{profile.following}</p>
              <p className="text-gray-400">Following</p>
            </div>
          </div>
        </motion.a>
      )}

      <div className="flex flex-col md:flex-row justify-center gap-10 mb-12">
        <a href={githubUrl} target="_blank" rel="noreferrer">
          {!statsError ? (
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&cache_seconds=1800`}
              alt="GitHub Stats"
              className="rounded-xl shadow-lg hover:scale-105 transition"
              onError={() => setStatsError(true)}
            />
          ) : (
            <div className="glass rounded-xl p-6 text-gray-400 w-64 mx-auto">
              <p>GitHub Stats unavailable</p>
            </div>
          )}
        </a>

        {/* ✅ Fixed: was herokuapp.com (dead), now demolab.com (official) */}
        <a href={githubUrl} target="_blank" rel="noreferrer">
          {!streakError ? (
            <img
              src={`https://streak-stats.demolab.com/?user=${username}&theme=tokyonight`}
              alt="GitHub Streak"
              className="rounded-xl shadow-lg hover:scale-105 transition"
              onError={() => setStreakError(true)}
            />
          ) : (
            <div className="glass rounded-xl p-6 text-gray-400 w-64 mx-auto">
              <p>Streak Stats unavailable</p>
            </div>
          )}
        </a>
      </div>

      <div className="mb-12">
        <a href={githubUrl} target="_blank" rel="noreferrer">
          {!graphError ? (
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=tokyo-night`}
              alt="GitHub Activity Graph"
              className="rounded-xl shadow-lg mx-auto hover:scale-105 transition"
              onError={() => setGraphError(true)}
            />
          ) : (
            <div className="glass rounded-xl p-6 text-gray-400 max-w-2xl mx-auto">
              <p>Activity Graph unavailable</p>
            </div>
          )}
        </a>
      </div>
    </section>
  );
};

export default GithubStats;
