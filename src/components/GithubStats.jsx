import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GithubStats = () => {
  const [profile, setProfile] = useState(null);
  const [statsError, setStatsError] = useState(false);
  const [streakError, setStreakError] = useState(false);
  const [graphError, setGraphError] = useState(false);

  const githubUrl = "https://github.com/Rahul-315";
  const username = "Rahul-315";

  // Multiple fallback URLs for better reliability
  const STATS_URLS = [
    `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&cache_seconds=1800`,
  ];

  const STREAK_URLS = [
    `https://streak-stats.demolab.com/?user=${username}&theme=tokyonight`,
  ];

  const GRAPH_URLS = [
    `https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=tokyo-night`,
  ];

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch(() => setProfile(null));
  }, []);

  // Helper function to handle image load with retry
  const handleImageLoad = (e, setError) => {
    // Image loaded successfully
  };

  const handleImageError = (e, setError) => {
    setError(true);
    console.warn("GitHub stats image failed to load:", e.target.src);
  };

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
        {/* GitHub Stats Card */}
        <a href={githubUrl} target="_blank" rel="noreferrer">
          {!statsError ? (
            <img
              src={STATS_URLS[0]}
              alt="GitHub Stats"
              className="rounded-xl shadow-lg hover:scale-105 transition"
              onLoad={(e) => handleImageLoad(e, setStatsError)}
              onError={(e) => handleImageError(e, setStatsError)}
              loading="lazy"
            />
          ) : (
            <div className="glass rounded-xl p-6 text-gray-400 w-64 mx-auto">
              <p className="text-sm">
                📊 Stats temporarily unavailable
                <br />
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 text-xs mt-2 inline-block"
                >
                  View on GitHub →
                </a>
              </p>
            </div>
          )}
        </a>

        {/* GitHub Streak Stats - Most Reliable */}
        <a href={githubUrl} target="_blank" rel="noreferrer">
          {!streakError ? (
            <img
              src={STREAK_URLS[0]}
              alt="GitHub Streak"
              className="rounded-xl shadow-lg hover:scale-105 transition"
              onLoad={(e) => handleImageLoad(e, setStreakError)}
              onError={(e) => handleImageError(e, setStreakError)}
              loading="lazy"
            />
          ) : (
            <div className="glass rounded-xl p-6 text-gray-400 w-64 mx-auto">
              <p className="text-sm">
                🔥 Streak Stats unavailable
                <br />
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 text-xs mt-2 inline-block"
                >
                  View on GitHub →
                </a>
              </p>
            </div>
          )}
        </a>
      </div>

      {/* GitHub Activity Graph */}
      <div className="mb-12">
        <a href={githubUrl} target="_blank" rel="noreferrer">
          {!graphError ? (
            <img
              src={GRAPH_URLS[0]}
              alt="GitHub Activity Graph"
              className="rounded-xl shadow-lg mx-auto hover:scale-105 transition"
              onLoad={(e) => handleImageLoad(e, setGraphError)}
              onError={(e) => handleImageError(e, setGraphError)}
              loading="lazy"
            />
          ) : (
            <div className="glass rounded-xl p-6 text-gray-400 max-w-2xl mx-auto">
              <p className="text-sm">
                📈 Activity Graph temporarily unavailable
                <br />
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 text-xs mt-2 inline-block"
                >
                  View on GitHub →
                </a>
              </p>
            </div>
          )}
        </a>
      </div>

      {/* Helpful note */}
      <p className="text-xs text-gray-500 mt-8">
        💡 If stats show "unavailable", it's likely a temporary service issue.
        <br />
        All data is live from GitHub and will refresh automatically.
      </p>
    </section>
  );
};

export default GithubStats;
