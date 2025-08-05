import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = ({ collectionCount }) => {
  const { pathname } = useLocation();

  const isActive = (path) =>
    pathname === path
      ? "bg-indigo-600 text-white"
      : "bg-gray-300 hover:bg-indigo-500 text-white";

  return (
    <header className="bg-white shadow-sm py-6 text-center">
      <h1 className="text-2xl font-bold flex justify-center items-center gap-2">
        <span role="img" aria-label="fire">
          🔥
        </span>
        Pokemon Collection App
      </h1>
      <p className="text-gray-600 text-sm mt-1">
        Discover, collect, and organize your favorite Pokemon!
      </p>

      <div className="mt-4 flex justify-center gap-4">
        <Link
          to="/"
          className={`px-4 py-2 rounded-full font-medium transition ${isActive(
            "/"
          )}`}
        >
          Discover Pokemon
        </Link>
        <Link
          to="/collection"
          className={`px-4 py-2 rounded-full font-medium transition ${isActive(
            "/collection"
          )}`}
        >
          My Collection ({collectionCount})
        </Link>
      </div>
    </header>
  );
};

export default Header;
